import TestimonialCard from "./TestimonialsCard";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Founder",
    company: "Finloop",
    quote: "This product completely changed how we ship features. The UI is clean and the dev experience is insane.",
  },
  {
    name: "Neha Sharma",
    role: "Product Manager",
    company: "Flowbase",
    quote: "Our conversion rate jumped by 32%. This is not just design — it’s business impact.",
  },
  {
    name: "Rohit Verma",
    role: "CTO",
    company: "ScaleX",
    quote: "We replaced three tools with this one. Performance, UX, and scalability are top-notch.",
  },
  {
    name: "Emily Carter",
    role: "Designer",
    company: "PixelCraft",
    quote: "Finally, a product that respects design systems and developers equally.",
  },
  {
    name: "Daniel Wong",
    role: "Engineering Lead",
    company: "Cloudway",
    quote: "Rock-solid architecture. We onboarded our entire team in a day.",
  },
  {
    name: "Priya Nair",
    role: "Startup Founder",
    company: "Launchpad",
    quote: "It feels premium. Investors noticed. Customers noticed. That’s rare.",
  },
];

export default function TestimonialsGrid() {
  return (
    <section className="py-32 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

      </div>
    </section>
  );
}
