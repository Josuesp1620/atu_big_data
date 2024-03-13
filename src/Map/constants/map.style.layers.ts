export const mapLayersStyleGeoserver = {
  macrozonas: {
    id:"vt_macrozonas",
    state: false,
    layer: "macrozonas",
    label: "Macrozonas",
    filter:"taz",
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
    selecterdLineStyle : {
      id: "macrozonas-selected-outline",
      type: "line",
      source: "macrozonas",
      "source-layer": "macrozonas",
      paint: {
        "line-color": "#94F14B",
        "line-width": 3
      }
    },
    labelLayer : {
      id: "macrozonas-label",
      type: "symbol",
      source: "macrozonas",
      "source-layer": "macrozonas",
      layout: {
        "text-field": "{name}",
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
    layer: "mesozonas",
    label: "Mesozonas",
    filter:"taz",
    fillStyle : {
      id: "mesozonas-fill",
      type: "fill",
      source: "mesozonas",
      "source-layer": "mesozonas",
      paint: {
        "fill-color": "rgba(226, 244, 195, 0)",
      }
    },
    lineStyle : {
      id: "mesozonas-outline",
      type: "line",
      source: "mesozonas",
      "source-layer": "mesozonas",
      paint: {
        "line-color": "#D6BBBB",
        "line-width": 1
      }
    },
    selecterdLineStyle : {
      id: "mesozonas-selected-outline",
      type: "line",
      source: "mesozonas",
      "source-layer": "mesozonas",
      paint: {
        "line-color": "#94F14B",
        "line-width": 3
      }
    },
    labelLayer : {
      id: "mesozonas-label",
      type: "symbol",
      source: "mesozonas",
      "source-layer": "mesozonas",
      layout: {
        "text-field": "{taz}",
        "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
        "text-ignore-placement": true,
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
    layer: "microzonas",
    label: "Microzonas",
    filter:"taz",
    fillStyle : {
      id: "microzonas-fill",
      type: "fill",
      source: "microzonas",
      "source-layer": "microzonas",
      paint: {
        "fill-color": "rgba(226, 244, 195, 0)",
      }
    },
    lineStyle : {
      id: "microzonas-outline",
      type: "line",
      source: "microzonas",
      "source-layer": "microzonas",
      paint: {
        "line-color": "#EC3F3F",
        "line-width": 2
      }
    },
    selecterdLineStyle : {
      id: "microzonas-selected-outline",
      type: "line",
      source: "microzonas",
      "source-layer": "microzonas",
      paint: {
        "line-color": "#94F14B",
        "line-width": 3
      }
    },
    labelLayer : {
      id: "microzonas-label",
      type: "symbol",
      source: "microzonas",
      "source-layer": "microzonas",
      layout: {
        "text-field": "{taz}",
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