import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LayersState {
  layers: any;
}

const initialState: LayersState = {
  layers: [],
};

export const layersSlice = createSlice({
  name: "layers",
  initialState,
  reducers: {
    addLayers: (state, action: PayloadAction<any>) => {
      state.layers = [...state.layers, action.payload];
    },
    removeLayer: (state, action: PayloadAction<any>) => {

      state.layers = state.layers.filter(layer => layer.props.id !== action.payload.id);
    },
    removeAllLayers: (state) => {
      state.layers = [];
    }
  },
});

export const { addLayers, removeLayer, removeAllLayers } = layersSlice.actions;

export default layersSlice.reducer;
