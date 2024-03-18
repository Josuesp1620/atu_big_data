import React from 'react';
import * as E from "@/components/elements";
import { removeAllLayersDeck } from "@/redux/features/layersDeckSlice";
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addLayers, removeAllLayers } from '@/redux/features/layersSlice';
import { clsx } from 'clsx';
import { setCheckedStates } from '@/redux/features/layersGeoserver';
import { resetArc } from '@/redux/features/arcSlice';
import ChartsContainer from '@/components/dashboard/ChartsContainer';
import { useMap } from 'react-map-gl/maplibre';

export default function FooterMapComponent() {
  const { current: map } = useMap();


  const arcReducer = useAppSelector((state) => state.arcReducer);

  const panelReducer = useAppSelector((state) => state.panelReducer);

  const layersGeoserver = useAppSelector((state) => state.layersGeoserverReducer);

  const layers = useAppSelector((state) => state.layersReducer.layers);

  const dispatch = useAppDispatch();

  const isAnyCheckboxChecked = () => {
    return Object.values(layersGeoserver).some((state : any) => state.state);
  };

  const handleCheckboxChange = (name, checked) => {
    dispatch(setCheckedStates({name, checked}))
    const layerDetails = layersGeoserver[name];

    if (checked && layerDetails.layer) {       
      dispatch(addLayers([layerDetails.labelLayer, layerDetails.outLineLayer, layerDetails.selectedOutLineLayer, layerDetails.fillLayer]))
    } else {
      layers.length !== 0 && layers.map((layer) => {
        map.getMap().removeLayer(layer.id);
      })
      layers.length !== 0 && layers.map((layer) => {
        map.getMap().removeSource(layer.id);
      })
      dispatch(removeAllLayers())
      dispatch(resetArc())
      dispatch(removeAllLayersDeck())
    }
  };
  
  return (
   <>
    {/* TODO */}
    {/* {isAnyCheckboxChecked() && (
      <div className="absolute top-0 right-0 my-16 mx-3 p-6 bg-white shadow-lg border border-gray-200 rounded dialog-footer">
        <p className="text-gray-700 title-dialog">SELECCIONE 2 POLIGONOS:</p>
        <p className="text-gray-700">Punto Origen: <span className="font-medium">{selectionState.source ? selectionState.source.properties[selectionState.source.properties.filter] : "No seleccionado" }</span></p>
        <p className="text-gray-700">Punto Destino: <span className="font-medium">{selectionState.target ? selectionState.target.properties[selectionState.target.properties.filter] : "No seleccionado"}</span></p>
      </div>
    )} */}

    {isAnyCheckboxChecked() && (
      <div className="absolute top-0 right-0 my-16 mx-3 p-6 bg-white shadow-lg border border-gray-200 rounded dialog-footer">
        <p className="text-gray-700 title-dialog">SELECCIONE 2 POLIGONOS:</p>
        <p className="text-gray-700">Punto Origen:</p>
        <p className="text-gray-700">Punto Destino:</p>
      </div>
    )}

  {arcReducer.dashboardData !== null && (
     <ChartsContainer dataAPI={arcReducer.dashboardData}></ChartsContainer>
  )}
    

    <div className={clsx('footer-component',{ 'move-margin-right': parseInt(panelReducer.screenWidth.toString()) < 1370 })}>
      <div className="flex items-center justify-center gap-2">
        {Object.entries(layersGeoserver).map(([name, { state, label }]) => (
          <E.Button key={name} size="md" variant="custom">
            <label>
              <input
                type="checkbox"
                id={name}
                name={name}
                checked={state}
                onChange={(e) => handleCheckboxChange(name, e.target.checked)}
                style={{ marginRight: "8px" }}
              />
              {label}
            </label>
          </E.Button>
        ))}
      </div>
    </div>
    
    </>
  );
}
