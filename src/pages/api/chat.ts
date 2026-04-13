import { GoogleGenerativeAI } from '@google/generative-ai';

// Disable prerendering for this API route so it runs on the server
export const prerender = false;

// SYSTEM_INSTRUCTION_AQUI
// Replace this string with the bot's personality prompt later
const SYSTEM_INSTRUCTION = "Eres el asistente virtual inteligente de Hola Rentia. Eres amable, sumamente profesional y tu objetivo es ayudar a los usuarios (propietarios de apartamentos) a resolver sus dudas sobre la gestión de su alquiler vacacional de Airbnb. El objetivo de Hola Rentia es ofrecer gestión automatizada con IA por tarifas fijas mensuales (Plan Digital 99€, Plan 360 199€) sin cobrar comisiones abusivas sobre sus ingresos. Tus respuestas deben ser concisas, naturales y persuasivas pero nunca insistentes.";

export async function POST({ request }) {
  try {
    const data = await request.json();
    const history = data.history || [];
    const message = data.message;

    if (!message) {
      return new Response(JSON.stringify({ error: 'El mensaje es requerido' }), { status: 400 });
    }

    const apiKey = import.meta.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'La API Key no está configurada.' }), { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    // Use the latest flash model for fast conversational tasks
    const model = genAI.getGenerativeModel({
      model: "gemini-3.1-flash",
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const chat = model.startChat({
      history: history,
    });

    const result = await chat.sendMessage(message);
    const responseText = result.response.text();

    return new Response(JSON.stringify({ response: responseText }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error en el chat API:', error);
    return new Response(JSON.stringify({ error: 'Error interno del servidor al procesar el mensaje.' }), { status: 500 });
  }
}
