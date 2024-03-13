import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AnalyticsState {
  perfil_viajero : {
    horario: string[],
    edad: string[],
    nse: string[],
    tipo_dia: string[],
    motivo: string[],
    genero: string[],
    modo: string[]
  },
  lineas_deseo : {
    type: string | null,
    type_source: string | null,
    type_target: string | null,
    value_source: string | null,
    value_target: string | null,
    source_id : number | null,
    target_id: number | null,
  },
  periodo_estudio : {
    year: number | null,
    month: string | null,
  },
}

const initialState: AnalyticsState = {
  perfil_viajero : {
    horario: [],
    edad: [],
    nse: [],
    tipo_dia: [],
    motivo: [],
    genero: [],
    modo: [],
  },
  lineas_deseo : {
    type: null,
    type_source: null,
    type_target: null,
    value_source: null,
    value_target: null,
    source_id : null,
    target_id: null,
  },
  periodo_estudio : {
    year: null,
    month: null,
  }
};

export const AnalyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {
    setPerfilViajero: (state, action: PayloadAction<any>) => {
      const updatedPerfilViajero = { ...state.perfil_viajero, ...action.payload };
      state.perfil_viajero = updatedPerfilViajero;
    },
    setLineasDeseo: (state, action: PayloadAction<any>) => {
      const updatedLineasDeseo = { ...state.lineas_deseo, ...action.payload };
      state.lineas_deseo = updatedLineasDeseo;
    },
    setPeriodoEstudio: (state, action: PayloadAction<any>) => {
      state.perfil_viajero = action.payload;
    },
    resetAnalytics : (state) => {
      state.perfil_viajero = initialState.perfil_viajero
      state.lineas_deseo = initialState.lineas_deseo
      state.periodo_estudio = initialState.periodo_estudio
    }
  },
});

export const { setPerfilViajero, setLineasDeseo, setPeriodoEstudio, resetAnalytics } = AnalyticsSlice.actions;

export default AnalyticsSlice.reducer;
