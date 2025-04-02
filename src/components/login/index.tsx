"use client";
import { loginUser } from "@/controllers/users";
import { useNotification, useTextInput } from "@/hooks/globalHooks";
import { setUser } from "@/lib/slides/users";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useRedirection } from "@/hooks/globalHooks";

export default function Login() {
  const { data, handleChange, clearData } = useTextInput({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { openNotification } = useNotification();
  const { email, password } = data;
  const { handleRedirect } = useRedirection();

  const disableButton = useMemo(() => {
    return !email.trim() || !password.trim();
  }, [email, password]);

  const dispatch = useDispatch();

  const handleClick = async () => {
    if (!disableButton) {
      setLoading(true);
      const userLogin = await loginUser(email, password);
      const { token, user } = userLogin;
      console.log("userLogin", userLogin);
      if (user && token) {
        openNotification("Acceso concedido", "success");
        dispatch(setUser(user));
        localStorage.setItem("tokenBarber", token);
        clearData();
        handleRedirect("/home");
      } else {
        openNotification("Error al iniciar sesión", "error");
      }
      setLoading(false);
    } else {
      openNotification("Por favor completa todos los campos", "warning");
    }
  };

  return (
    <div className="container_login">
      <div>
        <h2 className="register_title">
          Inicia sesión para accerder a la plataforma
        </h2>
        <div className="contact_form">
          <form id="loginForm" className="row">
            <fieldset className="row-fluid">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  className="form-control"
                  placeholder="Correo electronico"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  className="form-control"
                  placeholder="Contraseña"
                />
              </div>
              <div
                className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <button
                  className="btn btn-light btn-radius btn-brd grd1 effect-1"
                  disabled={disableButton}
                  onClick={
                    disableButton
                      ? (e) => e.preventDefault()
                      : (e) => {
                          e.preventDefault();
                          handleClick();
                        }
                  }
                >
                  Inicia sesión
                </button>
                {loading && (
                  <div
                    id="loadingOperation"
                    className="spinnerLoading"
                    style={{ display: "none" }}
                  >
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                )}
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
