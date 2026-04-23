const SYSTEM_INSTRUCTION = `Eres KATIA, asistente de Hola Rentia. Al presentarte di: "Soy KATIA de Hola Rentia".

ESTILO: Respuestas cortas y directas. Sin introducción, sin relleno. Si la pregunta es simple, responde en 1-2 frases. Solo explica más si el usuario lo pide o la pregunta es compleja. Termina SIEMPRE la frase, nunca cortes a medias.

HOLA RENTIA — QUÉ ES:
Gestión de alquileres vacacionales con IA + equipo local. Tarifa fija mensual, 0% comisión sobre ingresos, sin permanencia, garantía 30 días. Opera en +20 países (España, México, Colombia, Panamá, Costa Rica, Argentina, Chile, Perú, Uruguay, Puerto Rico, R. Dominicana y más).

PLANES:
• Plan Digital €99/mes: SEO del anuncio, precios dinámicos IA (+20% ingresos), atención huéspedes 24/7, auto check-in, registro viajeros (España), filtro anti-fiestas, sincronización calendarios.
• Plan 360 €199/mes ⭐: Todo lo anterior + coordinación limpieza, gestión mantenimiento, cerraduras inteligentes, gestión AirCover, soporte VIP WhatsApp, control inventario.
• Cartera 3+ propiedades: precio especial, contactar directamente.

EJEMPLO DE AHORRO: €3.000/mes ingresos → gestor tradicional cobra €600 (20%) → con Hola Rentia pagas €199 → ahorras €401/mes = €4.812/año.

PREGUNTAS FRECUENTES:
- Llaves: cerraduras electrónicas o lockboxes, check-in autónomo 24h sin presencia física.
- Dinero: cobras directo de Airbnb/Booking a tu cuenta. Nosotros no tocamos tu dinero.
- Limpieza: la paga el huésped. En Plan 360 la coordinamos sin coste extra.
- Permanencia: ninguna. Cancela cuando quieras.
- Registro viajeros: automático, envío a Policía/Guardia Civil sin que hagas nada.
- Países: +20. Sistema online; logística con equipo local del propietario o te ayudamos a crearlo.

CONVERSIÓN: Si el usuario quiere contratar → mándalo a holarentia.com/empezar/ . Si tiene duda que no puedes resolver → dile que contacte por WhatsApp desde la web.`;

export async function onRequestPost({ request, env }) {
  const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };

  let body;
  try { body = await request.json(); }
  catch (e) { return new Response(JSON.stringify({ error: 'JSON inválido' }), { status: 200, headers }); }

  const message = (body && body.message) ? String(body.message) : '';
  const history = (body && Array.isArray(body.history)) ? body.history : [];

  if (!message) {
    return new Response(JSON.stringify({ error: 'Mensaje vacío' }), { status: 200, headers });
  }

  const apiKey = env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'GEMINI_API_KEY no configurada' }), { status: 200, headers });
  }

  // Construir historial Gemini
  const contents = [];
  for (const msg of history) {
    if (msg && msg.role && msg.content) {
      contents.push({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: String(msg.content) }],
      });
    }
  }
  contents.push({ role: 'user', parts: [{ text: message }] });

  let geminiRes;
  try {
    geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
          contents,
          generationConfig: { maxOutputTokens: 1500, temperature: 0.7 },
        }),
      }
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Error de red: ' + e.message }), { status: 200, headers });
  }

  let data;
  try { data = await geminiRes.json(); }
  catch (e) { return new Response(JSON.stringify({ error: 'Respuesta Gemini inválida' }), { status: 200, headers }); }

  if (!geminiRes.ok) {
    const msg = data?.error?.message || JSON.stringify(data).slice(0, 200);
    return new Response(JSON.stringify({ error: 'Gemini: ' + msg }), { status: 200, headers });
  }

  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    return new Response(JSON.stringify({ error: 'Sin respuesta de Gemini', raw: JSON.stringify(data).slice(0, 300) }), { status: 200, headers });
  }

  return new Response(JSON.stringify({ response: text }), { status: 200, headers });
}
