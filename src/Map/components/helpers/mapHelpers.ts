import axios from "axios";

export async function fetchFeatures(layers, lngLat) {
  try {
    const wfsUrl = `http://200.121.128.47:8080/geoserver/atu_vt/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=atu_vt:${layers.at(-1)?.props.name}&outputFormat=application%2Fjson&CQL_FILTER=INTERSECTS(geom,POINT(${lngLat.lng} ${lngLat.lat}))`;

    const response = await axios.get(wfsUrl);
    return response;
  } catch (error) {
    console.error("Error fetching features:", error);
    return null;
  }
}
