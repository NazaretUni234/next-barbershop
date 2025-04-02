export default function Contact() {
  return (
    <div id="contact" className="section wb">
      <div className="container-fluid">
        <div className="section-title row text-center">
          <div className="col-md-8 col-md-offset-2">
            <h3>Contactanos</h3>
            <hr className="grd1" />
            <p className="lead">
              Puedes contactarnos para resolver cualquier duda que tengas sobre
              nuestro servicio.
            </p>
          </div>
        </div>
        {/* end title */}
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="contact_form">
              <div id="message" />
              <form id="contactform" className="row">
                <fieldset className="row-fluid">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <textarea
                      className="form-control"
                      name="comments"
                      id="comments"
                      rows={6}
                      placeholder="Escribe tus quejas o sugerencias."
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <button
                      type="submit"
                      id="submit"
                      className="btn btn-light btn-radius btn-brd grd1 effect-1"
                    >
                      Enviar
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
