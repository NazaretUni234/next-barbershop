"use client";
import { Stack } from "@mui/material";
import ModalCreateElementModal from "./modalCreateElement";
import ItemList from "./list";
import { useDataServices } from "@/hooks/services";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { TypeManagement } from "@/types/system";
import { useDataBarbers } from "@/hooks/barbers";

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function CreateElement() {
  const typeManagement: TypeManagement = useSelector(
    (state: any) => state.system.managementType
  );
  const { services, getAllServices } = useDataServices();
  const { barbers, getBarbersSetState } = useDataBarbers();
  useEffect(() => {
    if (typeManagement === "services") {
      getAllServices()
        .then(() => {})
        .catch((err) => {
          console.error("Error fetching services:", err);
        });
      return;
    }
    if (typeManagement === "barbers") {
      getBarbersSetState()
        .then(() => {})
        .catch((err) => console.error("Error fetching barbers:", err));
    }
  }, [getAllServices, services.length, getBarbersSetState, typeManagement]);
  return (
    <Stack width="100%" alignItems="center" py={5}>
      <ModalCreateElementModal typeManagement={typeManagement} />
      <ItemList items={typeManagement === "services" ? services : barbers} />
    </Stack>
  );
}
