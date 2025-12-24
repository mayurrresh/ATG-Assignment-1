import Image from "next/image";

export default function FeaturesPage() {
  return (
    <main className="bg-[#0B0B0F] text-white">

      {/* HERO */}
      <section className="py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Powerful features built <br /> for modern teams
          </h1>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to build, scale, and ship faster — without
            compromising on performance or design.
          </p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <FeatureCard
            title="Lightning Fast"
            description="Optimized architecture ensures blazing-fast performance at scale."
            icon="/icons/Group 103.svg"
          />

          <FeatureCard
            title="Fully Customizable"
            description="Easily adapt layouts, themes, and components to match your brand."
            icon="/icons/Group 102.png"
          />

          <FeatureCard
            title="Secure by Default"
            description="Enterprise-grade security baked into every layer of the stack."
            icon="/icons/Group 105.svg"
          />

          <FeatureCard
            title="Modern UI System"
            description="Clean, accessible, and consistent design out of the box."
            icon="/icons/Group.svg"
          />

          <FeatureCard
            title="Scalable Architecture"
            description="Designed to grow with your product and your users."
            icon="/icons/Group 106.svg"
          />

          <FeatureCard
            title="Developer Friendly"
            description="Clear structure, reusable components, and great DX."
            icon="/icons/Group 129.svg"
          />

        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Ready to get started?
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Start building with confidence today.
          </p>

          <a
            href="/contact"
            className="
              inline-flex mt-10 px-8 py-4 rounded-full
              bg-gradient-to-r from-pink-500 to-purple-500
              text-white font-medium
              hover:opacity-90 transition
            "
          >
            Contact Us
          </a>
        </div>
      </section>

    </main>
  );
}

/* ---------------- FEATURE CARD ---------------- */

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div
      className="
        group rounded-2xl p-8
        bg-zinc-800/50 backdrop-blur
        border border-white/5
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_20px_60px_rgba(236,72,153,0.15)]
      "
    >
      <div
        className="
          mb-6 flex h-14 w-14 items-center justify-center
          rounded-xl bg-zinc-700/60
          transition-all duration-300
          group-hover:scale-110
          group-hover:bg-pink-500/20
        "
      >
        <Image src={icon} alt={title} width={28} height={28} />
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="mt-3 text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
