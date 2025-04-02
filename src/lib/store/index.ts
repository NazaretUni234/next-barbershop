import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slides/users";
import serviceSlice from "../slides/services";
import systemSlice from "../slides/system";
import barbersSlice from "../slides/barbers";

export const storeRedux = () => {
  return configureStore({
    reducer: {
      user: userSlice,
      system: systemSlice,
      services: serviceSlice,
      barbers: barbersSlice,
    },
  });
};

export type RootStore = ReturnType<typeof storeRedux>;
