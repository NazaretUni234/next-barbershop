"use client";
import imageLogo from "../../images/logos/logoPrincipal.png";
import Image from "next/image";
import ComponentLink from "./componentLink";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "@/controllers/users";
import { setUser } from "@/lib/slides/users";
import { RootStore } from "@/lib/store";
import { GetUser } from "@/types/users";

export default function Drawer() {
  const dispatch = useDispatch();

  const user: GetUser = useSelector((state: any) => state.user);

  useEffect(() => {
    getUser()
      .then((user) => {
        console.log("user", user);
        if (user) {
          dispatch(setUser(user.user));
        }
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        // Handle error if needed
      });
  }, [dispatch]);

  async function handleLogout() {
    try {
      // Realiza la solicitud al endpoint de logout
      const response = await fetch("/api/users/logout", {
        method: "GET",
      });

      if (response.ok) {
        // Elimina el token de localStorage
        localStorage.removeItem("tokenBarber");

        // Redirige al usuario a la página de inicio de sesión o inicio
        window.location.href = "/login";
      } else {
        console.error("Error al cerrar sesión");
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  }

  return (
    <div id="sidebar-wrapper">
      <div className="side-top">
        <div className="logo-sidebar">
          <Link href="/home">
            <Image src={imageLogo} alt="Logo" className="img-responsive" />
          </Link>
        </div>
        <ul className="sidebar-nav">
          <li>
            <ComponentLink href="/home">Inicio</ComponentLink>
          </li>
          {!user._id && (
            <li>
              <ComponentLink href="/register">Registrarse</ComponentLink>
            </li>
          )}
          {!user._id && (
            <li>
              <ComponentLink href="/login">Iniciar sesión</ComponentLink>
            </li>
          )}
          {user._id && (
            <li>
              <ComponentLink href="/services">Nuestros servicios</ComponentLink>
            </li>
          )}
          {user._id && (
            <li>
              <ComponentLink href="/barbers">Nuestros barberos</ComponentLink>
            </li>
          )}

          {user._id && (
            <li>
              <ComponentLink href="/appointment">Agendar</ComponentLink>
            </li>
          )}
          {user._id && (
            <li>
              <ComponentLink href="/contact">Contactanos</ComponentLink>
            </li>
          )}
          {user._id && (
            <li>
              <Link onClick={handleLogout} href="/login">
                Cerrar sesión
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
