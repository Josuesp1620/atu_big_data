import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type sidePanelSlice = {
    activePanel: any;
    activeSubPanel: any;
};

const initialState: sidePanelSlice = {
    activePanel : null,
    activeSubPanel : null,
};

export const sidePanelSlice = createSlice({
  name: "panel",
  initialState,
  reducers: {
    setActivePanel: (state, action: PayloadAction<any>) => {
      state.activePanel = state.activePanel === action.payload ? null : action.payload;
    },
    setActiveSubPanel: (state, action: PayloadAction<any>) => {
        state.activeSubPanel = state.activeSubPanel === action.payload ? null : action.payload;
    },
  },
});

export const {
    setActivePanel, setActiveSubPanel
} = sidePanelSlice.actions;

export default sidePanelSlice.reducer;