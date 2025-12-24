export default function DashboardLoading() {
  return (
    <div className="p-6 space-y-6 animate-pulse">
      {/* Page title */}
      <div className="h-8 w-48 bg-zinc-800 rounded" />

      {/* Status cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-28 rounded-xl bg-zinc-900 border border-white/10"
          />
        ))}
      </div>
    </div>
  );
}
