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
      <div className="flex flex-col items-start gap-3 py-8">
        <div className="flex items-center gap-3">
          <span className="text-[#34d399] text-xl">✓</span>
          <span className="font-mono text-[0.82rem] text-[#34d399] font-bold">
            Mensaje enviado
          </span>
        </div>
        <p className="font-mono text-[0.72rem] text-[#55556a]">
          Recibimos tu mensaje. Te respondemos a la brevedad.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="font-mono text-[0.68rem] text-[#5b8bff] hover:underline mt-1 cursor-pointer"
        >
          Enviar otro →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

      {/* Honeypot anti-spam: invisible para humanos, los bots lo completan */}
      <input
        {...register("website")}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] top-[-9999px] w-px h-px opacity-0 pointer-events-none"
      />

      {/* Nombre + Email en fila */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-[0.6rem] text-[#55556a] tracking-[0.1em] uppercase">
            Nombre
          </label>
          <input
            {...register("nombre")}
            placeholder="Tu nombre"
            className={`bg-[#0d0d11] border px-4 py-3 font-mono text-[0.78rem] text-[#eaeaf0] placeholder:text-[#2e2e3a] outline-none transition-colors rounded-[2px]
              ${errors.nombre ? "border-[#f87171]" : "border-white/[0.07] focus:border-[#5b8bff]/50"}`}
          />
          {errors.nombre && (
            <span className="font-mono text-[0.6rem] text-[#f87171]">
              {errors.nombre.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-[0.6rem] text-[#55556a] tracking-[0.1em] uppercase">
            Email
          </label>
          <input
            {...register("email")}
            placeholder="tu@email.com"
            type="email"
            className={`bg-[#0d0d11] border px-4 py-3 font-mono text-[0.78rem] text-[#eaeaf0] placeholder:text-[#2e2e3a] outline-none transition-colors rounded-[2px]
              ${errors.email ? "border-[#f87171]" : "border-white/[0.07] focus:border-[#5b8bff]/50"}`}
          />
          {errors.email && (
            <span className="font-mono text-[0.6rem] text-[#f87171]">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>

      {/* Mensaje */}
      <div className="flex flex-col gap-1.5">
        <label className="font-mono text-[0.6rem] text-[#55556a] tracking-[0.1em] uppercase">
          Mensaje
        </label>
        <textarea
          {...register("mensaje")}
          placeholder="Contanos qué necesitás construir..."
          rows={5}
          className={`bg-[#0d0d11] border px-4 py-3 font-mono text-[0.78rem] text-[#eaeaf0] placeholder:text-[#2e2e3a] outline-none transition-colors resize-none rounded-[2px]
            ${errors.mensaje ? "border-[#f87171]" : "border-white/[0.07] focus:border-[#5b8bff]/50"}`}
        />
        {errors.mensaje && (
          <span className="font-mono text-[0.6rem] text-[#f87171]">
            {errors.mensaje.message}
          </span>
        )}
      </div>

      {/* Error general */}
      {status === "error" && (
        <p className="font-mono text-[0.68rem] text-[#f87171]">{errorMsg}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="self-start inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#5b8bff] text-white font-extrabold text-[0.75rem] tracking-[0.08em] uppercase hover:bg-[#4a7aee] hover:-translate-y-px transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {status === "loading" ? (
          <>
            <span className="w-3 h-3 border border-white/40 border-t-white rounded-full animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar mensaje →"
        )}
      </button>
    </form>
  );
}
