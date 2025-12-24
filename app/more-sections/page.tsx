import Link from "next/link";

export default function MoreSectionsPage() {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">

      {/* SOFT BLUR BLOBS */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl" />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-semibold text-white">
          More Sections
        </h1>

        <p className="mt-4 text-gray-400 max-w-md mx-auto">
          Explore additional layout sections designed to scale your product
          and improve user experience.
        </p>

        <Link
          href="/pricing"
          className="inline-block mt-10 px-8 py-3 rounded-full
                     bg-gradient-to-r from-pink-500 to-purple-500
                     text-white font-medium
                     hover:opacity-90 transition"
        >
          Download Template
        </Link>
      </div>

    </section>
  );
}
