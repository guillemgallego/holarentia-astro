export async function onRequestPost({ request, env }) {
  const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };

  let body;
  try { body = await request.json(); }
  catch (e) { return new Response(JSON.stringify({ error: 'JSON inválido' }), { status: 200, headers }); }

  const { nombre, email, ciudad, ingresos, mensaje } = body;
  if (!nombre || !email) {
    return new Response(JSON.stringify({ error: 'Nombre y email son requeridos' }), { status: 200, headers });
  }

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    // Sin Resend configurado, devolver éxito igualmente (se puede ver en logs CF)
    console.log('LEAD SIN RESEND:', JSON.stringify(body));
    return new Response(JSON.stringify({ success: true, warning: 'Email no configurado, lead guardado en logs' }), { status: 200, headers });
  }

  const htmlBody = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0f172a;color:#e2e8f0;padding:32px;border-radius:12px">
  <div style="background:#FF5436;padding:16px 24px;border-radius:8px;margin-bottom:24px">
    <h1 style="margin:0;color:#fff;font-size:20px">🔍 Nuevo lead — Análisis de propiedad</h1>
  </div>
  <table style="width:100%;border-collapse:collapse">
    <tr><td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8;width:40%">Nombre</td><td style="padding:10px 0;border-bottom:1px solid #1e293b;font-weight:bold">${nombre}</td></tr>
    <tr><td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8">Email</td><td style="padding:10px 0;border-bottom:1px solid #1e293b"><a href="mailto:${email}" style="color:#FF5436">${email}</a></td></tr>
    <tr><td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8">Ciudad</td><td style="padding:10px 0;border-bottom:1px solid #1e293b">${ciudad || '—'}</td></tr>
    <tr><td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8">Ingresos actuales</td><td style="padding:10px 0;border-bottom:1px solid #1e293b">${ingresos || '—'}</td></tr>
    ${mensaje ? `<tr><td style="padding:10px 0;color:#94a3b8">Mensaje</td><td style="padding:10px 0">${mensaje}</td></tr>` : ''}
  </table>
  <div style="margin-top:24px;padding:16px;background:#1e293b;border-radius:8px;font-size:13px;color:#64748b">
    Recibido el ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}
  </div>
</div>`;

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Hola Rentia <leads@holarentia.com>',
        to: ['hola@holarentia.com'],
        subject: `🔍 Nuevo lead: ${nombre} — ${ciudad || 'Sin ciudad'}`,
        html: htmlBody,
        reply_to: email,
      }),
    });

    if (!resendRes.ok) {
      const err = await resendRes.text();
      console.error('Resend error:', err);
      // Devolvemos éxito al usuario igualmente
      return new Response(JSON.stringify({ success: true }), { status: 200, headers });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  } catch (e) {
    console.error('Error enviando email:', e.message);
    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  }
}
