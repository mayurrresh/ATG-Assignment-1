import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { fullName, email, password } = await req.json();

  if (!fullName || !email || !password) {
    return NextResponse.json(
      { message: "Missing fields" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  console.log("User registered:", {
    fullName,
    email,
    hashedPassword,
  });

  return NextResponse.json({ success: true });
}
