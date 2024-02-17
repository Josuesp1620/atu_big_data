import { PanelDetailsCollapsible } from "@/components/PanelCollapsible";
import { SidePanel } from "@/components/PanelToggle";
import { Button, StyledLabelSpan, inputClass, styledCheckbox } from "@/components/elements";
import React from "react";

export function SidePanelMapComponent({ panelWidth, setPanelWidth }) {
    const [activePanel, setActivePanel] = React.useState(null);
    const [activeSubPanel, setSubActivePanel] = React.useState(null);


    const togglePanel = (title) => {
        setActivePanel(activePanel === title ? null : title);
    };

    const toggleSubPanel = (title) => {
        setSubActivePanel(activeSubPanel === title ? null : title);
    };

    const collapsibleSubTitles = [
        {
            title: "Horario (24 horas):",
            children: (
                <>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">0 a 6</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_source_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">6 a 9</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_target_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">9 a 11</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="source_to_target_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>

                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">11 a 13</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_source_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">13 a 15</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_target_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">15 a 17</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="source_to_target_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>

                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">17 a 19</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_source_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">19 a 21</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_target_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">21 a 0</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="source_to_target_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
                </>
            )
        },
        {
            title: "Edad (años):",
            children: (
                <>
                <div className="py-1 whitespace-nowrap flex justify-between">
                            <StyledLabelSpan size="xs">15 a 19</StyledLabelSpan>
                            <input
                            type="checkbox"
                            name="from_source_checkbox"
                            className={styledCheckbox({ variant: "default" })}
                            onChange={(e) => {

                            }}
                            />
                        </div>
                        <div className="py-1 whitespace-nowrap flex justify-between">
                            <StyledLabelSpan size="xs">20 a 29</StyledLabelSpan>
                            <input
                            type="checkbox"
                            name="from_target_checkbox"
                            className={styledCheckbox({ variant: "default" })}
                            onChange={(e) => {

                            }}
                            />
                        </div>
                        <div className="py-1 whitespace-nowrap flex justify-between">
                            <StyledLabelSpan size="xs">30 a 39</StyledLabelSpan>
                            <input
                            type="checkbox"
                            name="source_to_target_checkbox"
                            className={styledCheckbox({ variant: "default" })}
                            onChange={(e) => {

                            }}
                            />
                        </div>

                        <div className="py-1 whitespace-nowrap flex justify-between">
                            <StyledLabelSpan size="xs">40 a 39</StyledLabelSpan>
                            <input
                            type="checkbox"
                            name="from_source_checkbox"
                            className={styledCheckbox({ variant: "default" })}
                            onChange={(e) => {

                            }}
                            />
                        </div>
                        <div className="py-1 whitespace-nowrap flex justify-between">
                            <StyledLabelSpan size="xs">50 a mas</StyledLabelSpan>
                            <input
                            type="checkbox"
                            name="from_target_checkbox"
                            className={styledCheckbox({ variant: "default" })}
                            onChange={(e) => {

                            }}
                            />
                        </div>
                </>
            )
        },
        {
            title: "Nivel Socio Economico:",
            children: (
                <>
                                        <div className="py-1 whitespace-nowrap flex justify-between">
                            <StyledLabelSpan size="xs">A / B</StyledLabelSpan>
                            <input
                            type="checkbox"
                            name="source_to_target_checkbox"
                            className={styledCheckbox({ variant: "default" })}
                            onChange={(e) => {

                            }}
                            />
                        </div>

                        <div className="py-1 whitespace-nowrap flex justify-between">
                            <StyledLabelSpan size="xs">C</StyledLabelSpan>
                            <input
                            type="checkbox"
                            name="from_source_checkbox"
                            className={styledCheckbox({ variant: "default" })}
                            onChange={(e) => {

                            }}
                            />
                        </div>
                        <div className="py-1 whitespace-nowrap flex justify-between">
                            <StyledLabelSpan size="xs">D / E</StyledLabelSpan>
                            <input
                            type="checkbox"
                            name="from_target_checkbox"
                            className={styledCheckbox({ variant: "default" })}
                            onChange={(e) => {

                            }}
                            />
                        </div>
                </>
            )
        },
        {
            title: "Tipo de dia:",
            children: (
                <>
                                    <div className="py-1 whitespace-nowrap flex justify-between">
                            <StyledLabelSpan size="xs">Lunes</StyledLabelSpan>
                            <input
                            type="checkbox"
                            name="source_to_target_checkbox"
                            className={styledCheckbox({ variant: "default" })}
                            onChange={(e) => {

                            }}
                            />
                        </div>

                        <div className="py-1 whitespace-nowrap flex justify-between">
                            <StyledLabelSpan size="xs">Martes</StyledLabelSpan>
                            <input
                            type="checkbox"
                            name="from_source_checkbox"
                            className={styledCheckbox({ variant: "default" })}
                            onChange={(e) => {

                            }}
                            />
                        </div>
                        <div className="py-1 whitespace-nowrap flex justify-between">
                            <StyledLabelSpan size="xs">Miercoles</StyledLabelSpan>
                            <input
                            type="checkbox"
                            name="from_target_checkbox"
                            className={styledCheckbox({ variant: "default" })}
                            onChange={(e) => {

                            }}
                            />
                        </div><div className="py-1 whitespace-nowrap flex justify-between">
                            <StyledLabelSpan size="xs">Jueves</StyledLabelSpan>
                            <input
                            type="checkbox"
                            name="source_to_target_checkbox"
                            className={styledCheckbox({ variant: "default" })}
                            onChange={(e) => {

                            }}
                            />
                        </div>

                        <div className="py-1 whitespace-nowrap flex justify-between">
                            <StyledLabelSpan size="xs">Viernes</StyledLabelSpan>
                            <input
                            type="checkbox"
                            name="from_source_checkbox"
                            className={styledCheckbox({ variant: "default" })}
                            onChange={(e) => {

                            }}
                            />
                        </div>
                        <div className="py-1 whitespace-nowrap flex justify-between">
                            <StyledLabelSpan size="xs">Sabado</StyledLabelSpan>
                            <input
                            type="checkbox"
                            name="from_target_checkbox"
                            className={styledCheckbox({ variant: "default" })}
                            onChange={(e) => {

                            }}
                            />
                        </div><div className="py-1 whitespace-nowrap flex justify-between">
                            <StyledLabelSpan size="xs">Domingo</StyledLabelSpan>
                            <input
                            type="checkbox"
                            name="source_to_target_checkbox"
                            className={styledCheckbox({ variant: "default" })}
                            onChange={(e) => {

                            }}
                            />
                        </div>
                </>
            )
        },
        {
            title: "Motivo de Viaje:",
            children: (
                <>
                                    <div className="py-1 whitespace-nowrap flex justify-between">
                            <StyledLabelSpan size="xs">A Casa</StyledLabelSpan>
                            <input
                            type="checkbox"
                            name="source_to_target_checkbox"
                            className={styledCheckbox({ variant: "default" })}
                            onChange={(e) => {

                            }}
                            />
                        </div>

                        <div className="py-1 whitespace-nowrap flex justify-between">
                            <StyledLabelSpan size="xs">Al Trabajo</StyledLabelSpan>
                            <input
                            type="checkbox"
                            name="from_source_checkbox"
                            className={styledCheckbox({ variant: "default" })}
                            onChange={(e) => {

                            }}
                            />
                        </div>
                        <div className="py-1 whitespace-nowrap flex justify-between">
                            <StyledLabelSpan size="xs">Otros</StyledLabelSpan>
                            <input
                            type="checkbox"
                            name="from_target_checkbox"
                            className={styledCheckbox({ variant: "default" })}
                            onChange={(e) => {

                            }}
                            />
                        </div>
                </>
            )
        },
        {
            title: "Genero:",
            children: (
                <>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                            <StyledLabelSpan size="xs">Masculino</StyledLabelSpan>
                            <input
                            type="checkbox"
                            name="source_to_target_checkbox"
                            className={styledCheckbox({ variant: "default" })}
                            onChange={(e) => {

                            }}
                            />
                        </div>

                        <div className="py-1 whitespace-nowrap flex justify-between">
                            <StyledLabelSpan size="xs">Femenino</StyledLabelSpan>
                            <input
                            type="checkbox"
                            name="from_source_checkbox"
                            className={styledCheckbox({ variant: "default" })}
                            onChange={(e) => {

                            }}
                            />
                    </div>
                </>
            )
        }
    ];

    const collapsibleTitles = [
        {
            title: "Perfil de Viajero",
            children:  (
                collapsibleSubTitles.map((element) => (
                <div className="divide-y divide-gray-200 dark:divide-gray-900 border-t border-gray-200 dark:border-gray-900 overflow-auto placemark-scrollbar">
                    <PanelDetailsCollapsible
                    key={element.title}
                    title={element.title}
                    state={activeSubPanel === element.title}
                    onToggle={() => toggleSubPanel(element.title)}
                    >
                     {element.children}
                    </PanelDetailsCollapsible>
                    </div>
                ))
            )
        },
        {
            title: "Seleccionar las Líneas de Deseo",
            children:  (
                <>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Desde un Origen</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_source_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Hacia un Destino</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_target_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Orígen a Destino</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="source_to_target_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>

                    <div className="py-2 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Orígen</StyledLabelSpan>
                        <input
                        type="text"
                        name="source_input"
                        className={inputClass({ _size: "xs" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Destino</StyledLabelSpan>
                        <input
                        type="text"
                        name="target_input"
                        className={inputClass({ _size: "xs" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
                </>
            )
        },
        {
            title: "Seleccionar Periodo de Estudio",
            children: (
                <>
                    <div className="py-2 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Año:</StyledLabelSpan>
                        <input
                        type="text"
                        name="source_input"
                        className={inputClass({ _size: "xs" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Mes:</StyledLabelSpan>
                        <input
                        type="text"
                        name="target_input"
                        className={inputClass({ _size: "xs" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
                </>
            )
        },
        {
            title: "Agrupación de Líneas de Deseo de Viajes",
            children: (                
                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">Tipo de Reporte:</StyledLabelSpan>
                    <input
                    disabled
                    value={"Distrito-Distrito"}
                    type="text"
                    name="target_input"
                    className={inputClass({ _size: "xs" })}
                    onChange={(e) => {
                    }}
                    />
                </div>
            )
        }
    ];

  return (
    <SidePanel side={"right"} panelWidth={panelWidth} setPanelWidth={setPanelWidth}>

        {collapsibleTitles.map((element) => (
        <div className="divide-y divide-gray-200 dark:divide-gray-900 border-t border-gray-200 dark:border-gray-900 overflow-auto placemark-scrollbar">
          <PanelDetailsCollapsible
            key={element.title}
            title={element.title}
            state={activePanel === element.title}
            onToggle={() => togglePanel(element.title)}
          >
            {element.children}
          </PanelDetailsCollapsible>
          </div>
        ))}
        <div className="divide-y divide-gray-200 dark:divide-gray-900 border-t border-gray-200 dark:border-gray-900 overflow-auto placemark-scrollbar">
            <PanelDetailsCollapsible title="Realizar Consulta" state={true} onToggle={() => false}>
                <div className="flex">
                    <Button style={{ marginRight: '10px' }}>Ejecutar Análisis</Button>
                    <Button>Tabla</Button>
                </div>
            </PanelDetailsCollapsible>
        </div>

    </SidePanel>
  );
}

export default SidePanelMapComponent;

// export function SidePanelMapComponent({ panelWidth, setPanelWidth } : { panelWidth : any, setPanelWidth : any }) {
//     return (
//         <SidePanel side={"right"} panelWidth={panelWidth} setPanelWidth={setPanelWidth}>



//             <div className="divide-y divide-gray-200 dark:divide-gray-900 border-t border-gray-200 dark:border-gray-900 overflow-auto placemark-scrollbar">
//                 <PanelDetailsCollapsible title="Realizar Consulta" state={true}>
//                     <div className="flex">
//                         <Button style={{ marginRight: '10px' }}>Ejecutar Análisis</Button>
//                         <Button>Tabla</Button>
//                     </div>
//                 </PanelDetailsCollapsible>
//             </div>
//             <p className="divide-y divide-gray-200 dark:divide-gray-900 border-t border-gray-200 dark:border-gray-900 overflow-auto placemark-scrollbar"></p>
//       </SidePanel>
//     );
// }