export default function TestimonialsPage() {
  return (
    <main className="bg-[#0B0B0F] min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
            Loved by builders, <br /> founders & teams
          </h1>
          <p className="mt-6 text-gray-400 text-lg">
            Real feedback from people who use our product to ship faster,
            build better, and scale confidently.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                rounded-2xl p-8
                bg-white/[0.04] backdrop-blur-md
                border border-white/[0.06]
                shadow-[0_30px_80px_rgba(0,0,0,0.7)]
                transition hover:bg-white/[0.06]
              "
            >
              {/* STARS */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.stars }).map((_, idx) => (
                  <Star key={idx} />
                ))}
              </div>

              {/* QUOTE */}
              <p className="text-gray-300 leading-relaxed">
                “{t.quote}”
              </p>

              {/* USER */}
              <div className="mt-8 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                  {t.name[0]}
                </div>

                <div>
                  <div className="text-white font-medium">
                    {t.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-28 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Ready to build something better?
          </h2>
          <p className="mt-4 text-gray-400">
            Join teams who already trust us.
          </p>

          <button className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium hover:opacity-90">
            Get Started
          </button>
        </div>

      </div>
    </main>
  );
}

/* STAR COMPONENT */
function Star() {
  return (
    <svg
      className="h-4 w-4 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.538 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.783.57-1.838-.197-1.538-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.025 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
    </svg>
  );
}

/* DATA */
const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Startup Founder",
    stars: 5,
    quote:
      "This product completely changed how fast we ship features. Clean UI, solid UX, zero nonsense.",
  },
  {
    name: "Ananya Patel",
    role: "Product Designer",
    stars: 5,
    quote:
      "Everything feels intentional. From spacing to animations — it just works.",
  },
  {
    name: "Kunal Mehta",
    role: "Frontend Engineer",
    stars: 5,
    quote:
      "Finally a system that developers actually enjoy using. No hacks, no workarounds.",
  },
  {
    name: "Sarah Collins",
    role: "SaaS Founder",
    stars: 5,
    quote:
      "Our onboarding conversion went up immediately. That alone paid for itself.",
  },
  {
    name: "Aditya Verma",
    role: "CTO",
    stars: 5,
    quote:
      "The architecture is clean and scalable. You can tell this was built by people who understand products.",
  },
  {
    name: "Emily Zhang",
    role: "Growth Lead",
    stars: 5,
    quote:
      "We moved faster with fewer bugs. That’s rare.",
  },
];
