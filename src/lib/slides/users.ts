import { GetUser } from "@/types/users";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialStateUser: GetUser = {
  _id: "",
  name: "",
  lastName: "",
  phone: "",
  email: "",
  role: "user",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialStateUser,
  reducers: {
    setUser: (state, action: PayloadAction<GetUser>) => {
      return action.payload;
    },
    updateUser: (state, action: PayloadAction<Partial<GetUser>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
