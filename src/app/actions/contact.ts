"use server";

import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  nombre: z.string().min(2, "Nombre muy corto"),
  email: z.string().email("Email inválido"),
  mensaje: z.string().min(10, "El mensaje es muy corto"),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContact(formData: {
  nombre: string;
  email: string;
  mensaje: string;
}) {
  const parsed = schema.safeParse(formData);

  if (!parsed.success) {
    return { ok: false, error: "Datos inválidos. Revisá los campos." };
  }

  const { nombre, email, mensaje } = parsed.data;

  // Escapar HTML para evitar inyección en el cuerpo del email
  const esc = (str: string) =>
    str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  try {
    await resend.emails.send({
      from: "3Byte Web <onboarding@resend.dev>",
      to: "grupo3byteapp@gmail.com",
      replyTo: email,
      subject: `Nuevo contacto de ${nombre} — grupo3byte.com`,
      html: `
        <div style="font-family: monospace; background: #09090c; color: #eaeaf0; padding: 32px; border-radius: 8px;">
          <h2 style="color: #5b8bff; margin-bottom: 24px;">Nuevo mensaje desde grupo3byte.com</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="color: #8888a0; padding: 8px 0; width: 100px;">Nombre</td>
              <td style="color: #eaeaf0; font-weight: bold;">${esc(nombre)}</td>
            </tr>
            <tr>
              <td style="color: #8888a0; padding: 8px 0;">Email</td>
              <td style="color: #eaeaf0;"><a href="mailto:${esc(email)}" style="color: #5b8bff;">${esc(email)}</a></td>
            </tr>
            <tr>
              <td style="color: #8888a0; padding: 8px 0; vertical-align: top;">Mensaje</td>
              <td style="color: #eaeaf0; line-height: 1.6;">${esc(mensaje).replace(/\n/g, "<br/>")}</td>
            </tr>
          </table>
          <hr style="border-color: #1a1a22; margin: 24px 0;" />
          <p style="color: #55556a; font-size: 12px;">Respondé directamente a este mail para contactar a ${esc(nombre)}.</p>
        </div>
      `,
    });

    return { ok: true };
  } catch {
    return { ok: false, error: "Error al enviar. Intentá de nuevo." };
  }
}
