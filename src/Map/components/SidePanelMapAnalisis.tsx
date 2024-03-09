import { PanelDetailsCollapsible } from "@/components/PanelCollapsible";
import { SidePanel } from "@/components/PanelToggle";
import { Button, StyledLabelSpan, inputClass } from "@/components/elements";
import React from "react";
import { PeriodoEstudio } from "./utils/form_periodo_studio";
import { LineasDeseo } from "./utils/form_lineas_deseo";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setActivePanel, setActiveSubPanel } from "@/redux/features/panelSlice";
import { collapsiblePerfilViajero } from "./utils/Perfil_Viajero/perfil_viajero_fields";
import axios from "axios";
import { useMap } from 'react-map-gl/maplibre';
import * as turf from '@turf/turf';
import { setSelectionState } from "@/redux/features/arcSlice";
import { removeAllLayersDeck } from "@/redux/features/layersDeckSlice";


export function SidePanelMapAnalisisComponent({panelWidth}) {

    const layers = useAppSelector((state) => state.layersReducer.layers);
    const selectionState = useAppSelector((state) => state.arcReducer);
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

    const getGeojsonGeoserver = async ({ lngLat } : { lngLat : any }) => {   
        const wfsUrl = `http://200.121.128.47:8080/geoserver/atu_vt/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=atu_vt:${layers.at(-1)?.props.name}&outputFormat=application%2Fjson&CQL_FILTER=INTERSECTS(geom,POINT(${lngLat.lng} ${lngLat.lat}))`;
        const response = await axios.get(wfsUrl);
        const featureCollection = response.data as turf.FeatureCollection;
        const updatedFeatureCollection = featureCollection.features.map(feature => {
        //   var pointOnPolygon = turf.pointOnFeature(feature);
          feature.properties.filter = 'nom_macro'
          feature.properties.centroid = [lngLat.lng, lngLat.lat];
          return feature;
        });
        return updatedFeatureCollection
    }  

    const onClickTest = async () => {
        dispatch(removeAllLayersDeck())
        let datosFiltrados = Object.fromEntries(Object.entries(analytics.perfil_viajero).filter(([_, v]) => v.length > 0));

        const response =  await axios.post('http://37.60.239.85:9991/filter_data',{
            'source_macrozonas' : analytics.lineas_deseo.source_id,
        })

        const response_data = response.data.data.data
        const lngLat = {"lng": response_data.source.lon,"lat": response_data.source.lat}
        const source = await getGeojsonGeoserver({ lngLat })

        const featuresTarget: any[] = [];

        await Promise.all(
            response_data.target.map(async (element: any) => {
                const lngLat = {"lng": element.lon,"lat": element.lat}
                const target: any = await getGeojsonGeoserver({ lngLat });
                featuresTarget.push(target[0]);
            })
        );
        
        dispatch(setSelectionState(({
            source: source[0],
            target: featuresTarget,
            isSourceSelected: false,
        })));    

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
                    }}>Ejecutar Análisis Test</Button>
                    {/* <Button>Tabla</Button> */}
                </div>
            </PanelDetailsCollapsible>
        </div>

    </SidePanel>
  );
}

export default SidePanelMapAnalisisComponent;