import { getAllServicesController } from "@/controllers/services";
import { setServices } from "@/lib/slides/services";
import { Service } from "@/types/services";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useDataServices() {
  const services: Service[] = useSelector(
    (state: any) => state.services.services
  );
  const dispatch = useDispatch();
  const setServicesInStore = useCallback(
    (services: Service[]) => {
      dispatch(setServices(services));
    },
    [dispatch]
  );

  const getAllServices = useCallback(async () => {
    const services = await getAllServicesController();
    setServicesInStore(services);
  }, [setServicesInStore]);

  return {
    services,
    setServicesInStore,
    getAllServices,
  };
}
