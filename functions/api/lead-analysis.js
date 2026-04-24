export async function onRequestPost({ request, env }) {
  const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };

  let body;
  try { body = await request.json(); }
  catch (e) { return new Response(JSON.stringify({ error: 'JSON inválido' }), { status: 200, headers }); }

  const { nombre, email, telefono, mensaje, analysis, form_data } = body;
  if (!nombre || !email) {
    return new Response(JSON.stringify({ error: 'Nombre y email son requeridos' }), { status: 200, headers });
  }

  const apiKey = env.RESEND_API_KEY;
  const sym = analysis?.currency_symbol || '€';
  const fmt = (n) => n != null ? sym + Number(n).toLocaleString('es') : '—';

  const ciudad = analysis?.ciudad || form_data?.ciudad || '—';
  const tipo = form_data?.tipo || '—';
  const habitaciones = form_data?.habitaciones || '—';
  const estado = form_data?.estado || '—';
  const ingresosActuales = form_data?.ingresos_actuales || '—';

  if (!apiKey) {
    console.log('LEAD ANÁLISIS SIN RESEND:', JSON.stringify({ nombre, email, telefono, ciudad, analysis }));
    return new Response(JSON.stringify({ success: true, warning: 'Email no configurado, lead guardado en logs' }), { status: 200, headers });
  }

  const mejorasHtml = (analysis?.top3_mejoras || []).map((m, i) => `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #1e293b;vertical-align:top;width:32px">
        <div style="width:24px;height:24px;background:rgba(255,84,54,.15);border-radius:50%;color:#FF5436;font-weight:700;font-size:.75rem;display:inline-flex;align-items:center;justify-content:center">${i+1}</div>
      </td>
      <td style="padding:12px 0;border-bottom:1px solid #1e293b">
        <div style="color:#e8edf8;font-weight:600;margin-bottom:2px">${m.titulo || ''}</div>
        <div style="color:#94a3b8;font-size:.85rem">${m.descripcion || ''}</div>
      </td>
      <td style="padding:12px 0;border-bottom:1px solid #1e293b;text-align:right;white-space:nowrap">
        <span style="color:#22c55e;background:rgba(34,197,94,.1);padding:3px 10px;border-radius:50px;font-size:.72rem;font-weight:700">${m.impacto || ''}</span>
      </td>
    </tr>`).join('');

  const htmlBody = `
<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;background:#060d1a;color:#e2e8f0;padding:32px;border-radius:12px">
  <div style="background:linear-gradient(135deg,#FF5436,#ff8c7a);padding:20px 24px;border-radius:10px;margin-bottom:24px">
    <h1 style="margin:0;color:#fff;font-size:22px">🔥 Nuevo lead con ANÁLISIS completo</h1>
    <p style="margin:6px 0 0;color:rgba(255,255,255,.9);font-size:13px">Alguien ha usado el analizador y quiere contacto</p>
  </div>

  <h2 style="color:#fff;font-size:16px;margin:0 0 12px;text-transform:uppercase;letter-spacing:.1em">📇 Contacto</h2>
  <table style="width:100%;border-collapse:collapse;margin-bottom:28px">
    <tr><td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8;width:40%">Nombre</td><td style="padding:10px 0;border-bottom:1px solid #1e293b;font-weight:bold;color:#fff">${nombre}</td></tr>
    <tr><td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8">Email</td><td style="padding:10px 0;border-bottom:1px solid #1e293b"><a href="mailto:${email}" style="color:#FF5436">${email}</a></td></tr>
    ${telefono ? `<tr><td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8">Teléfono</td><td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#fff"><a href="tel:${telefono}" style="color:#FF5436">${telefono}</a></td></tr>` : ''}
    ${mensaje ? `<tr><td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8;vertical-align:top">Mensaje</td><td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#e2e8f0">${mensaje}</td></tr>` : ''}
  </table>

  <h2 style="color:#fff;font-size:16px;margin:0 0 12px;text-transform:uppercase;letter-spacing:.1em">🏠 Propiedad</h2>
  <table style="width:100%;border-collapse:collapse;margin-bottom:28px">
    <tr><td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8;width:40%">Ciudad</td><td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#fff;font-weight:600">${ciudad}</td></tr>
    <tr><td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8">Tipo</td><td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#fff">${tipo}</td></tr>
    <tr><td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8">Habitaciones</td><td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#fff">${habitaciones}</td></tr>
    <tr><td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8">Estado</td><td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#fff">${estado}</td></tr>
    <tr><td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#94a3b8">Ingresos actuales</td><td style="padding:10px 0;border-bottom:1px solid #1e293b;color:#fff">${ingresosActuales}</td></tr>
  </table>

  ${analysis ? `
  <div style="background:linear-gradient(135deg,rgba(255,84,54,.15),rgba(255,84,54,.03));border:1px solid rgba(255,84,54,.3);border-radius:14px;padding:24px;margin-bottom:24px;text-align:center">
    <div style="font-size:.7rem;font-weight:700;color:#FF5436;text-transform:uppercase;letter-spacing:.15em;margin-bottom:6px">Score de potencial</div>
    <div style="font-size:3rem;font-weight:800;color:#FF5436;line-height:1">${analysis.score || '—'}<span style="font-size:1.2rem;color:#94a3b8">/100</span></div>
    <div style="font-size:.95rem;color:#fff;margin-top:4px">${analysis.score_label || ''}</div>
  </div>

  <div style="background:#0f1f35;border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:24px;margin-bottom:24px;text-align:center">
    <div style="font-size:.7rem;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:.15em;margin-bottom:10px">Ingreso potencial mensual</div>
    <div style="font-size:2.4rem;font-weight:800;color:#FF5436">${fmt(analysis.ingreso_potencial_min)} – ${fmt(analysis.ingreso_potencial_max)}</div>
  </div>

  <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
    <tr>
      <td style="width:50%;padding:6px"><div style="background:#0f1f35;border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:18px;text-align:center">
        <div style="font-size:.65rem;color:#94a3b8;text-transform:uppercase;letter-spacing:.1em;margin-bottom:6px">🌙 Weekday</div>
        <div style="font-size:1.4rem;font-weight:800;color:#fff">${fmt(analysis.precio_noche_weekday)}</div>
      </div></td>
      <td style="width:50%;padding:6px"><div style="background:#0f1f35;border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:18px;text-align:center">
        <div style="font-size:.65rem;color:#94a3b8;text-transform:uppercase;letter-spacing:.1em;margin-bottom:6px">🎉 Weekend</div>
        <div style="font-size:1.4rem;font-weight:800;color:#fff">${fmt(analysis.precio_noche_weekend)}</div>
      </div></td>
    </tr>
    <tr>
      <td style="padding:6px"><div style="background:#0f1f35;border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:18px;text-align:center">
        <div style="font-size:.65rem;color:#94a3b8;text-transform:uppercase;letter-spacing:.1em;margin-bottom:6px">Ocupación anual</div>
        <div style="font-size:1.4rem;font-weight:800;color:#fff">${analysis.ocupacion_anual || '—'}%</div>
      </div></td>
      <td style="padding:6px"><div style="background:rgba(34,197,94,.06);border:1px solid rgba(34,197,94,.2);border-radius:12px;padding:18px;text-align:center">
        <div style="font-size:.65rem;color:#22c55e;text-transform:uppercase;letter-spacing:.1em;margin-bottom:6px">💸 Ahorro/mes</div>
        <div style="font-size:1.4rem;font-weight:800;color:#22c55e">${fmt(analysis.ahorro_vs_gestor_tradicional)}</div>
      </div></td>
    </tr>
  </table>

  ${analysis.diagnostico_principal ? `
  <div style="background:rgba(255,84,54,.06);border-left:3px solid #FF5436;padding:14px 18px;margin-bottom:24px;border-radius:0 8px 8px 0">
    <div style="font-size:.65rem;color:#FF5436;text-transform:uppercase;letter-spacing:.1em;font-weight:700;margin-bottom:4px">Diagnóstico</div>
    <div style="color:#e8edf8;font-style:italic;line-height:1.5;font-size:.92rem">"${analysis.diagnostico_principal}"</div>
  </div>` : ''}

  ${analysis.analisis_katia ? `
  <div style="background:linear-gradient(135deg,rgba(255,84,54,.07),rgba(255,84,54,.02));border:1px solid rgba(255,84,54,.2);border-radius:12px;padding:20px;margin-bottom:24px">
    <div style="font-size:.65rem;color:#FF5436;text-transform:uppercase;letter-spacing:.1em;font-weight:700;margin-bottom:8px">🤖 Análisis de KATIA</div>
    <div style="color:#c8d4e8;line-height:1.6;font-size:.92rem">${analysis.analisis_katia}</div>
  </div>` : ''}

  ${mejorasHtml ? `
  <h2 style="color:#fff;font-size:16px;margin:0 0 12px;text-transform:uppercase;letter-spacing:.1em">🔧 Top 3 mejoras</h2>
  <table style="width:100%;border-collapse:collapse;margin-bottom:24px">${mejorasHtml}</table>` : ''}

  ${analysis.data_source ? `<div style="font-size:.7rem;color:#475569;margin-bottom:20px">✓ ${analysis.data_source}</div>` : ''}
  ` : ''}

  <div style="margin-top:24px;padding:16px;background:#1e293b;border-radius:8px;font-size:12px;color:#64748b;text-align:center">
    📬 Lead del analizador · ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}
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
        from: 'Hola Rentia <onboarding@resend.dev>',
        to: ['hola@holarentia.com'],
        subject: `🔥 Lead analizador: ${nombre} · ${ciudad} · Score ${analysis?.score || '?'}/100`,
        html: htmlBody,
        reply_to: email,
      }),
    });

    if (!resendRes.ok) {
      const err = await resendRes.text();
      console.error('Resend error:', err);
      return new Response(JSON.stringify({ success: true }), { status: 200, headers });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  } catch (e) {
    console.error('Error enviando email:', e.message);
    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  }
}
