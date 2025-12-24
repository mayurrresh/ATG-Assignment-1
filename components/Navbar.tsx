import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">

      <div className="relative max-w-7xl mx-auto px-6 h-[88px] flex items-center justify-between">
        {/* Left + Right content goes here */}


        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/icons/logo.png"
            alt="Squid"
            className="h-8 w-auto"
          />
          <span className="text-white text-xl font-semibold tracking-tight">
          </span>
        </div>



        {/* NAV LINKS */}
        <div className="flex items-center gap-8">
          <a
            href="/"
            className="
    text-sm leading-[28px]
    text-[#9E9E9E]
    font-normal
    transition hover:text-white
  "
          >
            Home
          </a>
          <a
            href="/download"
            className="
    flex items-center justify-center
    w-[198px] h-[44px]
    px-7 py-3
    rounded-[5px]
    bg-gradient-to-r from-[#FF9898] to-[#8054FF]
    text-sm font-medium text-white
    shadow-lg shadow-purple-500/20
    transition hover:opacity-90
  "
          >
            Download Template
          </a>



        </div>
      </div>
    </header>

  );
}
