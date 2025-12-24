export default function ComingSoonPage() {
  return (
    <main className="relative bg-[#0B0B0F] min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-purple-500/20 blur-[180px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-pink-500/20 blur-[160px]" />

      <div className="relative max-w-2xl text-center">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs text-gray-300 mb-8">
          🚀 Upcoming Release
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
          New Features <br />
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Coming Soon
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
          We’re crafting powerful new capabilities to help you move faster,
          scale smarter, and build with confidence.
        </p>

        {/* FEATURE PREVIEW */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {[
            "Advanced Analytics",
            "Team Collaboration",
            "AI Automation",
          ].map((feature, i) => (
            <div
              key={i}
              className="
                rounded-2xl border border-white/10
                bg-white/[0.04] backdrop-blur
                px-6 py-5 text-sm text-gray-300
                transition-all duration-300
                hover:-translate-y-1 hover:border-purple-400/40
                hover:bg-white/[0.06]
              "
            >
              {feature}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="
            px-8 py-3 rounded-full
            bg-gradient-to-r from-pink-500 to-purple-500
            text-white font-medium
            shadow-lg shadow-purple-500/20
            hover:opacity-90 hover:shadow-purple-500/40
            transition
          ">
            Notify Me
          </button>

          <a
            href="/"
            className="
              px-8 py-3 rounded-full
              border border-white/15 text-white
              hover:bg-white/[0.05]
              transition
            "
          >
            Back to Home
          </a>
        </div>

        {/* FOOTNOTE */}
        <p className="mt-12 text-xs text-gray-500 tracking-wide">
          Launching soon · Stay tuned
        </p>

      </div>
    </main>
  );
}
