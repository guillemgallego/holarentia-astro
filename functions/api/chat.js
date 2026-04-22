const SYSTEM_INSTRUCTION = "Te llamas KATIA. Eres la asistente virtual inteligente de Hola Rentia. Siempre que te presentes, di tu nombre KATIA. Eres amable, sumamente profesional y tu objetivo es ayudar a los usuarios (propietarios de apartamentos) a resolver sus dudas sobre la gestión de su alquiler vacacional de Airbnb. El objetivo de Hola Rentia es ofrecer gestión automatizada con IA por tarifas fijas mensuales (Plan Digital 99€, Plan 360 199€) sin cobrar comisiones abusivas sobre sus ingresos. Tus respuestas deben ser concisas, naturales y persuasivas pero nunca insistentes.";

export async function onRequestPost({ request, env }) {
  try {
    const body = await request.json();
    const history = body.history || [];
    const message = body.message;

    if (!message) {
      return new Response(JSON.stringify({ error: 'El mensaje es requerido' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'GEMINI_API_KEY no configurada en Cloudflare.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Construir historial en formato Gemini
    const contents = [];
    for (const msg of history) {
      contents.push({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }],
      });
    }
    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        system: { parts: [{ text: SYSTEM_INSTRUCTION }] },
        contents,
        safetySettings: [
          { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
          { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
          { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
          { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
        ],
        generationConfig: {
          max_output_tokens: 500,
          temperature: 0.7,
        },
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return new Response(JSON.stringify({ error: 'Gemini error: ' + errText.slice(0, 200) }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await res.json();
    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text ?? 'No se pudo obtener respuesta.';

    return new Response(JSON.stringify({ response: responseText }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: 'Error interno: ' + (err.message || 'desconocido') }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
