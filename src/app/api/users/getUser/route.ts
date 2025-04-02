import { authenticateJWT } from "@/middlewares/sessionMiddlewares";
import { NextRequest, NextResponse } from "next/server";

// import { authenticateJWT } from "@/middlewares/sessionMiddlewares";

export async function GET(req: NextRequest) {
  try {
    const user = await authenticateJWT(req);
    console.log("Usuario autenticado:", user);

    if (user instanceof NextResponse) {
      return user; // Si el middleware devuelve una respuesta de error
    }

    return NextResponse.json({ message: "Ruta protegida", user });
  } catch (error) {
    // console.error("Error en la autenticación:", error);
    return NextResponse.json(
      { error: "Error en la autenticación" },
      { status: 500 }
    );
  }
}
