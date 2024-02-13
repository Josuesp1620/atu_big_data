import { configureStore } from "@reduxjs/toolkit";
import mapStyleReducer from "@/redux/features/mapStyleSlice"
import layersDeckReducer from "@/redux/features/layersDeckSlice"
import layersReducer from "@/redux/features/layersSlice"
import arcReducer from "@/redux/features/arcSlice"

export const store = configureStore({
  reducer: {
    mapStyleReducer,
    layersDeckReducer,
    layersReducer,
    arcReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;