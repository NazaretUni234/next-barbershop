import { authenticateJWT } from "@/middlewares/sessionMiddlewares";
import { newService } from "@/models/services";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const auth = await authenticateJWT(request);
    if (auth instanceof Response) {
      return auth;
    }
    const body = await request.json();

    const { title, description, image } = body;
    const resNewService = await newService({
      title,
      description,
      image,
    });
    if (!resNewService) {
      return NextResponse.json(
        { message: "Error creating service" },
        { status: 500 }
      );
    }
    return NextResponse.json(true);
  } catch (error) {
    console.error("Error creating service:", error);
    return NextResponse.json(
      { message: "Error creating service" },
      { status: 500 }
    );
  }
}
