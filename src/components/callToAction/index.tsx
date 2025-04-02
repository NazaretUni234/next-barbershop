"use client";
import { GetUser } from "@/types/users";
import { useRedirection } from "@/hooks/globalHooks";
import { useSelector } from "react-redux";

export default function CallToAction() {
  const user: GetUser = useSelector((state: any) => state.user || {});
  const { handleRedirect } = useRedirection();
  const handleClick = () => {
    handleRedirect(user._id ? "/appointment" : "/login");
  };

  return (
    <section
      className="section nopad cac text-center"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      {!user._id ? (
        <h3 style={{ color: "white" }}>
          Te interesa alguno de nuestros servicios Registrate o Inicia sesión
          para agendar.
        </h3>
      ) : (
        <h3 style={{ color: "white" }}>
          Te interesa alguno de nuestros servicios haz click aqui para agendar
        </h3>
      )}

      {/* <a id="clickActionAppointments" href="appointment.html">
        <h3>
          Te interesa alguno de nuestros servicios haz click aqui para agendar
        </h3>
      </a> */}
    </section>
  );
}
