import Link from "next/link";

export default function MapSite() {
  return (
    <div className="container_map">
      <div className="sitemap">
        <h3>Páginas Principales</h3>
        <ul>
          <li>
            <Link href="/home">Inicio</Link>
          </li>
          <li>
            <Link href="/login">Inicia sesión</Link>
          </li>
          <li>
            <Link href="/register">Registrate</Link>
          </li>
        </ul>
        <h3>Servicios</h3>
        <ul>
          <li>
            <Link href="/services">Nuestros servicios</Link>
          </li>
        </ul>
      </div>
      <div className="sitemap">
        <h3>Nuestro equipo</h3>
        <ul>
          <li>
            <Link href="/barbers">Nuestros barberos</Link>
          </li>
          <li>
            <Link href="/contact">Contactanos</Link>
          </li>
        </ul>
        <h3>Agenda una cita</h3>
        <ul>
          <li>
            <Link href="/appointment">Agendar Cita</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
