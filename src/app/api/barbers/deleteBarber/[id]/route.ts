import { authenticateJWT } from "@/middlewares/sessionMiddlewares";
import { deleteBarber } from "@/models/barbers";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const auth = await authenticateJWT(request);
  if (auth instanceof Response) {
    return auth;
  }
  const id = request.nextUrl.pathname.split("/").pop();
  if (!id) {
    return NextResponse.json(
      { message: "Error deleting barber not ID" },
      { status: 500 }
    );
  }
  const resDeleteBarber = await deleteBarber(id);
  if (!resDeleteBarber) {
    return NextResponse.json(
      { message: "Error deleting barber" },
      { status: 500 }
    );
  }
  return NextResponse.json(resDeleteBarber, { status: 200 });
}
