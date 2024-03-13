import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ArcState {
  isSourceSelected: boolean;
  source: any;
  target: any;
}

const initialState: ArcState = {
  isSourceSelected: false,
  source: null,
  target: null,
};

export const arcSlice = createSlice({
  name: "arc",
  initialState,
  reducers: {
    setSelectionState: (state, action: PayloadAction<any>) => {
      state.isSourceSelected = action.payload.isSourceSelected;
      state.source = action.payload.source;
      state.target = action.payload.target;
    },
    resetArc: (state) => {
        state.isSourceSelected = false;
        state.source = null;
        state.target = null;
    }
  },
});

export const { resetArc, setSelectionState } = arcSlice.actions;

export default arcSlice.reducer;
