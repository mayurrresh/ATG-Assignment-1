interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  quote,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="rounded-2xl bg-zinc-900/70 backdrop-blur p-6 border border-white/10 hover:border-white/20 transition">
      
      {/* QUOTE */}
      <p className="text-gray-300 text-sm leading-relaxed">
        “{quote}”
      </p>

      {/* USER */}
      <div className="mt-6 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white text-sm font-semibold">
          {name[0]}
        </div>

        <div>
          <div className="text-sm font-medium text-white">
            {name}
          </div>
          <div className="text-xs text-gray-400">
            {role} @ {company}
          </div>
        </div>
      </div>
    </div>
  );
}
