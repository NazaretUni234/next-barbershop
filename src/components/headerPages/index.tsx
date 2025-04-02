"use client";
import Image from "next/image";
import mustacheImage from "../../css/uploads/mustache.png";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import "../../../public/js/all";

export default function HeaderPages() {
  const path = usePathname();

  const registerBody = useMemo(
    () => (
      <div className="title title-1 text-center">
        <div className="title--heading">
          <h1>Registrarse</h1>
        </div>
        <div className="clearfix" />
        <ol className="breadcrumb">
          <li>
            <Link href="/home">Inicio</Link>
          </li>
          <li className="active">Register</li>
        </ol>
        <div className="much">
          <Image
            src={mustacheImage.src}
            alt="mustacheImage"
            width={128}
            height={42}
          />
        </div>
      </div>
    ),
    []
  );

  const loginBody = useMemo(
    () => (
      <div className="title title-1 text-center">
        <div className="title--heading">
          <h1>Iniciar sesión</h1>
        </div>
        <div className="clearfix" />
        <ol className="breadcrumb">
          <li>
            <Link href="/home">Inicio</Link>
          </li>
          <li className="active">Iniciar sesión</li>
        </ol>
        <div className="much">
          <Image
            src={mustacheImage.src}
            alt="mustacheImage"
            width={128}
            height={42}
          />
        </div>
      </div>
    ),
    []
  );

  const homeBody = useMemo(
    () => (
      <div className="title title-1 text-center">
        <div className="title--heading">
          <h1>Mr. Pastore BarberShop</h1>
        </div>
        <div className="clearfix"></div>
        <p>Encuentra los mejores cortes y el mejor personal</p>
        <div className="much">
          <Image
            src={mustacheImage.src}
            alt="mustacheImage"
            width={128}
            height={42}
          />
        </div>
      </div>
    ),
    []
  );

  const servicesBody = useMemo(
    () => (
      <div className="title title-1 text-center">
        <div className="title--heading">
          <h1>Nuestros Servicios</h1>
        </div>
        <div className="clearfix" />
        <ol className="breadcrumb">
          <li>
            <Link href="/home">Inicio</Link>
          </li>
          <li className="active">Nuestros servicios</li>
        </ol>
        <div className="much">
          <Image
            src={mustacheImage.src}
            alt="mustacheImage"
            width={128}
            height={42}
          />
        </div>
      </div>
    ),
    []
  );

  const barbersBody = useMemo(
    () => (
      <div className="title title-1 text-center">
        <div className="title--heading">
          <h1>Nuestros Barberos</h1>
        </div>
        <div className="clearfix" />
        <ol className="breadcrumb">
          <li>
            <Link href="/home">Inicio</Link>
          </li>
          <li className="active">Nuestro Barberos</li>
        </ol>
        <div className="much">
          <Image
            src={mustacheImage.src}
            alt="mustacheImage"
            width={128}
            height={42}
          />
        </div>
      </div>
    ),
    []
  );

  const appointmentBody = useMemo(
    () => (
      <div className="title title-1 text-center">
        <div className="title--heading">
          <h1>Agenda</h1>
        </div>
        <div className="clearfix" />
        <ol className="breadcrumb">
          <li>
            <Link href="/home">Inicio</Link>
          </li>
          <li className="active">Agenda</li>
        </ol>
        <div className="much">
          <Image
            src={mustacheImage.src}
            alt="mustacheImage"
            width={128}
            height={42}
          />
        </div>
      </div>
    ),
    []
  );

  const contactBody = useMemo(
    () => (
      <div className="title title-1 text-center">
        <div className="title--heading">
          <h1>Contáctanos</h1>
        </div>
        <div className="clearfix" />
        <ol className="breadcrumb">
          <li>
            <Link href="/home">Inicio</Link>
          </li>
          <li className="active">Contáctanos</li>
        </ol>
        <div className="much">
          <Image
            src={mustacheImage.src}
            alt="mustacheImage"
            width={128}
            height={42}
          />
        </div>
      </div>
    ),
    []
  );

  const mapBody = useMemo(
    () => (
      <div className="title title-1 text-center">
        <div className="title--heading">
          <h1>Mapa del sitio</h1>
        </div>
        <div className="clearfix" />
        <ol className="breadcrumb">
          <li>
            <Link href="/home">Inicio</Link>
          </li>
          <li className="active">Mapa del sitio</li>
        </ol>
        <div className="much">
          <Image
            src={mustacheImage.src}
            alt="mustacheImage"
            width={128}
            height={42}
          />
        </div>
      </div>
    ),
    []
  );

  const managementBody = useMemo(
    () => (
      <div className="title title-1 text-center">
        <div className="title--heading">
          <h1>Administra tus servicios</h1>
        </div>
        <div className="clearfix" />
        <ol className="breadcrumb">
          <li>
            <Link href="/home">Inicio</Link>
          </li>
          <li className="active">Administrar servicios</li>
        </ol>
        <div className="much">
          <Image
            src={mustacheImage.src}
            alt="mustacheImage"
            width={128}
            height={42}
          />
        </div>
      </div>
    ),
    []
  );

  const bodyForPath = useMemo(() => {
    switch (path) {
      case "/register":
        return registerBody;
      case "/login":
        return loginBody;
      case "/services":
        return servicesBody;
      case "/barbers":
        return barbersBody;
      case "/appointment":
        return appointmentBody;
      case "/contact":
        return contactBody;
      case "/map":
        return mapBody;
      case "/elementManagement":
        return managementBody;
      default:
        return homeBody;
    }
  }, [
    path,
    registerBody,
    loginBody,
    homeBody,
    servicesBody,
    barbersBody,
    appointmentBody,
    mapBody,
    contactBody,
    managementBody,
  ]);

  return (
    <div className="all-page-bar">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">{bodyForPath}</div>
        </div>
      </div>
    </div>
  );
}
