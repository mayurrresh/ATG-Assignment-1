const faqs = [
  {
    question: "What is this product about?",
    answer:
      "This product helps teams design, build, and ship high-quality interfaces faster using a clean and scalable system.",
  },
  {
    question: "Who is this product for?",
    answer:
      "It’s built for startups, founders, designers, and developers who want speed with quality.",
  },
  {
    question: "Is it suitable for early-stage startups?",
    answer:
      "Yes. It’s lightweight enough for MVPs and powerful enough to scale.",
  },
  {
    question: "Can I customize every component?",
    answer:
      "Absolutely. All components are modular and easy to extend.",
  },
  {
    question: "Does it support responsive layouts?",
    answer:
      "Yes. Every component is responsive by default.",
  },
  {
    question: "Is this production-ready?",
    answer:
      "Yes. It follows real-world SaaS architecture and styling patterns.",
  },
  {
    question: "Does it work with Next.js?",
    answer:
      "Yes. It’s optimized for modern Next.js and React apps.",
  },
  {
    question: "Can I use it for client projects?",
    answer:
      "Yes. You can use it for personal and client work.",
  },
  {
    question: "Is Tailwind CSS required?",
    answer:
      "Yes. The system is built entirely using Tailwind CSS.",
  },
];

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-10">FAQs</h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-[#1a1a1a] p-6"
            >
              <h3 className="text-lg font-medium">
                {faq.question}
              </h3>
              <p className="mt-2 text-gray-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
