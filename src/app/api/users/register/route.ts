import { newUser } from "@/models/users";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, lastName, email, password, phone, tokenAdmin } = body;
  const newUserId = await newUser({
    name,
    lastName,
    email,
    password,
    phone,
    tokenAdmin,
  });
  if (!newUserId) {
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 500 }
    );
  }
  return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }
  );
}
