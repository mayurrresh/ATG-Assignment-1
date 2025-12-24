import Image from "next/image";
import OrbitIcon from "@/components/OrbitIcon";

export default function OrbitVisual() {
  const radius = 170;

  return (
    <div className="relative w-[420px] h-[420px] mx-auto">

      {/* ORBIT RINGS */}
      <div className="absolute inset-0 rounded-full border border-white/15" />
      <div className="absolute inset-[70px] rounded-full border border-white/10" />
      <div className="absolute inset-[140px] rounded-full border border-white/5" />

      {/* CENTER LOGO */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="
            relative flex items-center justify-center
            w-24 h-24 rounded-full
            bg-zinc-900
            shadow-[0_0_60px_rgba(255,255,255,0.18)]
            transition-transform duration-300
            hover:scale-105
          "
        >
          {/* glow ring */}
          <div className="absolute inset-0 rounded-full blur-xl bg-white/10 animate-pulse" />

          {/* logo */}
          <Image
            src="/icons/Vector.svg"   // 👈 put your center logo here
            alt="Center logo"
            width={42}
            height={42}
            className="relative z-10"
          />
        </div>
      </div>

      {/* ORBIT ICONS */}
      <OrbitIcon angle={210} radius={radius} src="/icons/Ellipse-9.svg" />
      <OrbitIcon angle={330} radius={radius} src="/icons/Ellipse-10.svg" />
      <OrbitIcon angle={140} radius={radius} src="/icons/Ellipse-11.svg" />

      

    </div>
  );
}
