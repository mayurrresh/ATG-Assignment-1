import Link from "next/link";

export default function UserTable({ users }: { users: any[] }) {
  return (
    <table className="w-full border border-white/10">
      <thead>
        <tr className="bg-zinc-800">
          <th className="p-2">Name</th>
          <th>Email</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id} className="border-t border-white/10">
            <td className="p-2">
              <Link href={`/users/${user.id}`} className="text-purple-400">
                {user.name}
              </Link>
            </td>
            <td>{user.email}</td>
            <td>{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
