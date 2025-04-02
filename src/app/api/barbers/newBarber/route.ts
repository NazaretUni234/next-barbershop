import { authenticateJWT } from "@/middlewares/sessionMiddlewares";
import { newBarber } from "@/models/barbers";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  const auth = await authenticateJWT(request);
  if (auth instanceof Response) {
    return auth;
  }
  const body = await request.json();
  const { name, rol, image, description } = body;
  const resNewBarber = await newBarber({
    name,
    rol,
    image,
    description,
  });
  if (!resNewBarber) {
    return NextResponse.json(
      { message: "Error creating barber" },
      { status: 500 }
    );
  }
  return NextResponse.json(resNewBarber, { status: 200 });
}
