export type Barber = {
  _id: string;
  name: string;
  rol: string;
  image: string;
  description: string;
};

export type NewBarber = Omit<Barber, "_id">;

export type UpdateBarber = Partial<Barber> & Required<{ _id: string }>;
