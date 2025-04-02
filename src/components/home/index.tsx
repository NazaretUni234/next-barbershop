import OurBarbers from "../barbers/ourBarbers";
import InfoOfBarbershop from "./infoOfBarbershop";

export default function Home() {
  return (
    <div>
      <div className="section wb">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <div className="message-box">
                <h4>Acerca de</h4>
                <h2>Mr. Patore BarberShop</h2>
                <p className="lead">Más que un corte, una experiencia</p>
                <p>
                  En Mr. Pastore BarberShop, cada tijeretazo es precisión, cada
                  afeitado es un arte y cada cliente es un caballero en
                  transformación. Con un ambiente clásico y un toque moderno,
                  ofrecemos mucho más que un simple corte de cabello: brindamos
                  una experiencia única de cuidado y estilo.
                </p>
                <a
                  href="/appointment"
                  data-scroll=""
                  className="btn btn-light btn-radius btn-brd grd1 effect-1"
                >
                  Agendar cita
                </a>
              </div>
              {/* end messagebox */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <hr className="hr1" />
          <InfoOfBarbershop />
          {/* end row */}
          <hr className="hr1" />
        </div>
        {/* end container */}
      </div>
      <OurBarbers />
    </div>
  );
}
