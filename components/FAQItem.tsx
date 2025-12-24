"use client";

import { useState, useRef } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const maxHeight = open
    ? `${contentRef.current?.scrollHeight}px`
    : "0px";

  return (
    <div
      className="
        rounded-2xl border border-white/10
        bg-white/[0.035] backdrop-blur
        transition-colors
      "
    >
      {/* QUESTION */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full flex justify-between items-start
          px-8 py-7 text-left
          text-white font-medium
          hover:bg-white/[0.04]
          transition
        "
      >
        <span className="pr-8 text-base leading-relaxed">
          {question}
        </span>

        {/* PLUS ICON */}
        <span
          className={`
            mt-1 text-xl leading-none
            transform transition-transform duration-300
            ${open ? "rotate-45 text-purple-400" : "rotate-0"}
          `}
        >
          +
        </span>
      </button>

      {/* ANSWER */}
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className="
          overflow-hidden
          transition-[max-height] duration-500 ease-in-out
        "
      >
        <div
          className={`
            px-8 pt-2 pb-10
            text-gray-400 text-sm leading-relaxed
            transition-all duration-300
            ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
          `}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}
