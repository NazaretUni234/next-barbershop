export default function Appointment() {
  return (
    <div id="appointment" className="section wb">
      <div className="container-fluid">
        <div className="section-title row text-center">
          <div className="col-md-8 col-md-offset-2">
            <small>HAGAMOS UNA CITA PARA TU VIDA</small>
            <h3>Reservar ahora</h3>
            <hr className="grd1" />
            <p className="lead">
              Agenda una cita para cambiar la forma en la que te ven las
              personas.
            </p>
          </div>
        </div>
        {/* end title */}
        <div className="row">
          <div className="col-md-6">
            <div className="appointment-left">
              <h2>Horario de atención</h2>
              <div className="appointment-time">
                <ul>
                  <li id="monday" value="">
                    <span>Lunes </span>
                    <span>9am-6pm</span>
                  </li>
                  <li>
                    <span>Martes </span>
                    <span>9am-6pm</span>
                  </li>
                  <li>
                    <span>Miercoles </span>
                    <span>9am-6pm</span>
                  </li>
                  <li>
                    <span>Jueves </span>
                    <span>9am-6pm</span>
                  </li>
                  <li>
                    <span>Viernes </span>
                    <span>9am-6pm</span>
                  </li>
                  <li>
                    <span>Sabado </span>
                    <span>10am-4pm</span>
                  </li>
                  <li>
                    <span>Domingo </span>
                    <span>CLOSED</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact_form">
              <form
                id="contactform"
                className="row"
                action="contact.php"
                name="contactform"
                method="post"
              >
                <fieldset className="row-fluid">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <input
                      type="datetime-local"
                      name="date"
                      id="date"
                      className="form-control"
                      placeholder="Selecciona una fecha"
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <textarea
                      className="form-control"
                      name="comments"
                      id="comments"
                      rows={6}
                      placeholder="Deja tus detalles aqui"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <button
                      type="submit"
                      id="submit"
                      className="btn btn-light btn-radius btn-brd grd1 btn-block subt"
                    >
                      Agendar
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
          {/* end col */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </div>
  );
}
