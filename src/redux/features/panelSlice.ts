import { MAP_STYLE } from "@/Map/constants/map.constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const [showPanel, setShowPanel] = React.useState(false);
// const [panelWidth, setPanelWidth] = React.useState(350);
// const [screenWidth, setScreenWidth] = React.useState<string | number>("100vw");
// const [applyTransition, setApplyTransition] = React.useState(false);

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