import { Service } from "@/types/services";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateServiceType {
  services: Service[];
}

export const initialStateService: InitialStateServiceType = {
  services: [],
};

const serviceSlice = createSlice({
  name: "services",
  initialState: initialStateService,
  reducers: {
    setServices: (state, action: PayloadAction<Service[]>) => {
      return {
        ...state,
        services: action.payload,
      };
    },
  },
});

export const { setServices } = serviceSlice.actions;
export default serviceSlice.reducer;
