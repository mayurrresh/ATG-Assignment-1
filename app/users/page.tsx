'use client';

import { useEffect, useState } from "react";
import UserTable from "@/components/UserTable";
import SearchBar from "@/components/Searchbar";
import Pagination from "@/components/Pagination";

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [page, setPage] = useState(1);

  const PAGE_SIZE = 5;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    let data = [...users];

    if (search) {
      data = data.filter(u =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    data.sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

    setFiltered(data);
    setPage(1);
  }, [search, sortAsc, users]);

  const start = (page - 1) * PAGE_SIZE;
  const paginated = filtered.slice(start, start + PAGE_SIZE);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Users</h1>

      <div className="flex gap-4">
        <SearchBar value={search} onChange={setSearch} />
        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="px-4 py-2 bg-zinc-800 rounded"
        >
          Sort {sortAsc ? "Z–A" : "A–Z"}
        </button>
      </div>

      <UserTable users={paginated} />

      <Pagination
        total={filtered.length}
        page={page}
        pageSize={PAGE_SIZE}
        onPageChange={setPage}
      />
    </div>
  );
}
