import request, { endpointsNextApi } from "@/services/axios";
import { GetUser, NewUser } from "../../types/users";

export default async function registerUser(user: NewUser) {
  const url = endpointsNextApi.users.register();
  return await request.post(url, user);
}

export async function loginUser(
  email: string,
  password: string
): Promise<{ token: string; user: GetUser }> {
  const url = endpointsNextApi.users.login();
  return await request.post(url, { email, password });
}

export async function getUser() {
  const url = endpointsNextApi.users.getUser();
  const user = await request.get(url);
  if (!user) {
    return false;
  }
  return user;
}
