import Navbar from "@/components/Navbar";
import Dashboard from "@/components/ui/Dashboard";
import FeaturesGrid from "@/components/FeaturesGrid";
import OrbitSection from "@/components/OrbitSection";
import CompaniesSection from "@/components/CompaniesSection/CompaniesSection";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins ({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", ],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className={`relative min-h-screen bg-[#0B0B0F] overflow-hidden ${poppins.className}`}>

          {/* GRID LINES */}
          <div className="absolute inset-0 z-1 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size:60px_100%" />

          {/* BLUR BLOBS */}
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl" />

          {/* SMALL DECORATIVE BLOB */}
          <div className="relative left-27 top-24 w-20 h-20 rounded-full bg-purple-500/30 blur-xl z-0" />

          {/* HERO CONTENT */}
          <div className="relative z-10 h-full m-30 flex items-center justify-center">

            <div className="w-187.5 text-center">

              {/* TITLE */}
              <h1 className="text-white text-[64px] font-semibold leading-[1.05] tracking-tight">
                Beautiful Landing Page <br />
                Design for You
              </h1>

              {/* SUBTEXT */}
              <p className="mt-8 mx-auto w-144.25 text-[18px] leading-7 text-[#9E9E9E]">
                A good design is not only aesthetically pleasing, but also functional.
                It should be able to solve the problem.
              </p>

              {/* CTA */}
              <div className="mt-12 flex justify-center">
                <a
                  href="/register"
                  className="
          flex items-center justify-center
          w-49.5 h-11
          rounded-[5px]
          bg-linear-to-r from-[#FF9898] to-[#8054FF]
          text-sm font-medium text-white
          shadow-lg shadow-purple-500/20
          hover:opacity-90 transition
        "
                >
                  Download Template
                </a>
              </div>

            </div>
          </div>

          {/* SECTIONS */}
          <Dashboard />
          <FeaturesGrid />
          <OrbitSection />
          <CompaniesSection />
          <Footer />

        </section>
      </main>
    </>
  );
}
