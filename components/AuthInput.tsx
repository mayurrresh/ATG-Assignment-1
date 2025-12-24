interface AuthInputProps {
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
}

export default function AuthInput({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  autoComplete,
}: AuthInputProps) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className="
        w-full rounded-xl bg-zinc-900 px-5 py-4
        text-base text-white placeholder:text-gray-500
        outline-none border border-white/10
        focus:border-purple-500 focus:ring-2 focus:ring-purple-500
        transition
      "
    />
  );
}
