import { configureStore } from "@reduxjs/toolkit";
import mapStyleReducer from "@/redux/features/mapStyleSlice"

export const store = configureStore({
  reducer: {
    mapStyleReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;