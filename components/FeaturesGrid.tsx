import FeatureCard from "@/components/FeatureCard";
import { ClassNames } from "@emotion/react";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins ({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", ],
  display: "swap",
});
const features = [
  {
    title: "Fully Customizable",
    description:
      "A good design is not only aesthetically pleasing, but also functional.",
    image: "/icons/Group 102.png",
  },
  {
    title: "Modern UI",
    description:
      "Built with a modern design system that feels clean and professional.",
    image: "/icons/Group.svg",
  },
  {
    title: "Responsive Layout",
    description:
      "Optimized to look great on desktop, tablet, and mobile devices.",
    image: "/icons/Group 129.svg",
  },
  {
    title: "Fast Performance",
    description:
      "Lightweight components focused on speed and efficiency.",
    image: "/icons/Group 103.svg",
  },
  {
    title: "Reusable Components",
    description:
      "Well-structured components that scale with your application.",
    image: "/icons/Group 105.svg",
  },
  {
    title: "Production Ready",
    description:
      "Follows best practices used in real-world applications.",
    image: "/icons/Group 106.svg",
  },
];



export default function FeaturesGrid() {
  return (
    <section className={`bg-[#0B0B0F] py-32 ${poppins.className}`}>
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADING */}
        <div className="mb-16 text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Feature Boxes
          </h2>
          <p className="mt-4 max-w-2xl text text-gray-400">
            A good design is not only aesthetically pleasing, but also functional.
            It should be able to solve the problem.
          </p>
        </div>

        {/* 2 × 3 GRID */}
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
