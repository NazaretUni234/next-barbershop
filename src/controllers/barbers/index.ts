import request, { endpointsNextApi } from "@/services/axios";
import { Barber, NewBarber, UpdateBarber } from "@/types/barbers";

export async function getAllBarbersController(): Promise<Barber[]> {
  const url = endpointsNextApi.barbers.getAll();
  return request.get(url);
}

export async function newBarberController(newBarber: NewBarber) {
  const url = endpointsNextApi.barbers.newBarber();
  return request.post(url, newBarber);
}

export async function updateBarberController(updateBarber: UpdateBarber) {
  const url = endpointsNextApi.barbers.updateBarber();
  return request.patch(url, updateBarber);
}

export async function deleteBarberController(id: string) {
  const url = endpointsNextApi.barbers.deleteBarber(id);
  return request.delete(url);
}
