import distritos from "../data/distritos.json"
import macrozonas from "../data/macrozonas.json"
import sectores from "../data/sectores.json"
import microsectores from "../data/microsectores.json"

export const data_input = {
    macrozonas: {
        id: "macrozonas", 
        data: macrozonas,
        title: 'Macrozonas'
        
    },
    distrito: {
        id: "distrito", 
        data: distritos,
        title: 'Distritos'
    },
    sectores: {
        id: "sectores", 
        data: sectores,
        title: 'Mesozonas'
        
    },
    microsectores: {
        id: "microsectores", 
        data: microsectores,
        title: 'Microzonas'
        
    }
}