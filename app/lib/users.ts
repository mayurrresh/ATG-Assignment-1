export async function fetchUsers() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}
