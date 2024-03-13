import React from 'react';
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addLayersDeck, removeAllLayersDeck } from "@/redux/features/layersDeckSlice";
import { resetArc, setSelectionState } from "@/redux/features/arcSlice";
import { ArcLayer } from "@deck.gl/layers/typed";
import { useMap } from 'react-map-gl/maplibre';
import * as turf from '@turf/turf';
import { ScatterplotLayer } from "@deck.gl/layers/typed";


const MapHandler = ({setHoverInfo}) => {
  const {current: mapRef} = useMap();
  const dispatch = useAppDispatch();
  const layers = useAppSelector((state) => state.layersReducer.layers);
  const selectionState = useAppSelector((state) => state.arcReducer);
  const [ctrlPressed, setCtrlPressed] = React.useState(false);
  const ctrlPressedRef = React.useRef(ctrlPressed);

  const getGeojsonGeoserver = async ({ lngLat, type } : { lngLat : any, type: any }) => {
    const map = mapRef.getMap();

    const wfsUrl = `http://200.121.128.47:8080/geoserver/atu_vt/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=atu_vt:${layers.at(-1)?.props.name}&outputFormat=application%2Fjson&CQL_FILTER=INTERSECTS(geom,POINT(${lngLat.lng} ${lngLat.lat}))`;

    const response = await axios.get(wfsUrl);

    const featureCollection = response.data as turf.FeatureCollection;
    
    if (map!.getCanvas().style.cursor === "pointer" || !response.data || !response.data.features || response.data.features.length === 0) return null;

    const updatedFeatureCollection = featureCollection.features.map(feature => {
      feature.properties.type = type;
      feature.properties.centroid = [feature.properties.lon, feature.properties.lat]
      return feature;
    });

    return updatedFeatureCollection
  
  }  

  async function handleMapClick(e) {

    const map = mapRef.getMap();
    const lngLat = e.lngLat;

    const layerId = `${layers.at(-1)?.props.name}-selected-outline`
    const type = !selectionState.isSourceSelected  ? "source" : "target";
    
    const updatedFeatureCollection = await getGeojsonGeoserver({lngLat, type})
    console.log(updatedFeatureCollection)
    if (updatedFeatureCollection === null) return
    if (ctrlPressedRef.current === false &&!selectionState.isSourceSelected) {
      dispatch(setSelectionState(({
        source: updatedFeatureCollection[0],
        target: null,
        isSourceSelected: true,
      })));
      dispatch(removeAllLayersDeck())

      map.setFilter(layerId, [
        "in", 
        "taz", 
        updatedFeatureCollection[0].properties.taz
      ]);

      map.setPaintProperty(layerId, 'line-color', '#94F14B');
      
    } else {         
      dispatch(setSelectionState(({
        source: selectionState.source,
        target: updatedFeatureCollection,
        isSourceSelected: ctrlPressedRef.current,
      })));    
    }
  }

   function handleKeyDown(event) {
    if (event.keyCode === 17) {
      setCtrlPressed(true);
    }
  }

  function handleKeyUp(event) {
    if (event.keyCode === 17) {
      setCtrlPressed(false);
    }
  }

  React.useEffect(() => {
    ctrlPressedRef.current = ctrlPressed;
    if(!ctrlPressedRef.current){
      dispatch(resetArc());
    }
  }, [ctrlPressed]);

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  React.useEffect(() => {
    const map = mapRef.getMap();
    
    if (selectionState.source !== null && selectionState.target !== null ) {
      const map = mapRef.getMap();
      const layerId = `${layers.at(-1)?.props.name}-selected-outline`
      
      const filters: any =  ctrlPressedRef.current ? map.getFilter(layerId) :['in', 'taz', selectionState.source.properties.taz];
      selectionState.target.map((target) => {
        filters.push("taz")
        filters.push(target.properties.taz)
      })
      const layerGet =  map.getLayer(layerId) 
      console.log(layerGet)

      map.setFilter(layerId, filters);
    
      const dataArc : any = { type: 'FeatureCollection', features: [selectionState.source, ...selectionState.target]};

      const arcInstance = new ArcLayer({
        id: "arc-layer",
        data: dataArc,
        getWidth: 2,
        getHeight: 0.5,
        pickable: true,
        onClick: (e) => console.log(e),
        dataTransform: ( f : any ) =>
           f.features.filter(( f : any ) => f && f.properties),
        getSourcePosition: (f) => selectionState.source.properties.centroid,
        getTargetPosition: (f) => f.properties.centroid,
        getSourceColor: (f) => [Math.sqrt(f.inbound), 140, 0],
        getTargetColor: (f) => [255, 140, 0],
        onHover: info => setHoverInfo(info),
        transitions: {
          getSourceColor:1000000000,
          getTargetColor: 1000000000
        }
      });

      const layerCircle = new ScatterplotLayer({
        id: 'airports',
        data: dataArc,
        radiusScale: 20,
        dataTransform: ( f : any ) =>
          f.features.filter(( f : any ) => f && f.properties),
        getPosition: (f) => f.properties.centroid,
        getFillColor: (f) => {
          if(f.properties.type === "source"){
            return [Math.sqrt(f.inbound), 140, 0]
          }
          return [255, 140, 0]
        },
        getRadius: (f) => {
          if(f.properties.type === "source"){
            if(layers.at(-1)?.props.name !== 'macrozonas'){
              return 10
            }
            return 50
          }
          if(layers.at(-1)?.props.name !== 'macrozonas'){
            return 10
          }
          return 20
        },
        pickable: true
      })      
      // dispatch(removeAllLayersDeck())
      dispatch(addLayersDeck([layerCircle, arcInstance]))
    }

    map.on('click', handleMapClick);

    return () => {
      map.off('click', handleMapClick);
    };
  }, [selectionState, layers]);

  return null;
};

export default MapHandler;
