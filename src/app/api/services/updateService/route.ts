import { authenticateJWT } from "@/middlewares/sessionMiddlewares";
import { updateService } from "@/models/services";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  try {
    const auto = await authenticateJWT(req);
    if (auto instanceof Response) {
      return auto;
    }
    const body = await req.json();
    const { _id, title, description, image } = body;
    const resUpdateService = await updateService({
      _id,
      title,
      description,
      image,
    });
    if (!resUpdateService) {
      return NextResponse.json(
        { message: "Error updating service" },
        { status: 500 }
      );
    }
    return NextResponse.json(resUpdateService);
  } catch (error) {
    console.error("Error updating service:", error);
    return NextResponse.json(
      { message: "Error updating service" },
      { status: 500 }
    );
  }
}
