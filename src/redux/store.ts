import { configureStore } from "@reduxjs/toolkit";
import mapStyleReducer from "@/redux/features/mapStyleSlice"
import layersDeckReducer from "@/redux/features/layersDeckSlice"
import layersReducer from "@/redux/features/layersSlice"


export const store = configureStore({
  reducer: {
    mapStyleReducer,
    layersDeckReducer,
    layersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;