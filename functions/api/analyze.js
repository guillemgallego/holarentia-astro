export async function onRequestPost({ request, env }) {
  const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };

  let body;
  try { body = await request.json(); }
  catch (e) { return new Response(JSON.stringify({ error: 'JSON inválido' }), { status: 200, headers }); }

  const { ciudad, tipo, habitaciones, estado, ingresos_actuales } = body;
  if (!ciudad || !habitaciones) {
    return new Response(JSON.stringify({ error: 'Faltan datos requeridos' }), { status: 200, headers });
  }

  const apiKey = env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API no configurada' }), { status: 200, headers });
  }

  const prompt = `Eres un experto en alquiler vacacional con datos reales de Airbnb y Booking. Analiza esta propiedad y devuelve SOLO un JSON válido, sin markdown, sin texto adicional, sin bloques de código.

PROPIEDAD:
- Ciudad: ${ciudad}
- Tipo: ${tipo || 'Apartamento'}
- Habitaciones: ${habitaciones}
- Estado actual: ${estado || 'No está en Airbnb aún'}
- Ingresos actuales: ${ingresos_actuales || 'Ninguno'}

Devuelve exactamente este JSON con datos realistas para esa ciudad (usa conocimiento real del mercado Airbnb):
{
  "ingreso_potencial_min": <número entero en euros/mes>,
  "ingreso_potencial_max": <número entero en euros/mes>,
  "ocupacion_estimada": <porcentaje entero, ej: 72>,
  "precio_noche_recomendado": <número entero en euros>,
  "ahorro_vs_gestor": <cuánto ahorraría al mes con Hola Rentia vs gestor 20%, número entero>,
  "roi_anual": <porcentaje de mejora de ingresos si aún no está en Airbnb o si ya está, número entero>,
  "top3_mejoras": [
    "<mejora concreta #1 para maximizar ingresos>",
    "<mejora concreta #2>",
    "<mejora concreta #3>"
  ],
  "competencia": "<descripción en 1 frase del mercado en esa ciudad>",
  "temporada_alta": "<meses de temporada alta para esa ciudad>",
  "resumen": "<análisis en 2-3 frases directas y específicas sobre el potencial de esta propiedad en ${ciudad}>"
}`;

  let geminiRes;
  try {
    geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          generationConfig: { maxOutputTokens: 1000, temperature: 0.4 },
        }),
      }
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Error de red: ' + e.message }), { status: 200, headers });
  }

  let data;
  try { data = await geminiRes.json(); }
  catch (e) { return new Response(JSON.stringify({ error: 'Respuesta inválida de IA' }), { status: 200, headers }); }

  if (!geminiRes.ok) {
    return new Response(JSON.stringify({ error: data?.error?.message || 'Error Gemini' }), { status: 200, headers });
  }

  const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

  // Limpiar markdown si lo hay
  const cleaned = raw.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

  let analysis;
  try { analysis = JSON.parse(cleaned); }
  catch (e) { return new Response(JSON.stringify({ error: 'No se pudo parsear el análisis', raw: cleaned.slice(0, 300) }), { status: 200, headers }); }

  return new Response(JSON.stringify({ success: true, analysis }), { status: 200, headers });
}
