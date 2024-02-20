import { configureStore } from "@reduxjs/toolkit";
import mapStyleReducer from "@/redux/features/mapStyleSlice"
import layersDeckReducer from "@/redux/features/layersDeckSlice"
import layersReducer from "@/redux/features/layersSlice"
import arcReducer from "@/redux/features/arcSlice"
import panelReducer from "@/redux/features/panelSlice"
import sidePanelReducer from "@/redux/features/sidePanelSlice"

export const store = configureStore({
  reducer: {
    mapStyleReducer,
    layersDeckReducer,
    layersReducer,
    arcReducer,
    panelReducer,
    sidePanelReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;