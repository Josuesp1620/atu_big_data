"use client"

import React from "react";
import Map, { NavigationControl, ScaleControl } from 'react-map-gl/maplibre';
import maplibregl from "maplibre-gl";
import type { MapRef } from 'react-map-gl/maplibre';

import "maplibre-gl/dist/maplibre-gl.css";
import DeckGlComponent from "./Deckgl";
import { INITIAL_VIEW_STATE } from "@/Map/constants/map.constants";
import HeaderMapComponent from "./HeaderMap";
import FooterMapComponent from "./FooterMap";
import "../style/Map.css";
import { ArcLayer } from "@deck.gl/layers/typed";
import * as turf from '@turf/turf';
import axios from "axios";
import CleanMapControl from "@/components/control/CleanMapControl";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addLayersDeck, removeAllLayersDeck } from "@/redux/features/layersDeckSlice";
import { setSelectionState } from "@/redux/features/arcSlice";

export default function MapComponent() {
  const mapRef = React.useRef<MapRef>(null);
  const dispatch = useAppDispatch();

  const mapStyle = useAppSelector((state) => state.mapStyleReducer.layer);
  const layers = useAppSelector((state) => state.layersReducer.layers);

  const selectionState = useAppSelector((state) => state.arcReducer)

  async function handleMapClick(e) {
    const lngLat = e.lngLat;
    const lng = lngLat.lng;
    const lat = lngLat.lat;
    const typeName = "atu_vt:macrozonas";
    const wfsUrl = `http://200.121.128.47:8080/geoserver/atu_vt/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=${typeName}&outputFormat=application%2Fjson&CQL_FILTER=INTERSECTS(geom,POINT(${lng} ${lat}))`;
    const response = await axios.get(wfsUrl);
    const featureCollection = response.data as turf.FeatureCollection;

    const updatedFeatureCollection = featureCollection.features.map(feature => {
      var pointOnPolygon = turf.pointOnFeature(feature);
      feature.properties.centroid = pointOnPolygon.geometry.coordinates;
      return feature;

    });

    if (!selectionState.isSourceSelected) {
      dispatch(setSelectionState(({
        source: updatedFeatureCollection[0],
        target: null,
        isSourceSelected: true,
      })));
    } else {
      dispatch(setSelectionState(({
        source: selectionState.source,
        target: updatedFeatureCollection[0],
        isSourceSelected: false,
      })));    
    }
  };

  React.useEffect(() => {    
    if (selectionState.source !== null && selectionState.target !== null ) {
      const dataArc : any = { type: 'FeatureCollection', features: [selectionState.source, selectionState.target]};
      const arcInstance = new ArcLayer({
        id: "arc-layer",
        data: dataArc,
        getWidth: 12,
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
  }, [selectionState]);
  
  const onMapLoad = React.useCallback(() => {
    const attributionControl = document.querySelector('.maplibregl-ctrl-attrib-inner');
      if (attributionControl) {
        attributionControl.innerHTML = '© <a href="#" target="_blank" rel="noopener">GeoSolution</a> | © <a href="http://www.openstreetmap.org/about/" target="_blank">OpenStreetMap</a> contributors';
      }
  }, []);

  return (
    <>
      <Map
        ref={mapRef}
        onClick={handleMapClick}
        mapStyle={mapStyle.style}
        onLoad={onMapLoad}
        initialViewState={INITIAL_VIEW_STATE}
        mapLib={maplibregl}
        style={{ width: '100vw', height: '100vh' }}>
        
        {layers.length !== 0 && layers.map((layer) => layer)}


        <HeaderMapComponent />

        <DeckGlComponent key="deckglComponent" />
        <NavigationControl position="bottom-right"/>
        <ScaleControl />
        <CleanMapControl />
        
        <FooterMapComponent />

      </Map>
    </>
  );
}
