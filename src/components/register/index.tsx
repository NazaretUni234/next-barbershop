"use client";
import registerUser from "@/controllers/users";
import {
  useNotification,
  useRedirection,
  useTextInput,
} from "@/hooks/globalHooks";
import { Alert, Stack, Typography } from "@mui/material";

import { useMemo, useState } from "react";

export default function Register() {
  const { clearData, data, handleChange } = useTextInput({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    tokenAdmin: "",
  });
  const { handleRedirect } = useRedirection();
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { openNotification } = useNotification();

  const handleClickRegister = async () => {
    const {
      name,
      lastName,
      email,
      phone,
      password,
      confirmPassword,
      tokenAdmin,
    } = data;
    if (password !== confirmPassword) {
      openNotification("Las contraseñas no coinciden", "warning");
      return;
    }
    setLoading(true);
    const newUser = await registerUser({
      name,
      lastName,
      email,
      phone,
      password: password.toString(),
      tokenAdmin: isAdmin ? tokenAdmin : "",
    });
    if (newUser) {
      openNotification("Usuario creado correctamente", "success");
      clearData();
      handleRedirect("/login");
      setLoading(false);
      return;
    }
    setLoading(false);
    openNotification("Error al crear el usuario", "error");
  };

  const disabledButton = useMemo(() => {
    return (
      !data.name.trim() ||
      !data.lastName.trim() ||
      !data.email.trim() ||
      !data.phone.trim() ||
      !data.password.trim() ||
      !data.confirmPassword.trim() ||
      data.password !== data.confirmPassword
    );
  }, [data]);

  const handleIsAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div className="container_login">
      <div>
        <Stack textAlign="center" py={2}>
          <h2 style={{ textAlign: "center" }}>
            Registrate para accerder a la plataforma
          </h2>
        </Stack>
        <div className="contact_form">
          <div id="message" />
          <form id="registerForm" className="row">
            <fieldset className="row-fluid">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <input
                  type="text"
                  name="first_name"
                  id="name"
                  className="form-control"
                  placeholder="Nombre"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <input
                  type="text"
                  name="last_name"
                  id="lastName"
                  className="form-control"
                  placeholder="Apellidos"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Correo electronico"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="form-control"
                  placeholder="Numero de telefono"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Contraseña"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <input
                  type="password"
                  name="password_confirm"
                  id="confirmPassword"
                  className="form-control"
                  placeholder="Confirma tu contraseña"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                />
              </div>
              {isAdmin && (
                <Stack width="100%" px={2}>
                  <input
                    type="password"
                    name="tokenAdmin"
                    id="tokenAdmin"
                    className="form-control"
                    placeholder="Ingresa tu token de administrador"
                    onChange={(e) => handleChange(e.target.id, e.target.value)}
                  />
                </Stack>
              )}

              <div
                className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <button
                  id="buttonRegister"
                  className="btn btn-light btn-radius btn-brd grd1 effect-1"
                  disabled={disabledButton}
                  onClick={
                    disabledButton
                      ? (e) => e.preventDefault()
                      : (e) => {
                          e.preventDefault();
                          handleClickRegister();
                        }
                  }
                >
                  Registrar
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
          <Stack alignItems="center">
            <Typography
              variant="h4"
              textAlign="center"
              color="#bb9d52"
              mt={2}
              sx={{
                textDecoration: "underline",
                cursor: "pointer",
                width: "fit-content",
              }}
              onClick={handleIsAdmin}
            >
              {isAdmin
                ? "¿No eres administrador? Haz click aqui"
                : "¿Eres administrador? Haz click aqui"}
            </Typography>
          </Stack>
        </div>
      </div>
    </div>
  );
}
