"use client";

import { useRouter } from "next/navigation";
import OrbitVisual from "@/components/OrbitVisual";

export default function OrbitSection() {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <section className="bg-black py-40">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT – ORBIT */}
        <OrbitVisual />

        {/* RIGHT – CONTENT */}
        <div>
          <h2
            className="
              text-5xl md:text-6xl xl:text-7xl
              font-semibold text-white
              leading-[1.1] tracking-tight
            "
          >
            We're here to help you at <br /> all times
          </h2>

          <p
            className="
              mt-8 max-w-xl
              text-lg md:text-xl
              text-gray-400
              leading-relaxed
            "
          >
            A good design that speaks to your audience is key to a successful
            business. Our team of experts is dedicated to providing you with
            top-notch support and guidance every step of the way.
          </p>

          <button
            onClick={handleRegister}
            className="
              mt-12 px-10 py-4
              rounded-full
              bg-linear-to-r from-pink-500 to-purple-500
              text-white text-lg font-semibold
              shadow-lg shadow-purple-500/30
              hover:opacity-90 transition cursor-pointer
            "
          >
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
}
