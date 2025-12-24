'use client';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search by name or email",
}: SearchBarProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="
        w-full max-w-sm
        px-4 py-2
        rounded-lg
        bg-zinc-800
        text-white
        placeholder:text-gray-400
        outline-none
        border border-white/10
        focus:border-purple-500
        transition
      "
    />
  );
}
