export const mapLayersStyleGeoserver = {
  macrozonas: {
    id:"vt_macrozonas",
    state: false,
    layer: "macrozonas",
    label: "Macrozonas",
    fillStyle : {
      id: "macrozonas-fill",
      type: "fill",
      source: "macrozonas",
      "source-layer": "macrozonas",
      paint: {
        "fill-color": "rgba(226, 244, 195, 0)",
      }
    },
    lineStyle : {
      id: "macrozonas-outline",
      type: "line",
      source: "macrozonas",
      "source-layer": "macrozonas",
      paint: {
        "line-color": "#FF0000",
        "line-width": 3
      }
    },
    labelLayer : {
      id: "macrozonas-label",
      type: "symbol",
      source: "macrozonas",
      "source-layer": "macrozonas",
      layout: {
        "text-field": "{nom_macro}",
        "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
        "text-ignore-placement": true
      },
      paint: {
        "text-color": "#FF0000",
      },
      minzoom: 3,
      maxzoom: 18
    }
  },
  distritos: {
    id:"vt_distritos",
    state: false,
    layer: "distritos",
    label: "Distritos"
  },
  mesozonas: {
    id:"vt_mesozonas",
    state: false,
    layer: "sector160v2",
    label: "Mesozonas",
    fillStyle : {
      id: "sector160v2-fill",
      type: "fill",
      source: "sector160v2",
      "source-layer": "sector160v2",
      paint: {
        "fill-color": "rgba(226, 244, 195, 0)",
      }
    },
    lineStyle : {
      id: "sector160v2-outline",
      type: "line",
      source: "sector160v2",
      "source-layer": "sector160v2",
      paint: {
        "line-color": "#D6BBBB",
        "line-width": 1
      }
    },
    labelLayer : {
      id: "sector160v2-label",
      type: "symbol",
      source: "sector160v2",
      "source-layer": "sector160v2",
      layout: {
        "text-field": "{sector_160}",
        "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
        "text-ignore-placement": true
      },
      paint: {
        "text-color": "#D319CD",
      },
      minzoom: 3,
      maxzoom: 18
    }
  },
  microzonas: {
    id:"vt_microzonas",
    state: false,
    layer: "sector335",
    label: "Microzonas",
    fillStyle : {
      id: "sector335-fill",
      type: "fill",
      source: "sector335",
      "source-layer": "sector335",
      paint: {
        "fill-color": "rgba(226, 244, 195, 0)",
      }
    },
    lineStyle : {
      id: "sector335-outline",
      type: "line",
      source: "sector335",
      "source-layer": "sector335",
      paint: {
        "line-color": "#EC3F3F",
        "line-width": 2
      }
    },
    labelLayer : {
      id: "sector335-label",
      type: "symbol",
      source: "sector335",
      "source-layer": "sector335",
      layout: {
        "text-field": "{zone_id}",
        "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
        "text-ignore-placement": true
      },
      paint: {
        "text-color": "#EC3F3F",
      },
      minzoom: 3,
      maxzoom: 18
    }
  },
  sistema_masivo: {
    id:"vt_sistema_masivo",
    state: false,
    layer: "",
    label: "Sistema masivo"
  },
}