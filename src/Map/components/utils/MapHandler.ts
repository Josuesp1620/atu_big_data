import React from 'react';
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addLayersDeck, removeAllLayersDeck } from "@/redux/features/layersDeckSlice";
import { setSelectionState } from "@/redux/features/arcSlice";
import { ArcLayer, IconLayer } from "@deck.gl/layers/typed";
import { useMap } from 'react-map-gl/maplibre';
import * as turf from '@turf/turf';

const MapHandler = () => {
  const {current: mapRef} = useMap();
  const dispatch = useAppDispatch();
  const layers = useAppSelector((state) => state.layersReducer.layers);
  const selectionState = useAppSelector((state) => state.arcReducer);

  async function handleMapClick(e) {

    const map = mapRef.getMap();
    const layerId = `${layers.at(-1)?.props.name}-selected-outline`

    
    const lngLat = e.lngLat;

    const wfsUrl = `http://200.121.128.47:8080/geoserver/atu_vt/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=atu_vt:${layers.at(-1)?.props.name}&outputFormat=application%2Fjson&CQL_FILTER=INTERSECTS(geom,POINT(${lngLat.lng} ${lngLat.lat}))`;
    const response = await axios.get(wfsUrl);

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
  const ICON_MAPPING = {
    marker: {x: 0, y: 0, width: 128, height: 128, mask: true}
  };
  
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
      console.log(dataArc)
      const iconLayer = new IconLayer({
        id: 'icon-layer',
        data: dataArc,
        pickable: true,
        iconAtlas: 'http://37.60.239.85:3002/marker_arrow.png',
        iconMapping: ICON_MAPPING,
        getIcon: f => 'marker',
        dataTransform: ( d : any ) =>
           d.features.filter(( f : any ) => f && f.properties && f.id != selectionState.source.id),
        sizeScale: 15,
        getPosition: f => f.properties.centroid,
        getSize: f => 5,
        getColor: d => [Math.sqrt(d.inbound), 140, 0]
      });

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
      dispatch(addLayersDeck([iconLayer, arcInstance]))
    }

    map.on('click', handleMapClick);

    return () => {
      map.off('click', handleMapClick);
    };
  }, [selectionState, layers]);

  return null;
};

export default MapHandler;
