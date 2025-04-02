/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("tokenBarber");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const endpointsNextApi = {
  users: {
    register: () => "/api/users/register",
    login: () => "/api/users/login",
    getUser: () => "api/users/getUser",
  },
  barbers: {
    getAll: () => "/api/barbers/getAllBarbers",
    newBarber: () => "/api/barbers/newBarber",
    updateBarber: () => "/api/barbers/updateBarber",
    deleteBarber: (id: string) => `/api/barbers/deleteBarber/${id}`,
  },
  services: {
    getAll: () => "/api/services/getAllServices",
    newService: () => "/api/services/newService",
    updateService: () => "/api/services/updateService",
    deleteService: (id: string) => `/api/services/deleteService/${id}`,
  },
};

const get = async (url: string) => {
  try {
    const res = await instance.get(url);
    return res.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const post = async (url: string, body: any) => {
  try {
    const res = await instance.post(url, body);
    return res.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const patch = async (url: string, body: any) => {
  try {
    const res = await instance.patch(url, body);
    return res.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const put = async (url: string, body: any) => {
  try {
    const res = await instance.put(url, body);
    return res.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const deleteRequest = async (url: string, body: any) => {
  try {
    const res = await instance.delete(url, body);
    return res.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const request: {
  get: (url: string) => Promise<any>;
  post: (url: string, body: any) => Promise<any>;
  patch: (url: string, body: any) => Promise<any>;
  put: (url: string, body: any) => Promise<any>;
  delete: (url: string, body?: any) => Promise<any>;
} = {
  get,
  post,
  patch,
  put,
  delete: deleteRequest,
};

export { endpointsNextApi };

export default request;
