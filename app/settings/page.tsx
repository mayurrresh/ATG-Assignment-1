'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

export default function SettingsPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("user@example.com");
  const [notifications, setNotifications] = useState(true);
  const [compactMode, setCompactMode] = useState(false);
  const [saved, setSaved] = useState(false);

  // Load saved settings
  useEffect(() => {
    setName(localStorage.getItem("profileName") || "");
    setNotifications(localStorage.getItem("notifications") === "true");
    setCompactMode(localStorage.getItem("compactMode") === "true");
  }, []);

  const saveSettings = () => {
    localStorage.setItem("profileName", name);
    localStorage.setItem("notifications", String(notifications));
    localStorage.setItem("compactMode", String(compactMode));

    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const clearData = () => {
    localStorage.clear();
    router.push("/register");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-semibold">Settings</h1>
          <p className="text-sm text-gray-400">
            Manage your account and preferences
          </p>
        </div>

        {/* Profile */}
        <section className="rounded-2xl bg-zinc-900 border border-white/10 p-6 space-y-4">
          <h2 className="text-lg font-medium">Profile</h2>

          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center font-semibold">
              {name ? name[0].toUpperCase() : "U"}
            </div>

            <div className="flex-1 space-y-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded bg-zinc-800 outline-none"
              />

              <input
                value={email}
                disabled
                className="w-full px-4 py-2 rounded bg-zinc-800 text-gray-400 cursor-not-allowed"
              />
            </div>
          </div>
        </section>

        {/* Preferences */}
        <section className="rounded-2xl bg-zinc-900 border border-white/10 p-6 space-y-4">
          <h2 className="text-lg font-medium">Preferences</h2>

          <label className="flex items-center justify-between text-sm">
            <span>Email notifications</span>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="accent-purple-500"
            />
          </label>

          <label className="flex items-center justify-between text-sm">
            <span>Compact mode</span>
            <input
              type="checkbox"
              checked={compactMode}
              onChange={() => setCompactMode(!compactMode)}
              className="accent-purple-500"
            />
          </label>
        </section>

        {/* Appearance */}
        <section className="rounded-2xl bg-zinc-900 border border-white/10 p-6 space-y-4">
          <h2 className="text-lg font-medium">Appearance</h2>
          <ThemeToggle />
        </section>

        {/* Actions */}
        <section className="rounded-2xl bg-zinc-900 border border-white/10 p-6 space-y-4">
          <h2 className="text-lg font-medium">Account</h2>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={saveSettings}
              className="px-5 py-2 rounded bg-purple-600 hover:bg-purple-500 transition"
            >
              Save Changes
            </button>

            <button
              onClick={clearData}
              className="px-5 py-2 rounded bg-red-600/90 hover:bg-red-600 transition"
            >
              Logout & Clear Data
            </button>

            {saved && (
              <span className="text-sm text-green-400 self-center">
                Settings saved ✔
              </span>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
