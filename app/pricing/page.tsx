"use client";

import { register } from "module";
import { useState } from "react";

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <main className="bg-[#0B0B0F] min-h-screen pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER + TOGGLE */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
          <h1 className="text-5xl font-semibold text-white">
            Pricing
          </h1>

          {/* TOGGLE */}
          <div className="flex items-center rounded-full bg-zinc-900 p-1">
            {["monthly", "yearly"].map((type) => (
              <button
                key={type}
                onClick={() => setBilling(type as any)}
                className={`px-6 py-2 rounded-full text-sm transition
                  ${
                    billing === type
                      ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
              >
                {type === "monthly" ? "Monthly" : "Yearly"}
              </button>
            ))}
          </div>
        </div>

        {/* PRICING GRID */}
        <div className="grid gap-10 md:grid-cols-3">

          <PlanCard
            icon="💎"
            title="Silver Package"
            price={billing === "monthly" ? 40 : 400}
            features={[
              "100+ Free Templates",
              "10 Team Members",
              "Priority Support",
              "Premium Features",
              "50 Integrations",
            ]}
          />

          <PlanCard
            icon="✨"
            title="Golden Package"
            price={billing === "monthly" ? 70 : 700}
            highlighted
            features={[
              "100+ Free Templates",
              "10 Team Members",
              "Priority Support",
              "Premium Features",
              "50 Integrations",
            ]}
          />

          <PlanCard
            icon="🚀"
            title="Premium Package"
            price={billing === "monthly" ? 120 : 1200}
            features={[
              "100+ Free Templates",
              "10 Team Members",
              "Priority Support",
              "Premium Features",
              "50 Integrations",
            ]}
          />

        </div>
      </div>
    </main>
  );
}

/* ------------------------------ */
/* PLAN CARD */
/* ------------------------------ */

function PlanCard({
  icon,
  title,
  price,
  features,
  highlighted = false,
}: {
  icon: string;
  title: string;
  price: number;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={`
        relative rounded-3xl p-8
        bg-zinc-900/60 backdrop-blur
        border border-white/10
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.7)]
        ${highlighted ? "ring-1 ring-purple-500/50" : ""}
      `}
    >
      {/* ICON */}
      <div className="mb-4 text-3xl">{icon}</div>

      {/* TITLE */}
      <h3 className="text-xl font-medium text-white">
        {title}
      </h3>

      <hr className="my-6 border-white/10" />

      {/* FEATURES */}
      <ul className="space-y-4 text-sm text-gray-300">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs">
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>

      <hr className="my-8 border-white/10" />

      {/* PRICE + CTA */}
      <div className="flex items-end justify-between">
        <div className="text-white">
          <span className="text-4xl font-semibold">${price}</span>
          <span className="text-sm text-gray-400"> /mo</span>
        </div>

        <button
          className="px-6 py-2 rounded-lg
          bg-gradient-to-r from-pink-500 to-purple-500
          text-white text-sm font-medium
          hover:opacity-90 transition"
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}
