import Image from "next/image";

/* ---------------- CONTACT SECTION ---------------- */

function ContactSection() {
  return (
    <section className="relative py-32 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT – GLOBE (PURELY VISUAL, NO POINTER EVENTS) */}
        <div className="relative h-[420px] flex items-center justify-center pointer-events-none">
          <div className="relative w-[420px] h-[420px] rounded-full overflow-hidden">
            
            {/* vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,black_85%)] z-10 pointer-events-none" />

            <img
              src="/icons/Group 133.svg"
              alt="Globe"
              className="absolute inset-0 w-full h-full object-cover opacity-50 scale-y-[0.96] pointer-events-none"
            />
          </div>
        </div>

        {/* RIGHT – FORM */}
        <div className="relative z-10">
          <h2 className="text-[48px] font-semibold text-white">
            Get In Touch
          </h2>

          <p className="mt-4 text-gray-400 text-[18px] max-w-md">
            A good design is not only aesthetically pleasing, but also functional.
            It should be able to solve the problem.
          </p>

          <form className="mt-10 space-y-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-lg bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full rounded-lg bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="inline-flex px-6 py-3 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium hover:opacity-90 cursor-pointer"
            >
              Get in Touch
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

/* ---------------- FOOTER MAIN ---------------- */

function FooterMain() {
  return (
    <section className="py-20 relative z-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <a href="/" className="inline-block">
              <Image
                src="/icons/Vector.svg"
                alt="Logo"
                width={100}
                height={32}
                className="mb-4 opacity-90"
              />
            </a>
            <p className="text-gray-400 text-[18px] max-w-xs">
              A good design is not only aesthetically pleasing,
              but also functional.
            </p>
          </div>

          <FooterColumn
            title="Sections"
            links={[
              { label: "Home", href: "/" },
              { label: "Features", href: "/features" },
              { label: "Pricing", href: "/pricing" },
              { label: "Contact", href: "/contact" },
            ]}
          />

          <FooterColumn
            title="Company"
            links={[
              { label: "About", href: "/about" },
              { label: "Careers", href: "/careers" },
              { label: "Blog", href: "/blog" },
              { label: "Press", href: "/press" },
            ]}
          />

          <FooterColumn
            title="Resources"
            links={[
              { label: "Docs", href: "/docs" },
              { label: "Support", href: "/support" },
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ]}
          />
        </div>

        {/* BOTTOM */}
        <div className="mt-12 flex items-center justify-between">
          <p className="text-gray-500 text-sm">
            © 2025 Your Company. All rights reserved.
          </p>

          <div className="flex gap-4">
            <SocialIcon
              src="/icons/twitter.png"
              alt="Twitter"
              href="https://twitter.com"
            />
            <SocialIcon
              src="/icons/linkedin.png"
              alt="LinkedIn"
              href="https://linkedin.com"
            />
            <SocialIcon
              src="/icons/discord.png"
              alt="Discord"
              href="https://discord.com"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-4 font-semibold text-white">{title}</h4>
      <ul className="space-y-2 text-gray-400 text-[16px]">
        {links.map(link => (
          <li key={link.label}>
            <a
              href={link.href}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  src,
  alt,
  href,
}: {
  src: string;
  alt: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        cursor-pointer
        group w-10 h-10 flex items-center justify-center
        rounded-full bg-zinc-900
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:scale-110
        hover:bg-zinc-800
        hover:shadow-[0_0_20px_rgba(236,72,153,0.35)]
      "
    >
      <Image
        src={src}
        alt={alt}
        width={20}
        height={20}
        className="opacity-70 transition-opacity duration-300 group-hover:opacity-100"
      />
    </a>
  );
}

/* ---------------- EXPORT ---------------- */

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <ContactSection />
      <FooterMain />
    </footer>
  );
}
