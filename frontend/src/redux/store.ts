import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/Auth.slice";
import { GeneralError } from "../api/type";

export const store = configureStore({
  reducer: {
    authReducer: authSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const defaultError = () => {
  const defaultGeneralError: GeneralError = {
    message: "Nos encontramos con un problema, intenta más tarde",
    status: 404,
  };
  return defaultGeneralError;
};