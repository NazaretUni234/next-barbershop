import { ShowAlertType, TypeManagement } from "@/types/system";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateSystemType {
  isLoading: boolean;
  showAlert: ShowAlertType;
  managementType: TypeManagement;
}

const initialStateSystem: InitialStateSystemType = {
  isLoading: false,
  showAlert: {
    show: false,
    message: "",
    type: "success",
  },
  managementType: "services",
};

const systemSlice = createSlice({
  name: "system",
  initialState: initialStateSystem,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
    setShowAlert: (state, action: PayloadAction<ShowAlertType>) => {
      return {
        ...state,
        showAlert: action.payload,
      };
    },
    setManagementType: (state, action: PayloadAction<TypeManagement>) => {
      return {
        ...state,
        managementType: action.payload,
      };
    },
  },
});

export const { setIsLoading, setShowAlert, setManagementType } =
  systemSlice.actions;

export default systemSlice.reducer;
