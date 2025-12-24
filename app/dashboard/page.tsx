export const  dynamic = "force-dynamic";

import { fetchUsers } from "@/app/lib/users";
import StatusCard from "@/components/StatusCard";
import UsersList from "@/components/UsersList";
import DashboardActions from "@/components/DashboardActions";

export default async function DashboardPage() {
  try {
    const users: any[] = await fetchUsers();

    const totalUsers = users.length;
    const totalCompanies = new Set(
      users.map((u) => u.company?.name).filter(Boolean)
    ).size;

    const totalCities = new Set(
      users.map((u) => u.address?.city).filter(Boolean)
    ).size;

    const topCompanies = Array.from(
      users.reduce((map: Map<string, number>, user) => {
        const company = user.company?.name;
        if (!company) return map;
        map.set(company, (map.get(company) || 0) + 1);
        return map;
      }, new Map<string, number>())
    )
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    const recentUsers = users.slice(0, 5);

    return (
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-8 space-y-12">

          {/* HEADER */}
          <div className="flex items-start justify-between gap-6">
            <div className="space-y-1">
              <h1 className="text-3xl font-semibold tracking-tight">
                Dashboard
              </h1>
              <p className="text-sm text-gray-400">
                Overview of users and system activity
              </p>
            </div>

            {/* Settings + Logout */}
            <DashboardActions />
          </div>

          {/* SUMMARY CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatusCard title="Total Users" value={totalUsers} />
            <StatusCard title="Companies" value={totalCompanies} />
            <StatusCard title="Cities" value={totalCities} />
            <StatusCard title="Status" value="Active" />
          </div>

          {/* INSIGHTS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* TOP COMPANIES */}
            <div className="
              rounded-2xl
              bg-linear-to-br from-zinc-900 to-zinc-950
              border border-white/10
              p-5
              shadow-lg
            ">
              <h2 className="text-lg font-medium mb-4">
                Top Companies
              </h2>

              <ul className="space-y-3">
                {topCompanies.map(([company, count]) => (
                  <li
                    key={company}
                    className="flex justify-between text-sm text-gray-300"
                  >
                    <span className="truncate">{company}</span>
                    <span className="text-gray-400">{count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RECENT USERS */}
            <div className="
              lg:col-span-2
              rounded-2xl
              bg-linear-to-br from-zinc-900 to-zinc-950
              border border-white/10
              p-5
              shadow-lg
            ">
              <h2 className="text-lg font-medium mb-4">
                Recent Users
              </h2>

              <div className="divide-y divide-white/10">
                {recentUsers.map((user) => (
                  <div
                    key={user.id}
                    className="py-4 flex items-center justify-between"
                  >
                    <div className="space-y-1">
                      <p className="text-sm font-medium">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        {user.email}
                      </p>
                    </div>

                    <span className="text-xs text-gray-400">
                      {user.address?.city}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* USERS LIST */}
          <div className="
            rounded-2xl
            bg-linear-to-br from-zinc-900 to-zinc-950
            border border-white/10
            shadow-lg
          ">
            <UsersList users={users} />
          </div>

        </div>
      </div>
    );
  } catch (error) {
    console.error("Dashboard error:", error);
    return (
      <div className="p-6 text-red-500">
        Failed to load dashboard
      </div>
    );
  }
}
