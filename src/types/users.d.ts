export type User = {
  _id: string;
  name: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  role: "admin" | "user";
};

export type NewUser = Omit<User, "_id" | "role"> & {
  tokenAdmin: string;
};

export type GetUser = Omit<User, "password">;
