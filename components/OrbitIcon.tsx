import Image from "next/image";

interface OrbitIconProps {
  angle: number;
  radius: number;
  src: string;
  size?: number;
}

export default function OrbitIcon({
  angle,
  radius,
  src,
  size = 53,
}: OrbitIconProps) {
  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{
        transform: `
          rotate(${angle}deg)
          translate(${radius}px)
          rotate(-${angle}deg)
        `,
      }}
    >
      <div
        className="
          flex items-center justify-center
          rounded-full bg-zinc-900 p-2
          shadow-[0_0_25px_rgba(255,255,255,0.18)]
          transition-transform duration-300
          hover:-translate-y-1
        "
      >
        <Image
          src={src}          // ✅ USE THE PROP
          alt="orbit logo"
          width={size}
          height={size}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
