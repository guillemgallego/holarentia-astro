import OpenAI from 'openai';

// Disable prerendering for this API route so it runs on the server
export const prerender = false;

const SYSTEM_INSTRUCTION = "Eres el asistente virtual inteligente de Hola Rentia. Eres amable, sumamente profesional y tu objetivo es ayudar a los usuarios (propietarios de apartamentos) a resolver sus dudas sobre la gestión de su alquiler vacacional de Airbnb. El objetivo de Hola Rentia es ofrecer gestión automatizada con IA por tarifas fijas mensuales (Plan Digital 99€, Plan 360 199€) sin cobrar comisiones abusivas sobre sus ingresos. Tus respuestas deben ser concisas, naturales y persuasivas pero nunca insistentes.";

export async function POST({ request }) {
  try {
    const data = await request.json();
    const history: { role: 'user' | 'assistant'; content: string }[] = data.history || [];
    const message: string = data.message;

    if (!message) {
      return new Response(JSON.stringify({ error: 'El mensaje es requerido' }), { status: 400 });
    }

    const apiKey = import.meta.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'La API Key de OpenAI no está configurada.' }), { status: 500 });
    }

    const openai = new OpenAI({ apiKey });

    const messages = [
      { role: 'system' as const, content: SYSTEM_INSTRUCTION },
      ...history,
      { role: 'user' as const, content: message },
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      max_tokens: 500,
      temperature: 0.7,
    });

    const responseText = completion.choices[0]?.message?.content ?? 'No se pudo obtener respuesta.';

    return new Response(JSON.stringify({ response: responseText }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error en el chat API:', error);
    return new Response(JSON.stringify({ error: 'Error interno del servidor al procesar el mensaje.' }), { status: 500 });
  }
}
