export const mapLayersStyleGeoserver = {
  macrozonas: {
    id:"vt_macrozonas",
    state: false,
    layer: "macrozonas",
    label: "Macrozonas",
    fillLayer : {
      id: 'macrozonas',
      type: 'fill',
      source: {
        type: 'vector',
        tiles: ['http://200.121.128.47:8080/macrozonas/{z}/{x}/{y}']
      },
      'source-layer': 'macrozonas',
      paint: {
        "fill-color": "rgba(226, 244, 195, 0)",
      }
    },
    outLineLayer : {
      id: 'macrozonas-outline',
      type: 'line',
      source: {
        type: 'vector',
        tiles: ['http://200.121.128.47:8080/macrozonas/{z}/{x}/{y}']
      },
      'source-layer': 'macrozonas',
      paint: {
        "line-color": "#FF0000",
        "line-width": 3
      }
    },
    selectedOutLineLayer : {
      id: 'macrozonas-outline-selected',
      type: 'line',
      source: {
        type: 'vector',
        tiles: ['http://200.121.128.47:8080/macrozonas/{z}/{x}/{y}']
      },
      "source-layer": "macrozonas",
      filter: ['in', 'taz', ''],
      paint: {
        "line-color": "#94F14B",
        "line-width": 3
      }
    },
    labelLayer : {
      id: 'macrozonas-points-label',
      type: 'symbol',
      source: {
        type: 'vector',
        tiles: ['http://200.121.128.47:8080/macrozonas_points/{z}/{x}/{y}']
      },
      "source-layer": "macrozonas_points",
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
    },
  },
  distritos: {
    id:"vt_distritos",
    state: false,
    layer: "distritos",
    label: "Distritos",
    filter:"taz",
    fillLayer : {
      id: 'distritos',
      type: 'fill',
      source: {
        type: 'vector',
        tiles: ['http://200.121.128.47:8080/distritos/{z}/{x}/{y}']
      },
      'source-layer': 'distritos',
      paint: {
        "fill-color": "rgba(226, 244, 195, 0)",
      }
    },
    outLineLayer : {
      id: 'distritos-outline',
      type: 'line',
      source: {
        type: 'vector',
        tiles: ['http://200.121.128.47:8080/distritos/{z}/{x}/{y}']
      },
      'source-layer': 'distritos',
      paint: {
        "line-color": "#2255CA",
        "line-width": 1
      }
    },
    selectedOutLineLayer : {
      id: 'distritos-outline-selected',
      type: 'line',
      source: {
        type: 'vector',
        tiles: ['http://200.121.128.47:8080/distritos/{z}/{x}/{y}']
      },
      "source-layer": "distritos",
      filter: ['in', 'taz', ''],
      paint: {
        "line-color": "#94F14B",
        "line-width": 3
      }
    },
    labelLayer : {
      id: 'distritos-points-label',
      type: 'symbol',
      source: {
        type: 'vector',
        tiles: ['http://200.121.128.47:8080/distritos_points/{z}/{x}/{y}']
      },
      "source-layer": "distritos_points",
      layout: {
        "text-field": "{name}",
        "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
        "text-ignore-placement": true
      },
      paint: {
        "text-color": "#2255CA",
      },
      minzoom: 3,
      maxzoom: 18
    },
  },
  mesozonas: {
    id:"vt_mesozonas",
    state: false,
    layer: "mesozonas",
    label: "Mesozonas",
    filter:"taz",
    fillLayer : {
      id: 'mesozonas',
      type: 'fill',
      source: {
        type: 'vector',
        tiles: ['http://200.121.128.47:8080/mesozonas/{z}/{x}/{y}']
      },
      'source-layer': 'mesozonas',
      paint: {
        "fill-color": "rgba(226, 244, 195, 0)",
      }
    },
    outLineLayer : {
      id: 'mesozonas-outline',
      type: 'line',
      source: {
        type: 'vector',
        tiles: ['http://200.121.128.47:8080/mesozonas/{z}/{x}/{y}']
      },
      'source-layer': 'mesozonas',
      paint: {
        "line-color": "#D6BBBB",
        "line-width": 1
      }
    },
    selectedOutLineLayer : {
      id: 'mesozonas-outline-selected',
      type: 'line',
      source: {
        type: 'vector',
        tiles: ['http://200.121.128.47:8080/mesozonas/{z}/{x}/{y}']
      },
      "source-layer": "mesozonas",
      filter: ['in', 'taz', ''],
      paint: {
        "line-color": "#94F14B",
        "line-width": 3
      }
    },
    labelLayer : {
      id: 'mesozonas-points-label',
      type: 'symbol',
      source: {
        type: 'vector',
        tiles: ['http://200.121.128.47:8080/mesozonas_points/{z}/{x}/{y}']
      },
      "source-layer": "mesozonas_points",
      layout: {
        "text-field": "{taz}",
        "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"],
        "text-ignore-placement": true
      },
      paint: {
        "text-color": "#D319CD",
      },
      minzoom: 3,
      maxzoom: 18
    },
  },
  microzonas: {
    id:"vt_microzonas",
    id_label:"vt_microzonas_label",
    state: false,
    layer: "microzonas",
    label: "Microzonas",
    filter:"taz",
    fillLayer : {
      id: 'microzonas',
      type: 'fill',
      source: {
        type: 'vector',
        tiles: ['http://200.121.128.47:8080/microzonas/{z}/{x}/{y}']
      },
      'source-layer': 'microzonas',
      paint: {
        "fill-color": "rgba(226, 244, 195, 0)",
      }
    },
    outLineLayer : {
      id: 'microzonas-outline',
      type: 'line',
      source: {
        type: 'vector',
        tiles: ['http://200.121.128.47:8080/microzonas/{z}/{x}/{y}']
      },
      'source-layer': 'microzonas',
      paint: {
        "line-color": "#EC3F3F",
        "line-width": 2
      }
    },
    selectedOutLineLayer : {
      id: 'microzonas-outline-selected',
      type: 'line',
      source: {
        type: 'vector',
        tiles: ['http://200.121.128.47:8080/microzonas/{z}/{x}/{y}']
      },
      "source-layer": "microzonas",
      filter: ['in', 'taz', ''],
      paint: {
        "line-color": "#94F14B",
        "line-width": 3
      }
    },
    labelLayer : {
      id: 'microzonas-points-label',
      type: 'symbol',
      source: {
        type: 'vector',
        tiles: ['http://200.121.128.47:8080/microzonas_points/{z}/{x}/{y}']
      },
      "source-layer": "microzonas_points",
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