import { getAllBarbersController } from "@/controllers/barbers";
import { setBarbers } from "@/lib/slides/barbers";
import { Barber } from "@/types/barbers";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useDataBarbers() {
  const barbers: Barber[] = useSelector((state: any) => state.barbers.barbers);

  const dispatch = useDispatch();

  const getBarbersSetState = useCallback(async () => {
    const barbers = await getAllBarbersController();
    dispatch(setBarbers(barbers));
  }, [dispatch]);

  return {
    barbers,
    getBarbersSetState,
  };
}
