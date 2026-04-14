import { GoogleGenerativeAI } from '@google/generative-ai';

// Al usar Astro 5 con Cloudflare en modo static, false habilita SSR
export const prerender = false;

// Inicializar Gemini
// Asegúrate de definir GEMINI_API_KEY en .env o en Cloudflare
const genAI = new GoogleGenerativeAI(import.meta.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const SYSTEM_INSTRUCTION = `Eres el asistente virtual IA exclusivo de "Hola Rentia", experto en gestión de alquileres vacacionales en España (Airbnb, Booking, etc.).
Tu tono es amable, profesional y directo. Tu meta es resolver dudas de propietarios y convencerlos de que Hola Rentia es su mejor aliado.`;

export async function POST({ request }) {
  try {
    const body = await request.json();
    const userMessage = body.message;
    const history = body.history || [];

    const formattedHistory = [
      { role: "user", parts: [{ text: "System prompt (leer solo, no responder): " + SYSTEM_INSTRUCTION }] },
      { role: "model", parts: [{ text: "Entendido, soy el asistente de Hola Rentia." }] },
      ...history
    ];

    const chat = model.startChat({ history: formattedHistory });
    const result = await chat.sendMessage(userMessage);

    return new Response(JSON.stringify({ response: result.response.text() }), { status: 200 });

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
