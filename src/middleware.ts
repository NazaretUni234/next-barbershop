import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = [
  "/services",
  "/appointment",
  "/barbers",
  "/contact",
  "/elementManagement",
];

const guestOnlyRoutes = ["/login", "/register"];

export function middleware(req: NextRequest) {
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
