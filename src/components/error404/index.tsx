"use client";

export default function Error404() {
  return (
    <div
      id="contact"
      className="section wb"
      style={{ width: "100%", height: "49vh" }}
    >
      <div className="container-fluid">
        <div className="section-title row text-center">
          <div className="col-md-8 col-md-offset-2">
            <h3>Error 404</h3>
            <hr className="grd1" />
            <p className="lead">
              Algo ha salido mal o estas accediendo a una pagina que no existe
            </p>
            <button
              type="button"
              className="btn btn-warning"
              style={{ backgroundColor: "#bb9d52" }}
              onClick={() => window.location.replace("/")}
            >
              Volver al inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
