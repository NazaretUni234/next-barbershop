"use client";
import ItemService from "./itemService";
import { Stack } from "@mui/material";
import Link from "next/link";
import { useDataServices } from "@/hooks/services";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setManagementType } from "@/lib/slides/system";
import { GetUser } from "@/types/users";

export default function Services() {
  const { services, getAllServices } = useDataServices();
  const user: GetUser = useSelector((state: any) => state.user);
  useEffect(() => {
    getAllServices()
      .then(() => {})
      .catch((err) => {
        console.error("Error fetching services:", err);
      });
  }, [getAllServices]);
  const dispatch = useDispatch();

  const handleClickManagement = () => {
    dispatch(setManagementType("services"));
  };

  return (
    <div id="services" className="section lb">
      <div className="container-fluid">
        <div className="section-title row text-center">
          <div className="col-md-8 col-md-offset-2">
            <small>BIENVENIDOS A NUESTRA BARBERÍA</small>
            <h3>NUESTROS SERVICIOS</h3>
            <hr className="grd1" />
            <p className="lead">Aquí puedes consultar nuestros servicios</p>
          </div>
        </div>
        {/* end title */}
        <div className="conteiner_input_search">
          <div className="search-container">
            <input type="text" placeholder="Search..." />
            <button type="button">
              <i className="fa fa-search" />
            </button>
          </div>
        </div>
        <div className="row">
          <Stack spacing={2} direction="row" flexWrap="wrap" useFlexGap p={2}>
            {services.map((service) => (
              <ItemService key={service._id} service={service} />
            ))}
          </Stack>
        </div>
        <hr className="invis4" />
        <Stack spacing={1}>
          {user.role === "admin" && (
            <div className="text-center">
              <Link
                onClick={handleClickManagement}
                href="/elementManagement"
                data-scroll=""
                className="btn btn-light btn-radius btn-brd grd1 effect-1"
              >
                Administrar Servicios
              </Link>
            </div>
          )}
          <div className="text-center">
            <Link
              href="/appointment"
              data-scroll=""
              className="btn btn-light btn-radius btn-brd grd1 effect-1"
            >
              AGENDA AQUI
            </Link>
          </div>
        </Stack>
      </div>
      {/* end container */}
    </div>
  );
}
