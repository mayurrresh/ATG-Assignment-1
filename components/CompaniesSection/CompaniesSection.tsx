import CompaniesLogos from "./CompaniesLogos";
import TrialCTA from "./TrialCTA";

export default function CompaniesSection() {
  return (
    <section className="bg-[#0B0B0F] py-40">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2
          className="
            text-center
            text-5xl md:text-6xl xl:text-7xl
            font-semibold text-white
            leading-[1.1] tracking-tight
          "
        >
          Companies we’ve worked <br />
          with since 2015
        </h2>

        {/* Logos */}
        <div className="mt-20">
          <CompaniesLogos />
        </div>

        {/* CTA Card */}
        <div className="mt-28">
          <TrialCTA />
        </div>

      </div>
    </section>
  );
}
