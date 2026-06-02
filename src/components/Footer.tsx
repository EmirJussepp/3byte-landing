import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.055] px-8 py-6">
      <div className="max-w-[960px] mx-auto flex justify-between items-center flex-wrap gap-4">
        <div className="flex items-center gap-2.5">
          <Image
            src="https://pboquensesf.duckdns.org/assets/logochico-DCu-UpDX.png"
            alt="3Byte"
            width={22}
            height={22}
            className="object-contain opacity-60"
            unoptimized
          />
          <span className="font-mono text-[0.75rem] text-[#55556a]">
            <span className="text-[#a78bfa]">3byte</span> — software que funciona
          </span>
        </div>
        <div className="font-mono text-[0.62rem] text-[#55556a]">
          © 2026 · San Francisco, Córdoba · Argentina
        </div>
      </div>
    </footer>
  );
}
