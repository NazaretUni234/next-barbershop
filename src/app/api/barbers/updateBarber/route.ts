import { authenticateJWT } from "@/middlewares/sessionMiddlewares";
import { updateBarber } from "@/models/barbers";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
  const auth = await authenticateJWT(request);
  if (auth instanceof Response) {
    return auth;
  }
  const body = await request.json();
  const { _id, name, rol, image, description } = body;
  const resUpdateBarber = await updateBarber({
    _id,
    name,
    rol,
    image,
    description,
  });
  if (!resUpdateBarber) {
    return NextResponse.json(
      { message: "Error updating barber" },
      { status: 500 }
    );
  }
  return NextResponse.json(resUpdateBarber, { status: 200 });
}
