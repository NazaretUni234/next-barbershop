import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({ message: "Logout exitoso" });
  response.cookies.set("tokenBarber", "", { httpOnly: true, maxAge: 0 }); // Eliminar el token
  return response;
}
