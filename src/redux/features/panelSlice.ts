import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type panelSlice = {
    showPanel: boolean;
    panelWidth: number;
    screenWidth: string | number;
    applyTransition: boolean;
    activePanel: any;
    activeSubPanel: any;
};

const initialState: panelSlice = {
    showPanel : false,
    panelWidth : 350,
    screenWidth : "100vw",
    applyTransition : false,
    activePanel : null,
    activeSubPanel : null,
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
    setActivePanel: (state, action: PayloadAction<any>) => {
      state.activePanel = state.activePanel === action.payload ? null : action.payload;
    },
    setActiveSubPanel: (state, action: PayloadAction<any>) => {
        state.activeSubPanel = state.activeSubPanel === action.payload ? null : action.payload;
    },
  },
});

export const {
    setShowPanel, setPanelWidth, setScreenWidth, setApplyTransition, setActivePanel, setActiveSubPanel
} = panelSlice.actions;

export default panelSlice.reducer;