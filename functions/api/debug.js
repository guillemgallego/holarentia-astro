export async function onRequest({ env }) {
  const keys = Object.keys(env || {});
  const hasOpenAI = !!env.OPENAI_API_KEY;
  const keyLen = env.OPENAI_API_KEY ? env.OPENAI_API_KEY.length : 0;
  const keyStart = env.OPENAI_API_KEY ? env.OPENAI_API_KEY.substring(0, 7) : '';
  return new Response(JSON.stringify({
    envKeys: keys,
    hasOpenAI,
    keyLen,
    keyStart,
  }), { headers: { 'Content-Type': 'application/json' } });
}
