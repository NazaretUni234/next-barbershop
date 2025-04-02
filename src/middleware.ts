import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose"; // Importa jwtVerify de jose

const protectedRoutes = [
  "/services",
  "/appointment",
  "/barbers",
  "/contact",
  "/elementManagement",
];

const guestOnlyRoutes = ["/login", "/register"];

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "default_secret"
); // Convierte la clave secreta a un Uint8Array

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("tokenBarber")?.value; // Leer el token JWT de las cookies
  const url = req.nextUrl;

  // Si el usuario no está autenticado y accede a una ruta protegida
  if (
    !token &&
    protectedRoutes.some((route) => url.pathname.startsWith(route))
  ) {
    url.pathname = "/login"; // Redirigir al login
    return NextResponse.redirect(url);
  }

  // Verificar si el usuario está intentando acceder a "/elementManagement"
  if (url.pathname.startsWith("/elementManagement")) {
    if (!token) {
      url.pathname = "/login"; // Redirigir al login si no hay token
      return NextResponse.redirect(url);
    }

    try {
      // Decodificar el token para obtener el rol del usuario
      const { payload } = await jwtVerify(token, JWT_SECRET); // Verifica el token usando jose
      console.log("Decoded Token:", payload); // Verificar el contenido del token

      if (payload.role !== "admin") {
        url.pathname = "/home"; // Redirigir al home si no es admin
        return NextResponse.redirect(url);
      }
    } catch (error) {
      console.error("Error al verificar el token:", error);
      url.pathname = "/login"; // Redirigir al login si el token es inválido
      return NextResponse.redirect(url);
    }
  }

  // Si el usuario está autenticado y accede a una ruta solo para invitados
  if (
    token &&
    guestOnlyRoutes.some((route) => url.pathname.startsWith(route))
  ) {
    url.pathname = "/home"; // Redirigir al home
    return NextResponse.redirect(url);
  }

  // Continuar con la solicitud si no hay restricciones
  return NextResponse.next();
}
