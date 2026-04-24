import { findMarketData } from './market-data.js';

export async function onRequestPost({ request, env }) {
  const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };

  let body;
  try { body = await request.json(); }
  catch (e) { return new Response(JSON.stringify({ error: 'JSON inválido' }), { status: 200, headers }); }

  const { ciudad, tipo, habitaciones, estado, ingresos_actuales } = body;
  if (!ciudad) return new Response(JSON.stringify({ error: 'Ciudad requerida' }), { status: 200, headers });

  const apiKey = env.GEMINI_API_KEY;
  if (!apiKey) return new Response(JSON.stringify({ error: 'API no configurada' }), { status: 200, headers });

  // ── 1. DATOS REALES DE MERCADO ───────────────────────────────────
  const marketMatch = findMarketData(ciudad);
  const hasRealData = !!marketMatch;
  const market = marketMatch?.data || null;

  let marketContext = '';
  if (hasRealData) {
    const m = market;
    const weekdayPrice = Math.round(m.avg_nightly);
    const weekendPrice = Math.round(m.avg_nightly * m.weekend_premium);
    marketContext = `
DATOS REALES DE MERCADO PARA ${ciudad.toUpperCase()} (fuente: Inside Airbnb / STR Global Q1 2026):
- País: ${m.country}
- Precio medio por noche (weekday): ${m.currency === 'USD' ? '$' : '€'}${weekdayPrice}
- Precio medio por noche (weekend): ${m.currency === 'USD' ? '$' : '€'}${weekendPrice}
- Ocupación media anual: ${m.occupancy_pct}%
- Ocupación en temporada alta: ${m.peak_occupancy}%
- Temporada alta: ${m.peak_months.join(', ')}
- Nivel de competencia: ${m.competition} (${m.competition === 'high' ? 'mercado maduro, diferenciación clave' : m.competition === 'medium' ? 'oportunidades claras de posicionamiento' : 'mercado poco saturado, ventana de oportunidad'})
- Total listings activos en la ciudad: ~${m.avg_listings?.toLocaleString()}
- Tendencia del mercado: ${m.trend === 'up' ? '📈 crecimiento' : m.trend === 'stable' ? '➡️ estable' : '📉 contracción'}
- Notas de mercado: ${m.notes}`;
  } else {
    marketContext = `
No tenemos datos propios para "${ciudad}". Usa tu conocimiento del mercado Airbnb para esta ciudad/región.
Estima basándote en ciudades similares de la misma región/país.`;
  }

  // ── 2. PROMPT IA ─────────────────────────────────────────────────
  const numHab = habitaciones?.replace(/[^0-9]/g, '') || '2';
  const currency = market?.currency === 'USD' ? 'USD' : '€';
  const sym = currency === 'USD' ? '$' : '€';

  const prompt = `Eres un Revenue Manager experto en alquiler vacacional con 10 años de experiencia en Airbnb y Booking. Tu análisis debe ser REALISTA, ESPECÍFICO y ACCIONABLE. No des consejos genéricos.

${marketContext}

PROPIEDAD A ANALIZAR:
- Ciudad: ${ciudad}
- Tipo: ${tipo || 'Apartamento'}
- Habitaciones: ${habitaciones || '2 habitaciones'}
- Estado: ${estado || 'No está en Airbnb aún'}
- Ingresos actuales: ${ingresos_actuales || 'Ninguno'}

TAREA: Analiza esta propiedad específica usando los datos de mercado y genera un informe de Revenue Intelligence. Devuelve SOLO el siguiente JSON válido sin markdown ni texto extra:

{
  "score": <número 0-100 que representa el potencial global de esta propiedad específica. 0-40 bajo, 40-60 moderado, 60-80 bueno, 80-100 excelente. Tenaz pero realista basado en ubicación+tipo+estado>,
  "score_label": "<una palabra: 'Bajo', 'Moderado', 'Bueno', 'Excelente'>",
  "ingreso_potencial_min": <mínimo mensual en ${currency}, entero, siendo conservador>,
  "ingreso_potencial_max": <máximo mensual en ${currency}, entero, siendo optimista pero realista>,
  "precio_noche_weekday": <precio por noche entre semana recomendado en ${currency}, entero>,
  "precio_noche_weekend": <precio por noche fin de semana recomendado en ${currency}, entero>,
  "ocupacion_anual": <porcentaje entero, ej: 71>,
  "ocupacion_temporada_alta": <porcentaje en pico, entero>,
  "roi_mejora_pct": <porcentaje de mejora de ingresos posible con buena gestión vs estado actual, entero>,
  "potencial_infraexplotado_pct": <porcentaje del potencial que actualmente no se está captando, entero>,
  "ahorro_vs_gestor_tradicional": <ahorro mensual en ${currency} vs gestor al 20%, entero>,
  "ahorro_anual": <ahorro anual en ${currency}, entero>,
  "vs_mercado_pct": <diferencia porcentual estimada vs propiedad media del mercado. +15 significa 15% por encima de la media. Puede ser negativo. Entero>,
  "temporada_alta": "${market?.peak_months?.join(', ') || 'según mercado local'}",
  "nivel_competencia": "${market?.competition || 'medium'}",
  "top3_mejoras": [
    { "titulo": "<título corto impactante>", "descripcion": "<descripción específica de 1 frase>", "impacto": "<ej: +18% ingresos>", "prioridad": "alta" },
    { "titulo": "<título>", "descripcion": "<descripción>", "impacto": "<impacto>", "prioridad": "media" },
    { "titulo": "<título>", "descripcion": "<descripción>", "impacto": "<impacto>", "prioridad": "media" }
  ],
  "diagnostico_principal": "<1 frase directa y brutal sobre el mayor problema o la mayor oportunidad de esta propiedad específica>",
  "analisis_katia": "<análisis emocional y específico de 2-3 frases. Habla de la oportunidad real, menciona la ciudad, sé directa. Ejemplo: 'Tu propiedad en Medellín está dejando €X al mes sobre la mesa...' Usa datos reales del mercado.>",
  "veredicto": "alto_potencial|buen_potencial|potencial_moderado",
  "tiene_datos_reales": ${hasRealData}
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
          generationConfig: { maxOutputTokens: 1200, temperature: 0.3 },
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
    const msg = data?.error?.message || 'Error Gemini';
    return new Response(JSON.stringify({ error: msg }), { status: 200, headers });
  }

  const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
  const cleaned = raw.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

  let analysis;
  try { analysis = JSON.parse(cleaned); }
  catch (e) {
    return new Response(JSON.stringify({ error: 'Error parseando análisis', raw: cleaned.slice(0, 400) }), { status: 200, headers });
  }

  // Añadir metadatos
  analysis.ciudad = ciudad;
  analysis.currency = currency;
  analysis.currency_symbol = sym;
  analysis.has_real_data = hasRealData;
  if (hasRealData) {
    analysis.data_source = `Inside Airbnb / STR Global — ${market.country}`;
  }

  return new Response(JSON.stringify({ success: true, analysis }), { status: 200, headers });
}
