import { configureStore } from "@reduxjs/toolkit";
import errorSlice, { setError } from "../slices/errorSlice";

export type PropsStore = {
  error: string;
};

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    error: errorSlice,
  },
});
