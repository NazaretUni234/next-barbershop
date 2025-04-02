"use client";
import { GetUser } from "@/types/users";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Footer() {
  const user: GetUser = useSelector((state: any) => state.user);

  return (
    <div className="copyrights">
      <div className="container-fluid">
        <div className="footer-distributed">
          <div className="footer-left">
            <p className="footer-links">
              <Link id="footer_home" href="/home">
                Inicio
              </Link>
              {!user?._id && (
                <>
                  <Link id="footer_register" href="/register">
                    Registrarse
                  </Link>
                  <Link id="footer_login" href="/login">
                    Iniciar sesión
                  </Link>
                </>
              )}
              {user?._id && (
                <>
                  <Link id="footer_services" href="/services">
                    Nuestros servicios
                  </Link>
                  <Link id="footer_barbers" href="/barbers">
                    Nuestros barberos
                  </Link>
                  <Link id="footer_appointment" href="/appointment">
                    Agendar
                  </Link>
                  <Link id="footer_contact" href="/contact">
                    Contactanos
                  </Link>
                </>
              )}
              <Link href="/map">Mapa del sitio</Link>
            </p>
            <p className="footer-company-name">Mr. Pastore BarberShop</p>
          </div>
        </div>
      </div>
    </div>
  );
}
