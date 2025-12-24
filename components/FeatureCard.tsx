import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div
      className="
        group relative
        rounded-3xl bg-zinc-800/50 backdrop-blur-md
        p-10 min-h-75
        shadow-[0_12px_50px_rgba(0,0,0,0.65)]
        transition-all duration-300 ease-out transform-gpu
        hover:-translate-y-2 hover:scale-[1.03]
        hover:shadow-[0_30px_110px_rgba(236,72,153,0.25)]
      "
    >
      {/* ICON */}
      <div className="mb-8 flex justify-center">
        <div
          className="
            flex h-20 w-20 items-center justify-center
            rounded-2xl bg-zinc-700/60
            transition-all duration-300 transform-gpu
            group-hover:scale-110
            group-hover:bg-pink-500/20
          "
        >
          <Image
            src={icon}
            alt={title}
            width={44}   // ⬅ bigger logo
            height={44}  // ⬅ bigger logo
          />
        </div>
      </div>

      {/* TITLE */}
      <h3 className="text-base font-semibold text-white tracking-wide text-center">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-3 text-sm text-gray-400 leading-relaxed text-center">
        {description}
      </p>

      {/* GLOW OVERLAY */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-3xl
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          bg-linear-to-br from-pink-500/12 via-transparent to-purple-500/12
        "
      />
    </div>
  );
}
