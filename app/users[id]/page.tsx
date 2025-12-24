export const dynamic = "force-dynamic";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function UserDetail({ params }: PageProps) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );

  if (!res.ok) {
    return <div className="p-6">Failed to load user</div>;
  }

  const user = await res.json();

  if (!user || !user.name) {
    return <div className="p-6">User not found</div>;
  }

  return (
    <div className="p-6 space-y-2">
      <h1 className="text-2xl font-semibold">{user.name}</h1>
      <p>Email: {user.email ?? "N/A"}</p>
      <p>Phone: {user.phone ?? "N/A"}</p>
      <p>
        Company: {user.company?.name ?? "N/A"}
      </p>
    </div>
  );
}
