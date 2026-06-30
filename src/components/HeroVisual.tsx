export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[460px] mx-auto lg:mx-0">
      {/* Glow de fondo */}
      <div
        aria-hidden
        className="absolute -inset-6 bg-[#5b8bff]/10 blur-[60px] rounded-full pointer-events-none"
      />

      {/* Ventana tipo editor */}
      <div className="relative rounded-sm border border-white/[0.09] bg-[#0d0d11]/90 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40">
        {/* Barra de la ventana */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-[0.62rem] text-[#55556a]">sistema.ts</span>
          <span className="ml-auto flex items-center gap-1.5 font-mono text-[0.58rem] text-[#34d399]">
            <span className="dot-live" />
            live
          </span>
        </div>

        {/* Código */}
        <pre className="font-mono text-[0.72rem] leading-[1.95] p-5 overflow-x-auto text-[#eaeaf0]">
          <code>
            <span className="text-[#a78bfa]">const</span> negocio <span className="text-[#8888a0]">=</span> <span className="text-[#a78bfa]">new</span> <span className="text-[#5b8bff]">Sistema</span>(&#123;{"\n"}
            {"  "}socios<span className="text-[#8888a0]">:</span> <span className="text-[#fbbf24]">true</span>,{"\n"}
            {"  "}pagos<span className="text-[#8888a0]">:</span> <span className="text-[#34d399]">&quot;automático&quot;</span>,{"\n"}
            {"  "}reportes<span className="text-[#8888a0]">:</span> <span className="text-[#34d399]">&quot;tiempo real&quot;</span>,{"\n"}
            &#125;){"\n"}
            {"\n"}
            <span className="text-[#a78bfa]">await</span> negocio.<span className="text-[#5b8bff]">deploy</span>(){"\n"}
            <span className="text-[#55556a]">{"// ✓ funcionando en producción"}</span>
          </code>
        </pre>
      </div>

      {/* Tarjeta flotante de "stat" */}
      <div className="absolute -bottom-5 -right-3 sm:-right-5 rounded-sm border border-white/[0.09] bg-[#13131a]/95 backdrop-blur-xl px-4 py-3 shadow-xl shadow-black/40">
        <div className="font-mono text-[0.55rem] text-[#55556a] tracking-[0.1em] uppercase mb-0.5">
          Sistemas en uso
        </div>
        <div className="font-mono text-[1.1rem] font-bold text-[#eaeaf0] leading-none">
          <span className="text-[#5b8bff]">+</span>10
        </div>
      </div>
    </div>
  );
}
