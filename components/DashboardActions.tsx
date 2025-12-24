'use client';

import { useRouter } from "next/navigation";
import { Settings, LogOut } from "lucide-react";

export default function DashboardActions() {
  const router = useRouter();

  const handleLogout = () => {
    // TEMP logout logic (replace with real auth later)
    localStorage.clear();

    // Redirect to register / login page
    router.push("/register");
  };

  return (
    <div className="flex items-center gap-3">
      {/* Settings Button */}
      <button
        onClick={() => router.push("/settings")}
        className="
          flex items-center gap-2
          px-4 py-2
          rounded-lg
          bg-zinc-800
          text-sm
          text-white
          border border-white/10
          hover:bg-zinc-700
          transition
        "
      >
        <Settings size={16} />
        Settings
      </button>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="
          flex items-center gap-2
          px-4 py-2
          rounded-lg
          bg-red-600/90
          text-sm
          text-white
          hover:bg-red-600
          transition
        "
      >
        <LogOut size={16} />
        Logout
      </button>
    </div>
  );
}
