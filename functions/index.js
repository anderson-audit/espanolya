// ==========================================================================
// ¡Español Ya! — Cloud Functions: integración de pagos con Mercado Pago
// ==========================================================================
// Dos funciones:
//   1. createMpCheckout (callable) — el alumno la llama desde la pantalla "Elegí tu plan"
//      (app.js -> startCheckout()). Crea la cobranza en Mercado Pago (pago único anual,
//      o suscripción recurrente mensual) y devuelve el link de checkout (initPoint).
//   2. mpWebhook (HTTP) — Mercado Pago llama a esta URL cada vez que un pago o una
//      suscripción cambia de estado. Confirma el estado real consultando la API de MP
//      (nunca confía ciegamente en el contenido de la notificación) y actualiza
//      Firestore: users/{uid}.subscription + progress_summary/{uid}.subscription.
//
// IMPORTANTE — nada de esto fue probado en vivo (este entorno no tiene acceso de red
// saliente ni credenciales de Mercado Pago). Anderson necesita: (a) crear el secreto
// MP_ACCESS_TOKEN, (b) desplegar con `firebase deploy --only functions`, (c) configurar
// la URL de notificación (webhook) en el panel de Mercado Pago, (d) probar un pago real
// (o de prueba, con las credenciales de test) de punta a punta. Ver GUIA_PAGOS.md.
// ==========================================================================

const { onCall, onRequest, HttpsError } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

// Se define con: firebase functions:secrets:set MP_ACCESS_TOKEN
// (pegar el Access Token de PRODUCCIÓN del panel de Mercado Pago; usar el de TEST mientras
// se están probando los pagos, y cambiar a producción recién cuando todo funcione).
const MP_ACCESS_TOKEN = defineSecret("MP_ACCESS_TOKEN");

const MP_API = "https://api.mercadopago.com";

// -------------------------------------------------------------------------
// 1. createMpCheckout — crea la cobranza y devuelve el link de pago
// -------------------------------------------------------------------------
exports.createMpCheckout = onCall({ secrets: [MP_ACCESS_TOKEN], region: "southamerica-east1" }, async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "Necesitas estar logueado.");
  }
  const uid = request.auth.uid;
  const email = request.auth.token.email || "";
  const plan = request.data && request.data.plan;
  const returnUrl = (request.data && request.data.returnUrl) || "";
  if (plan !== "monthly" && plan !== "annual") {
    throw new HttpsError("invalid-argument", "Plan inválido — debe ser 'monthly' o 'annual'.");
  }

  // Los precios se leen SIEMPRE del servidor (config/settings), nunca del cliente —
  // así un alumno no puede manipular el valor cobrado editando el request.
  const configDoc = await db.collection("config").doc("settings").get();
  const cfg = configDoc.exists ? configDoc.data() : {};
  const priceMonthly = typeof cfg.priceMonthly === "number" ? cfg.priceMonthly : 29.90;
  const priceAnnual = typeof cfg.priceAnnual === "number" ? cfg.priceAnnual : 299.00;
  const amount = plan === "annual" ? priceAnnual : priceMonthly;

  const token = MP_ACCESS_TOKEN.value();
  // back_url con ?mp_return=1 — app.js detecta este parámetro al volver del checkout
  // y muestra la pantalla de agradecimiento (renderCheckoutReturn), ver auth.onAuthStateChanged.
  const backUrl = returnUrl ? `${returnUrl}${returnUrl.includes("?") ? "&" : "?"}mp_return=1` : undefined;

  try {
    let initPoint, externalRef = uid, mpId;

    if (plan === "annual") {
      const body = {
        items: [{
          title: "¡Español Ya! — Plan anual",
          quantity: 1,
          unit_price: amount,
          currency_id: "BRL"
        }],
        external_reference: uid,
        back_urls: backUrl ? { success: backUrl, pending: backUrl, failure: backUrl } : undefined,
        auto_return: backUrl ? "approved" : undefined,
        notification_url: `https://southamerica-east1-${process.env.GCLOUD_PROJECT}.cloudfunctions.net/mpWebhook`
      };
      const resp = await fetch(`${MP_API}/checkout/preferences`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify(body)
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data.message || JSON.stringify(data));
      initPoint = data.init_point;
      mpId = data.id;
    } else {
      // Suscripción mensual SIN plan previo ("suscripción sin plan" en la doc de Mercado
      // Pago): al no mandar card_token_id, la API devuelve init_point y el alumno completa
      // los datos de la tarjeta en la propia página de Mercado Pago.
      const body = {
        reason: "¡Español Ya! — Plan mensual",
        external_reference: uid,
        payer_email: email || undefined,
        back_url: backUrl,
        auto_recurring: {
          frequency: 1,
          frequency_type: "months",
          transaction_amount: amount,
          currency_id: "BRL"
        }
      };
      const resp = await fetch(`${MP_API}/preapproval`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify(body)
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data.message || JSON.stringify(data));
      initPoint = data.init_point;
      mpId = data.id;
    }

    const subscription = {
      plan, status: "pending", amount,
      mpId: mpId || null,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    };
    await db.collection("users").doc(uid).set({ subscription }, { merge: true });
    await db.collection("progress_summary").doc(uid).set({ subscription }, { merge: true });

    return { initPoint };
  } catch (e) {
    logger.error("createMpCheckout falló", e);
    throw new HttpsError("internal", "No se pudo crear el pago: " + e.message);
  }
});

// -------------------------------------------------------------------------
// 2. mpWebhook — Mercado Pago notifica acá cada cambio de estado
// -------------------------------------------------------------------------
// Configurar esta URL (después del primer deploy) en:
// Mercado Pago → Tu negocio → Webhooks → agregar URL de producción.
// Formato esperado (Mercado Pago manda distintos formatos según el evento; cubrimos los
// dos más comunes: pagos de Checkout Pro, y suscripciones/preapproval).
exports.mpWebhook = onRequest({ secrets: [MP_ACCESS_TOKEN], region: "southamerica-east1" }, async (req, res) => {
  try {
    const token = MP_ACCESS_TOKEN.value();
    const topic = req.query.topic || req.query.type || (req.body && req.body.type);
    const id = (req.query["data.id"]) || req.query.id || (req.body && req.body.data && req.body.data.id);

    if (!topic || !id) {
      logger.warn("Webhook recibido sin topic/id reconocible", { query: req.query, body: req.body });
      res.status(200).send("ok"); // 200 igual, para que MP no reintente indefinidamente notificaciones que no reconocemos
      return;
    }

    if (topic === "payment") {
      // Pago único (plan anual) — consultamos el pago real para saber external_reference (uid) y status.
      const resp = await fetch(`${MP_API}/v1/payments/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
      const payment = await resp.json();
      const uid = payment.external_reference;
      if (uid) {
        const status = payment.status === "approved" ? "active" : (payment.status === "pending" || payment.status === "in_process") ? "pending" : "overdue";
        const currentPeriodEnd = status === "active" ? admin.firestore.Timestamp.fromMillis(Date.now() + 365 * 24 * 60 * 60 * 1000) : null;
        const patch = { subscription: { status, mpPaymentId: id, updatedAt: admin.firestore.FieldValue.serverTimestamp(), ...(currentPeriodEnd ? { currentPeriodEnd } : {}) } };
        await db.collection("users").doc(uid).set(patch, { merge: true });
        await db.collection("progress_summary").doc(uid).set(patch, { merge: true });
      }
    } else if (topic === "preapproval" || topic === "subscription_preapproval") {
      // Suscripción mensual — consultamos el preapproval real.
      const resp = await fetch(`${MP_API}/preapproval/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
      const preapproval = await resp.json();
      const uid = preapproval.external_reference;
      if (uid) {
        // status de preapproval: "authorized" (activo), "paused", "cancelled", "pending".
        const status = preapproval.status === "authorized" ? "active" : preapproval.status === "cancelled" ? "overdue" : "pending";
        const patch = { subscription: { status, mpSubscriptionId: id, updatedAt: admin.firestore.FieldValue.serverTimestamp() } };
        await db.collection("users").doc(uid).set(patch, { merge: true });
        await db.collection("progress_summary").doc(uid).set(patch, { merge: true });
      }
    } else if (topic === "subscription_authorized_payment") {
      // Cada cobro MENSUAL recurrente de una suscripción ya activa genera este evento —
      // lo usamos para renovar currentPeriodEnd y confirmar que sigue "active".
      const resp = await fetch(`${MP_API}/authorized_payments/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
      const authPayment = await resp.json();
      const preapprovalId = authPayment.preapproval_id;
      if (preapprovalId) {
        const presp = await fetch(`${MP_API}/preapproval/${preapprovalId}`, { headers: { "Authorization": `Bearer ${token}` } });
        const preapproval = await presp.json();
        const uid = preapproval.external_reference;
        if (uid) {
          const status = authPayment.status === "approved" ? "active" : "overdue";
          const currentPeriodEnd = admin.firestore.Timestamp.fromMillis(Date.now() + 30 * 24 * 60 * 60 * 1000);
          const patch = { subscription: { status, currentPeriodEnd, updatedAt: admin.firestore.FieldValue.serverTimestamp() } };
          await db.collection("users").doc(uid).set(patch, { merge: true });
          await db.collection("progress_summary").doc(uid).set(patch, { merge: true });
        }
      }
    } else {
      logger.info("Webhook con topic no manejado (ignorado a propósito): " + topic);
    }

    res.status(200).send("ok");
  } catch (e) {
    logger.error("mpWebhook falló", e);
    // Devolvemos 200 igual: si devolvemos error, Mercado Pago reintenta en loop y puede
    // saturar los logs sin resolver nada si el error es de nuestro lado (ej. uid inexistente).
    res.status(200).send("error-logged");
  }
});
