"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { sendContact } from "@/app/actions/contact";

const schema = z.object({
  nombre: z.string().min(2, "Nombre muy corto").max(80, "Nombre muy largo"),
  email: z.string().email("Email inválido").max(120, "Email muy largo"),
  mensaje: z.string().min(10, "El mensaje es muy corto").max(3000, "El mensaje es muy largo"),
  website: z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;

const inputBase =
  "w-full bg-[#13131a] border text-[#eaeaf0] text-[0.92rem] placeholder:text-[#3a3a4a] outline-none transition-all duration-200 rounded-xl px-4 py-3";
const inputIdle = "border-white/[0.08] focus:border-[#5b8bff]/50 focus:ring-2 focus:ring-[#5b8bff]/10";
const inputError = "border-[#f87171]/60 focus:border-[#f87171] focus:ring-2 focus:ring-[#f87171]/10";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    const result = await sendContact(data);
    if (result.ok) {
      setStatus("ok");
      reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Error desconocido");
    }
  };

  if (status === "ok") {
    return (
      <div className="flex flex-col items-start gap-4 py-10">
        <div className="w-11 h-11 rounded-full bg-[#34d399]/10 border border-[#34d399]/20 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth={2} className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <div>
          <p className="text-[1.05rem] font-semibold text-[#eaeaf0] mb-1">
            Mensaje enviado
          </p>
          <p className="text-[0.9rem] text-[#8888a0] leading-relaxed">
            Recibimos tu mensaje. Te respondemos en menos de 24 horas.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="text-[0.82rem] text-[#5b8bff] hover:text-[#7aa3ff] transition-colors mt-1 cursor-pointer"
        >
          Enviar otro mensaje →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

      {/* Honeypot anti-spam */}
      <input
        {...register("website")}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] top-[-9999px] w-px h-px opacity-0 pointer-events-none"
      />

      {/* Nombre + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="font-mono text-[0.62rem] text-[#55556a] tracking-[0.12em] uppercase">
            Nombre
          </label>
          <input
            {...register("nombre")}
            placeholder="Tu nombre"
            autoComplete="name"
            className={`${inputBase} ${errors.nombre ? inputError : inputIdle}`}
          />
          {errors.nombre && (
            <span className="text-[0.78rem] text-[#f87171] leading-none">
              {errors.nombre.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-mono text-[0.62rem] text-[#55556a] tracking-[0.12em] uppercase">
            Email
          </label>
          <input
            {...register("email")}
            placeholder="tu@email.com"
            type="email"
            autoComplete="email"
            className={`${inputBase} ${errors.email ? inputError : inputIdle}`}
          />
          {errors.email && (
            <span className="text-[0.78rem] text-[#f87171] leading-none">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>

      {/* Mensaje */}
      <div className="flex flex-col gap-2">
        <label className="font-mono text-[0.62rem] text-[#55556a] tracking-[0.12em] uppercase">
          Mensaje
        </label>
        <textarea
          {...register("mensaje")}
          placeholder="Contanos qué necesitás construir..."
          rows={5}
          className={`${inputBase} resize-none ${errors.mensaje ? inputError : inputIdle}`}
        />
        {errors.mensaje && (
          <span className="text-[0.78rem] text-[#f87171] leading-none">
            {errors.mensaje.message}
          </span>
        )}
      </div>

      {/* Error general */}
      {status === "error" && (
        <p className="text-[0.85rem] text-[#f87171] bg-[#f87171]/5 border border-[#f87171]/20 rounded-xl px-4 py-3">
          {errorMsg}
        </p>
      )}

      {/* Submit */}
      <div className="pt-1">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#5b8bff] text-white font-bold text-[0.82rem] tracking-[0.04em] hover:bg-[#4a7aee] hover:-translate-y-px transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {status === "loading" ? (
            <>
              <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Enviar mensaje
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </>
          )}
        </button>
      </div>

    </form>
  );
}
