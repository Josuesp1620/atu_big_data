import React from 'react';
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addLayersDeck, removeAllLayersDeck } from "@/redux/features/layersDeckSlice";
import { setSelectionState } from "@/redux/features/arcSlice";
import { ArcLayer } from "@deck.gl/layers/typed";
import { useMap } from 'react-map-gl/maplibre';
import * as turf from '@turf/turf';
import { fetchFeatures } from './mapHelpers';

const MapHandler = () => {
  const {current: mapRef} = useMap();
  const dispatch = useAppDispatch();
  const layers = useAppSelector((state) => state.layersReducer.layers);
  const selectionState = useAppSelector((state) => state.arcReducer);

  async function handleMapClick(e) {

    const map = mapRef.getMap();
    const layerId = `${layers.at(-1)?.props.name}-selected-outline`


    const lngLat = e.lngLat;
    const response : any = fetchFeatures(layers, lngLat)

    const featureCollection = response.data as turf.FeatureCollection;
    
    if (map!.getCanvas().style.cursor === "pointer" || !response.data || !response.data.features || response.data.features.length === 0) return;

    const updatedFeatureCollection = featureCollection.features.map(feature => {
      var pointOnPolygon = turf.pointOnFeature(feature);
      feature.properties.filter = map.getFilter(layerId)[1]
      feature.properties.centroid = pointOnPolygon.geometry.coordinates;
      return feature;
    });

    if (!selectionState.isSourceSelected) {
      dispatch(setSelectionState(({
        source: updatedFeatureCollection[0],
        target: null,
        isSourceSelected: true,
      })));
      dispatch(removeAllLayersDeck())

      map.setFilter(layerId, [
        "in", 
        updatedFeatureCollection[0].properties.filter, 
        updatedFeatureCollection[0].properties[updatedFeatureCollection[0].properties.filter].toString()
      ]);
      map.setPaintProperty(layerId, 'line-color', '#94F14B');
      
    } else {         
      dispatch(setSelectionState(({
        source: selectionState.source,
        target: updatedFeatureCollection[0],
        isSourceSelected: false,
      })));    
    }
  }

  React.useEffect(() => {
    const map = mapRef.getMap();
    if (selectionState.source !== null && selectionState.target !== null ) {
      const map = mapRef.getMap();
      const layerId = `${layers.at(-1)?.props.name}-selected-outline`

      map.setFilter(layerId, [
        'in', 
        selectionState.source.properties.filter, selectionState.source.properties[selectionState.source.properties.filter].toString(),
        selectionState.source.properties.filter, selectionState.target.properties[selectionState.source.properties.filter].toString()
      ]);

      map.setPaintProperty(layerId, 'line-color', '#94F14B');

      const dataArc : any = { type: 'FeatureCollection', features: [selectionState.source, selectionState.target]};
      const arcInstance = new ArcLayer({
        id: "arc-layer",
        data: dataArc,
        getWidth: 12,
        pickable: true,
        onClick: (e) => console.log(e),
        dataTransform: ( d : any ) =>
           d.features.filter(( f : any ) => f && f.properties),
        getSourcePosition: () => selectionState.source.properties.centroid,
        getTargetPosition: (f) => f.properties.centroid,
        getSourceColor: d => [Math.sqrt(d.inbound), 140, 0],
        getTargetColor: d => [Math.sqrt(d.outbound), 140, 0],
      });
      
      dispatch(removeAllLayersDeck())
      dispatch(addLayersDeck([arcInstance]))
    }

    map.on('click', handleMapClick);

    return () => {
      map.off('click', handleMapClick);
    };
  }, [selectionState, layers, mapRef, dispatch]);

  return null;
};

export default MapHandler;
