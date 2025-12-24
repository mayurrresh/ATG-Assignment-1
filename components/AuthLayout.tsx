import Link from "next/link";

export default function AuthLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#0B0B0F] flex items-center justify-center px-6">
      <div className="relative w-full max-w-md">

        {/* GLOW */}
        <div className="absolute -inset-20 -z-10 rounded-full
          bg-purple-500/20 blur-[120px]" />

        {/* CARD */}
        <div className="rounded-3xl border border-white/10
          bg-black/60 backdrop-blur-xl p-10 shadow-2xl">

          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            {title}
          </h1>

          <p className="mt-3 text-gray-400 text-lg">
            {subtitle}
          </p>

          <div className="mt-10">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
