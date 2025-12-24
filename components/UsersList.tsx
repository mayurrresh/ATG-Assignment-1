'use client';

import { useMemo, useState } from "react";
import Link from "next/link";

const PAGE_SIZE = 5;

export default function UsersList({ users }: { users: any[] }) {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [page, setPage] = useState(1);

  const filteredUsers = useMemo(() => {
    let data = users.filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
    );

    data.sort((a, b) =>
      sortAsc
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    return data;
  }, [users, search, sortAsc]);

  const totalPages = Math.ceil(filteredUsers.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const paginatedUsers = filteredUsers.slice(start, start + PAGE_SIZE);

  return (
    <div className="bg-zinc-900 rounded-xl p-4 border border-white/10 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <h2 className="text-lg font-medium">All Users</h2>

        <div className="flex gap-2">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search name or email"
            className="px-3 py-2 rounded bg-zinc-800 text-sm outline-none"
          />

          <button
            onClick={() => setSortAsc(!sortAsc)}
            className="px-3 py-2 rounded bg-zinc-800 text-sm"
          >
            Sort {sortAsc ? "Z–A" : "A–Z"}
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-400 border-b border-white/10">
            <tr>
              <th className="text-left py-2">Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user) => (
              <tr
                key={user.id}
                className="border-b border-white/5 hover:bg-white/5"
              >
                <td className="py-2">
                  <Link
                    href={`/users/${user.id}`}
                    className="text-purple-400 hover:underline"
                  >
                    {user.name}
                  </Link>
                </td>
                <td>{user.email}</td>
                <td>{user.company?.name}</td>
                <td>{user.address?.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-end gap-2">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-3 py-1 bg-zinc-800 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="px-2 text-sm">
          Page {page} / {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-3 py-1 bg-zinc-800 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
