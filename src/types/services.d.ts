export type Service = {
  _id: string;
  title: string;
  description: string;
  image: string;
};

export type NewService = Omit<Service, "_id">;

export type UpdateService = Partial<NewService> & Required<{ _id: string }>;
