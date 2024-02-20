import { PanelInner } from "@/components/PanelTab";
import {SidePanelMapAnalisisComponent} from "./SidePanelMapAnalisis";
import { useAppSelector } from "@/redux/hooks";
import { useAppDispatch } from "@/redux/hooks";
import { setPanelWidth, setShowPanel } from "@/redux/features/panelSlice";
import { SidePanelMapSupportComponent}  from "./SidePanelMapSupport";

export enum TabOption {
    Tab1 = "Análisis de Viajes",
    Support = "Soporte",
}

const TAB_COMPONENTS = {
    [TabOption.Tab1]: SidePanelMapAnalisisComponent,
    [TabOption.Support]: SidePanelMapSupportComponent,
};

export function PanelInnerMap() {
    const panelWidth = useAppSelector((state) => state.panelReducer.panelWidth)
    const dispatch = useAppDispatch();

    const setPanelWidthDispatch = (e) => {
        dispatch(setPanelWidth(e))
    }

    const setShowPanelDispatch = (e) => {
        dispatch(setShowPanel(e))
    }

    return (
        <PanelInner 
            side={"right"}
            panelWidth={panelWidth} 
            setPanelWidth={setPanelWidthDispatch} 
            setShowPanel={setShowPanelDispatch} 
            tabOrder={[TabOption.Tab1, TabOption.Support]} 
            active={TabOption.Tab1} 
            TAB_COMPONENTS={TAB_COMPONENTS} 
        />
    )
}