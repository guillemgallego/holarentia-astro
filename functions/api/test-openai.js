export async function onRequest({ env }) {
  try {
    const apiKey = env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ step: 'no-key' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }

    let step = 'before-fetch';
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: 'say hi in 3 words' }],
        max_tokens: 20,
      }),
    });
    step = 'after-fetch';

    const text = await res.text();
    step = 'after-text';

    return new Response(JSON.stringify({
      step,
      status: res.status,
      ok: res.ok,
      bodyPreview: text.slice(0, 500),
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });

  } catch (err) {
    return new Response(JSON.stringify({
      error: true,
      name: err.name,
      message: err.message,
      stack: (err.stack || '').slice(0, 500),
    }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
