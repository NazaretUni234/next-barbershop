"use client";
import { useEffect } from "react";
import ItemBarber from "./itemBarber";
import { useDataBarbers } from "@/hooks/barbers";
import { useDispatch, useSelector } from "react-redux";
import { setManagementType } from "@/lib/slides/system";
import Link from "next/link";
import { GetUser } from "@/types/users";

export default function OurBarbers() {
  const { barbers, getBarbersSetState } = useDataBarbers();

  const user: GetUser = useSelector((state: any) => state.user);
  useEffect(() => {
    getBarbersSetState()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }, [getBarbersSetState]);
  const dispatch = useDispatch();

  const handleClickManagement = () => {
    dispatch(setManagementType("barbers"));
  };

  return (
    <div id="barbers" className="section lb">
      <div className="container-fluid">
        <div className="section-title row text-center">
          <div className="col-md-8 col-md-offset-2">
            <small>CONOZCA A NUESTRO EQUIPO</small>
            <h3>Nuestros Barberos</h3>
            <hr className="grd1" />
            <p className="lead">El mejor talento en un solo lugar</p>
          </div>
        </div>
        {/* end title */}
        <div className="row dev-list text-center">
          {barbers.map((barber) => (
            <ItemBarber key={barber._id} barber={barber} />
          ))}
        </div>
        {/* end row */}
      </div>
      {user.role === "admin" && (
        <div className="text-center">
          <Link
            onClick={handleClickManagement}
            href="/elementManagement"
            data-scroll=""
            className="btn btn-light btn-radius btn-brd grd1 effect-1"
          >
            Administrar Barberos
          </Link>
        </div>
      )}
    </div>
  );
}
