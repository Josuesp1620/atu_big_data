import React, { useState } from 'react';
import * as E from "@/components/elements";
import { mapLayersStyleGeoserver } from '../constants/map.style.layers';
import { removeAllLayersDeck } from "@/redux/features/layersDeckSlice";
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addLayers, removeLayer } from '@/redux/features/layersSlice';
import {Source, Layer} from 'react-map-gl';

export default function FooterMapComponent() {
  const [checkedStates, setCheckedStates] = useState(mapLayersStyleGeoserver);

  const selectionState = useAppSelector((state) => state.arcReducer)

  const dispatch = useAppDispatch();

  const isAnyCheckboxChecked = () => {
    return Object.values(checkedStates).some(state => state.state);
  };

  const handleCheckboxChange = (name, checked) => {
    const newState = { ...checkedStates };
    newState[name].state = checked;
    setCheckedStates(newState);

    const layerDetails = newState[name];

    if (checked && layerDetails.layer) { 
      const layerNew = 
      <Source  key={layerDetails.id} id={layerDetails.id} type="vector"  scheme="tms" name={layerDetails.layer} tiles={[`http://200.121.128.47:8080/geoserver/gwc/service/tms/1.0.0/atu_vt:${layerDetails.layer}@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf`]}>
        <Layer {...layerDetails.fillStyle} />
        <Layer {...layerDetails.lineStyle} />
        <Layer {...layerDetails.labelLayer}/>
        <Layer {...layerDetails.selecterdLineStyle}  filter={['==',layerDetails.filter,'',]} />
      </Source>;
      dispatch(addLayers(layerNew))
    } else {
      dispatch(removeLayer(layerDetails))
      dispatch(removeAllLayersDeck())
    }
  };

  return (
   <>
    {isAnyCheckboxChecked() && (
      <div className="absolute top-0 right-0 my-16 mx-3 p-6 bg-white shadow-lg border border-gray-200 rounded dialog-footer">
        <p className="text-gray-700 title-dialog">SELECCIONE 2 POLIGONOS:</p>
        <p className="text-gray-700">Punto Origen: <span className="font-medium">{selectionState.source ? selectionState.source.properties[selectionState.source.properties.filter] : "No seleccionado" }</span></p>
        <p className="text-gray-700">Punto Destino: <span className="font-medium">{selectionState.target ? selectionState.target.properties[selectionState.target.properties.filter] : "No seleccionado"}</span></p>
      </div>
    )}

    

    <div className="footer-component">
      <div className="flex items-center justify-center gap-2">
        {Object.entries(checkedStates).map(([name, { state, label }]) => (
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

    {/* <CleanMapControl checkedStates={checkedStates}  setCheckedStates={setCheckedStates}/> */}

    </>
  );
}
