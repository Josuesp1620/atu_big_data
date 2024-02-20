import { PanelInner } from "@/components/PanelTab";
import SidePanelMapComponent from "./SidePanelMap";

export enum TabOption {
    Tab1 = "Análisis de Viajes",
    Support = "Soporte",
}

const TAB_COMPONENTS = {
    [TabOption.Tab1]: SidePanelMapComponent,
    [TabOption.Support]: () => <div className="px-3">Soporte</div>,
  };

export function PanelInnerMap({panelWidth, setPanelWidth, setShowPanel}) {
    return (
        <PanelInner 
            side={"right"} 
            panelWidth={panelWidth} 
            setPanelWidth={setPanelWidth} 
            setShowPanel={setShowPanel} 
            tabOrder={[TabOption.Tab1, TabOption.Support]} 
            active={TabOption.Tab1} 
            TAB_COMPONENTS={TAB_COMPONENTS} 
        />
    )
}