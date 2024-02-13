import React, { useState } from 'react';
import * as E from "@/components/elements";
import {Source, Layer} from 'react-map-gl';
import { mapLayersStyleGeoserver } from '../constants/map.style.layers';

export default function FooterMapComponent({ setLayers, setLayersDeck, source, target }) {
  const [checkedStates, setCheckedStates] = useState(mapLayersStyleGeoserver);

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
      </Source>;
      setLayers((currentLayes) => [...currentLayes, layerNew] )
    } else {
      setLayers((currentLayers) => currentLayers.filter(layer => layer.key !== layerDetails.id));
      setLayersDeck([])
    }
  };

  return (
   <>
  {isAnyCheckboxChecked() && (
    <div className="absolute top-0 right-0 my-16 mx-3 p-6 bg-white shadow-lg border border-gray-200 rounded dialog-footer">
      <p className="text-gray-700 title-dialog">SELECCIONE 2 POLIGONOS:</p>
      <p className="text-gray-700">Punto Origen: <span className="font-medium">{source ? source.properties.nom_macro : "No seleccionado" }</span></p>
      <p className="text-gray-700">Punto Destino: <span className="font-medium">{target ? target.properties.nom_macro : "No seleccionado"}</span></p>
    </div>
  )}

    

    <div className="footer-component">
      <div className="flex items-center justify-center gap-2">
        {Object.entries(checkedStates).map(([name, { state, label, layer }]) => (
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
