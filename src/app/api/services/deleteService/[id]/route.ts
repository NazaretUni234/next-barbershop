import { authenticateJWT } from "@/middlewares/sessionMiddlewares";
import { deleteService } from "@/models/services";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    const auth = await authenticateJWT(req);
    if (auth instanceof Response) {
      return auth;
    }

    const id = req.nextUrl.pathname.split("/").pop();
    console.log("Deleting service...", id);
    if (!id) {
      return NextResponse.json(
        { message: "Error deleting service" },
        { status: 500 }
      );
    }
    const resDeleteService = await deleteService(id);
    if (!resDeleteService) {
      return NextResponse.json(
        { message: "Error deleting service" },
        { status: 500 }
      );
    }
    return NextResponse.json(resDeleteService);
  } catch (error) {
    console.error("Error deleting service:", error);
    return NextResponse.json(
      { message: "Error deleting service" },
      { status: 500 }
    );
  }
}
