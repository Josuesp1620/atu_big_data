import React from 'react';
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addLayersDeck, removeAllLayersDeck } from "@/redux/features/layersDeckSlice";
import { setSelectionState } from "@/redux/features/arcSlice";
import { ArcLayer, IconLayer } from "@deck.gl/layers/typed";
import { useMap } from 'react-map-gl/maplibre';
import * as turf from '@turf/turf';
import { ScatterplotLayer } from "@deck.gl/layers/typed";


const MapHandler = () => {
  const {current: mapRef} = useMap();
  const dispatch = useAppDispatch();
  const layers = useAppSelector((state) => state.layersReducer.layers);
  const selectionState = useAppSelector((state) => state.arcReducer);

  const getGeojsonGeoserver = async ({ lngLat, layerId } : { lngLat : any, layerId : any }) => {
    const map = mapRef.getMap();

    const wfsUrl = `http://200.121.128.47:8080/geoserver/atu_vt/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=atu_vt:${layers.at(-1)?.props.name}&outputFormat=application%2Fjson&CQL_FILTER=INTERSECTS(geom,POINT(${lngLat.lng} ${lngLat.lat}))`;
    const response = await axios.get(wfsUrl);

    const featureCollection = response.data as turf.FeatureCollection;
    
    if (map!.getCanvas().style.cursor === "pointer" || !response.data || !response.data.features || response.data.features.length === 0) return null;
    console.log(map.getFilter(layerId)[1])
    const updatedFeatureCollection = featureCollection.features.map(feature => {
      var pointOnPolygon = turf.pointOnFeature(feature);
      feature.properties.filter = map.getFilter(layerId)[1]
      feature.properties.centroid = pointOnPolygon.geometry.coordinates;
      return feature;
    });

    return updatedFeatureCollection
  
  }  

  async function handleMapClick(e) {

    const map = mapRef.getMap();
    const lngLat = e.lngLat;
    console.log(lngLat)
    const layerId = `${layers.at(-1)?.props.name}-selected-outline`

    const updatedFeatureCollection = await getGeojsonGeoserver({lngLat, layerId})


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

      // map.setFilter(layerId, [
      //   'in', 
      //   selectionState.source.properties.filter, selectionState.source.properties[selectionState.source.properties.filter].toString(),
      //   selectionState.source.properties.filter, selectionState.target.properties[selectionState.source.properties.filter].toString()
      // ]);
      

      map.setPaintProperty(layerId, 'line-color', '#94F14B');

      const dataArc : any = { type: 'FeatureCollection', features: [selectionState.source, ...selectionState.target]};

      const arcInstance = new ArcLayer({
        id: "arc-layer",
        data: dataArc,
        getWidth: 2,
        getHeight: 0.5,
        pickable: true,
        onClick: (e) => console.log(e),
        dataTransform: ( d : any ) =>
           d.features.filter(( f : any ) => f && f.properties),
        getSourcePosition: () => selectionState.source.properties.centroid,
        getTargetPosition: (f) => {
          // if(f.properties.centroid === selectionState.source.properties.centroid){
          //   return [f.properties.macro_x, f.properties.macro_y]
          // }
          return f.properties.centroid
        },
        getSourceColor: d => [Math.sqrt(d.inbound), 140, 0],
        getTargetColor: d => [255, 140, 0],
        transitions: {
          getSourceColor:1000000000,
          getTargetColor: 1000000000
        }
      });

      const layerCircle = new ScatterplotLayer({
        id: 'airports',
        data: dataArc,
        radiusScale: 20,
        dataTransform: ( d : any ) =>
          d.features.filter(( f : any ) => f && f.properties),
        getPosition: (f) => {
          return f.properties.centroid
        },
        getFillColor: d => {
          if(d.properties.centroid === selectionState.source.properties.centroid){
            return [Math.sqrt(d.inbound), 140, 0]
          }
          return [255, 140, 0]
        },
        getRadius: d => {
          if(d.properties.centroid === selectionState.source.properties.centroid){
            return 50
          }
          return 20
        },
        pickable: true
      })
      // console.log(layerCircle)

      
      dispatch(removeAllLayersDeck())
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
