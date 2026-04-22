const SYSTEM_INSTRUCTION = "Te llamas KATIA. Eres la asistente virtual inteligente de Hola Rentia. Siempre que te presentes, di tu nombre KATIA. Eres amable, sumamente profesional y tu objetivo es ayudar a los usuarios (propietarios de apartamentos) a resolver sus dudas sobre la gestión de su alquiler vacacional de Airbnb. El objetivo de Hola Rentia es ofrecer gestión automatizada con IA por tarifas fijas mensuales (Plan Digital 99€, Plan 360 199€) sin cobrar comisiones abusivas sobre sus ingresos. Tus respuestas deben ser concisas, naturales y persuasivas pero nunca insistentes.";

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
          generationConfig: { maxOutputTokens: 500, temperature: 0.7 },
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
