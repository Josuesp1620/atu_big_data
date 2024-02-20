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
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addLayersDeck, removeAllLayersDeck } from "@/redux/features/layersDeckSlice";
import { setSelectionState } from "@/redux/features/arcSlice";
import { PanelInnerMap } from "./PanelTabMap";
import { setScreenWidth } from "@/redux/features/panelSlice";
import { ButtonPanelToggleMap } from "./ButtonPanelToggleMap";

export default function MapComponent() {

  const mapRef = React.useRef<MapRef>(null);

  const dispatch = useAppDispatch();

  const mapStyle = useAppSelector((state) => state.mapStyleReducer.layer);
  const layers = useAppSelector((state) => state.layersReducer.layers);

  const selectionState = useAppSelector((state) => state.arcReducer)
  
  const panelReducer = useAppSelector((state) => state.panelReducer)

  async function handleMapClick(e) {
    const map = mapRef.current.getMap();
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
  };

  function click(e){
    console.log(e)
  }

  React.useEffect(() => {
    dispatch(setScreenWidth(window.innerWidth))

    if (selectionState.source !== null && selectionState.target !== null ) {
      const map = mapRef.current.getMap();
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
        onClick: click,
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
    mapRef.current.resize();
    if (attributionControl) {
      attributionControl.innerHTML = '© <a href="#" target="_blank" rel="noopener">GeoSolution</a> | © <a href="http://www.openstreetmap.org/about/" target="_blank">OpenStreetMap</a> contributors';
    }    
  }, []);
  
  return (
    <>
      {panelReducer.showPanel && <PanelInnerMap key={"panel-inner-map"}/>}

      <Map
        ref={mapRef}
        onClick={handleMapClick}
        mapStyle={mapStyle.style}
        onLoad={onMapLoad}
        initialViewState={INITIAL_VIEW_STATE}
        mapLib={maplibregl} 
        style={{ width: panelReducer.showPanel ? `${parseInt(panelReducer.screenWidth.toString()) - panelReducer.panelWidth}px` : "100vw", height: "100vh", transition: panelReducer.applyTransition ? "width 0.5s ease" : ""
      }}>
        
        {layers.length !== 0 && layers.map((layer) => layer)}


        <HeaderMapComponent />

        <DeckGlComponent key="deckglComponent" />
        <NavigationControl position="bottom-right"/>
        <ScaleControl />
        <FooterMapComponent />
        <ButtonPanelToggleMap />
      </Map>
    </>
  );
}
