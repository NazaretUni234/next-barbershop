import request, { endpointsNextApi } from "@/services/axios";
import { NewService, Service, UpdateService } from "@/types/services";

export async function getAllServicesController(): Promise<Service[]> {
  const url = endpointsNextApi.services.getAll();
  return request.get(url);
}

export async function newServiceController(newService: NewService) {
  const url = endpointsNextApi.services.newService();
  return await request.post(url, newService);
}

export async function updateServiceController(updateService: UpdateService) {
  const url = endpointsNextApi.services.updateService();
  return await request.patch(url, updateService);
}

export async function deleteServiceController(id: string) {
  const url = endpointsNextApi.services.deleteService(id);
  return await request.delete(url);
}
