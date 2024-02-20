import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type panelSlice = {
    showPanel: boolean;
    panelWidth: number;
    screenWidth: string | number;
    applyTransition: boolean;
};

const initialState: panelSlice = {
    showPanel : false,
    panelWidth : 350,
    screenWidth : "100vw",
    applyTransition : false,
};

export const panelSlice = createSlice({
  name: "panel",
  initialState,
  reducers: {
    setShowPanel: (state, action: PayloadAction<any>) => {
      state.showPanel = action.payload;
    },
    setPanelWidth: (state, action: PayloadAction<any>) => {
        state.panelWidth = action.payload;
    },
    setScreenWidth: (state, action: PayloadAction<any>) => {
        state.screenWidth = action.payload;
    },
    setApplyTransition: (state, action: PayloadAction<any>) => {
        state.applyTransition = action.payload;
    },
  },
});

export const {
    setShowPanel, setPanelWidth, setScreenWidth, setApplyTransition
} = panelSlice.actions;

export default panelSlice.reducer;