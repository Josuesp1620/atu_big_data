import { PanelDetailsCollapsible } from "@/components/PanelCollapsible";
import { SidePanel } from "@/components/PanelToggle";
import { Button, StyledLabelSpan, inputClass } from "@/components/elements";
import React from "react";
import { PeriodoEstudio } from "./utils/form_periodo_studio";
import { LineasDeseo } from "./utils/form_lineas_deseo";
import clsx from "clsx";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setActivePanel, setActiveSubPanel } from "@/redux/features/panelSlice";
import { collapsiblePerfilViajero } from "./utils/Perfil_Viajero/perfil_viajero_fields";
import { removeAllLayersDeck } from "@/redux/features/layersDeckSlice";
import { SymbolIcon } from "@radix-ui/react-icons";
import { setDashboardData, setSelectionState } from "@/redux/features/arcSlice";


export function SidePanelMapAnalisisComponent({panelWidth}) {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const analytics = useAppSelector((state) => state.analyticsReducer);
    const sidePanel = useAppSelector((state) => state.panelReducer);
    const dispatch = useAppDispatch();    
    
    const collapsibleTitles = [
        {
            id: "tit-001",
            title: "Perfil de Viajero",
            headLine: false,
            children:  (
                collapsiblePerfilViajero.map((element) => (
                <div key={element.id} className="divide-y divide-gray-200 dark:divide-gray-900 border-t border-gray-200 dark:border-gray-900 overflow-auto placemark-scrollbar">

                    <PanelDetailsCollapsible
                        bold="bold-2"
                        key={element.title}
                        title={element.title}                
                        state={sidePanel.activeSubPanel === element.title}
                        icon={element.icon}
                        onToggle={() => {
                            dispatch(setActiveSubPanel(element.title))
                        }}
                    >
                        {element.children}
                    </PanelDetailsCollapsible>
                    </div>
                ))
            )
        },
        {
            id: "tit-002",
            headLine: true,
            title: "Seleccionar las Líneas de Deseo",
            children:  (
                <LineasDeseo />
            )
        },
        {
            id: "tit-003",
            headLine: true,
            title: "Seleccionar Periodo de Estudio",
            children: (
               <PeriodoEstudio />
            )
        },
        {
            id: "tit-004",
            headLine: true,
            title: "Agrupación de Líneas de Deseo de Viajes",
            children: (                
                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">T. Reporte:</StyledLabelSpan>
                    <select id="tipo_reporte" className={inputClass({ _size: "xs" })} disabled={true}>
                        <option value="Distrito - Distrito">Distrito - Distrito</option>                      
                    </select>
                </div>
            )
        }
    ];

    const onClickTest = async () => {
        setIsSubmitting(true)
        dispatch(removeAllLayersDeck())
        const filters = {
            ...analytics.perfil_viajero,
            [analytics.lineas_deseo.type_source]: analytics.lineas_deseo.source_id === null ? [] : [analytics.lineas_deseo.source_id],
            [analytics.lineas_deseo.type_target]: analytics.lineas_deseo.target_id === null ? [] : [analytics.lineas_deseo.target_id],
            "type": analytics.lineas_deseo.type,
        };
        try{
            const responseArc =  await axios.post('http://200.121.128.47:3071/filter_data', filters)
            const _responseArc =responseArc.data.data.data
            
            dispatch(setSelectionState(({
                source: _responseArc.source,
                target: _responseArc.target,
                isSourceSelected: false,
            })));

            const responseDashboardData =  await axios.post('http://200.121.128.47:3071/data_dash_board', filters)
            const _responseDashboardData =responseDashboardData.data.data.data
            dispatch(setDashboardData((_responseDashboardData)));
        }catch (e) {
            alert("ERROR AL HACER LA PETICION")
        }finally {
            setIsSubmitting(false)
        }

    }

  

  return (

    <SidePanel side={"right"} panelWidth={panelWidth}>
        
        {collapsibleTitles.map((element) => (
        <div key={element.id} className={clsx( element.headLine ? "divide-y divide-gray-200 dark:divide-gray-900 border-t border-gray-200 dark:border-gray-900 overflow-auto placemark-scrollbar" : "")}>
          <PanelDetailsCollapsible            
            bold="bold-1"
            title={element.title}
            state={sidePanel.activePanel === element.title}
            onToggle={() => {
                dispatch(setActivePanel(element.title))
            }}
          >
            {element.children}
          </PanelDetailsCollapsible>
          </div>
        ))}
        <div key={"tit-005"} className="divide-y divide-gray-200 dark:divide-gray-900 border-t border-gray-200 dark:border-gray-900 overflow-auto placemark-scrollbar">
            <PanelDetailsCollapsible title="Realizar Consulta" state={true} onToggle={() => false} bold="bold-1">
                <div className="flex">
                    <Button style={{ marginRight: '10px' }} onClick={() => {
                        onClickTest()
                    }}>
                        Ejecutar Análisis
                        {isSubmitting && <SymbolIcon
                            className={clsx(
                            "animate-spin transition-opacity",
                            isSubmitting ? "opacity-50" : "opacity-0",
                            false && "absolute top-8 right-2.5 text-white"
                            )}
                        />}
                        
                    </Button>
                    {/* <Button>Tabla</Button> */}
                </div>
            </PanelDetailsCollapsible>
        </div>

    </SidePanel>
  );
}

export default SidePanelMapAnalisisComponent;