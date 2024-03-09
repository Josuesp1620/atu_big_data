import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AnalyticsState {
  perfil_viajero : {
    horario: string[],
    edad: string[],
    nivel_s_e: string[],
    tipo_dia: string[],
    motivo_viaje: string[],
    genero: string[] | null
  },
  lineas_deseo : {
    type: string | null,
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
    nivel_s_e: [],
    tipo_dia: [],
    motivo_viaje: [],
    genero: [],
  },
  lineas_deseo : {
    type: null,
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
      state.perfil_viajero = initialState.perfil_viajero
      state.perfil_viajero = initialState.perfil_viajero
    }
  },
});

export const { setPerfilViajero, setLineasDeseo, setPeriodoEstudio, resetAnalytics } = AnalyticsSlice.actions;

export default AnalyticsSlice.reducer;
