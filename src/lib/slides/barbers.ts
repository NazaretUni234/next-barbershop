import { Barber } from "@/types/barbers";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialBarbersType {
  barbers: Barber[];
}

const initialBarbers: InitialBarbersType = {
  barbers: [],
};

const barbersSlice = createSlice({
  name: "barbers",
  initialState: initialBarbers,
  reducers: {
    setBarbers: (state, action: PayloadAction<Barber[]>) => {
      return {
        ...state,
        barbers: action.payload,
      };
    },
  },
});

export const { setBarbers } = barbersSlice.actions;
export default barbersSlice.reducer;
