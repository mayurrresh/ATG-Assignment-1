interface StatusCardProps {
  title: string;
  value: string | number;
}

export default function StatusCard({ title, value }: StatusCardProps) {
  return (
    <div className="rounded-xl bg-zinc-900 p-4 border border-white/10">
      <p className="text-sm text-gray-400">{title}</p>
      <p className="text-2xl font-semibold mt-2 text-white">
        {value}
      </p>
    </div>
  );
}
