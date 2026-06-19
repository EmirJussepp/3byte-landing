"use server";

import { Resend } from "resend";
import { z } from "zod";
import { headers } from "next/headers";

const schema = z.object({
  nombre: z.string().min(2, "Nombre muy corto").max(80, "Nombre muy largo"),
  email: z.string().email("Email inválido").max(120, "Email muy largo"),
  mensaje: z.string().min(10, "El mensaje es muy corto").max(3000, "El mensaje es muy largo"),
  // Honeypot anti-spam: debe venir vacío. Los bots suelen completarlo.
  website: z.string().max(0).optional(),
});

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limit en memoria (best-effort por instancia serverless).
// Para algo más robusto y compartido entre instancias, usar Upstash/Redis.
const RATE_LIMIT = 3; // envíos permitidos...
const WINDOW_MS = 60_000; // ...por minuto, por IP
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // evita crecimiento indefinido
  return false;
}

export async function sendContact(formData: {
  nombre: string;
  email: string;
  mensaje: string;
  website?: string;
}) {
  const parsed = schema.safeParse(formData);

  if (!parsed.success) {
    return { ok: false, error: "Datos inválidos. Revisá los campos." };
  }

  const { nombre, email, mensaje, website } = parsed.data;

  // Honeypot: si vino completo, es un bot. Fingimos éxito sin enviar nada.
  if (website) {
    return { ok: true };
  }

  // Rate limit por IP
  const hdrs = await headers();
  const ip = (hdrs.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (isRateLimited(ip)) {
    return { ok: false, error: "Demasiados intentos. Esperá un minuto e intentá de nuevo." };
  }

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
