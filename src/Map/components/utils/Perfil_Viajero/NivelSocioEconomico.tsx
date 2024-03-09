import { StyledLabelSpan, styledCheckbox } from "@/components/elements";
import { setPerfilViajero } from "@/redux/features/analyticsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function NivelSocioEconomicoComponent() {

    const dispatch = useAppDispatch();
    const analytics = useAppSelector((state) => state.analyticsReducer.perfil_viajero);

    const onChange = (value) => {
        const list_nivel_s_e = analytics.nivel_s_e
        const updatedNivelSocioEconomicoList = list_nivel_s_e.includes(value)
        ? list_nivel_s_e.filter((nivel_s_e) => nivel_s_e !== value)
        : [...list_nivel_s_e, value];
        
        dispatch(
            setPerfilViajero({
            nivel_s_e: updatedNivelSocioEconomicoList,
            })
        );  
    }

    return (
        <>
            <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">A / B</StyledLabelSpan>
                    <input
                    type="checkbox"
                    name="source_to_target_checkbox"
                    checked={analytics.nivel_s_e.includes("ALTO")}
                    className={styledCheckbox({ variant: "default" })}
                    onChange={(e) => {onChange("ALTO")}}
                    />
                </div>

                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">C</StyledLabelSpan>
                    <input
                    type="checkbox"
                    name="from_source_checkbox"
                    checked={analytics.nivel_s_e.includes("MEDIO ALTO")}
                    className={styledCheckbox({ variant: "default" })}
                    onChange={(e) => {onChange("MEDIO ALTO")}}
                    />
                </div>
                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">D / E</StyledLabelSpan>
                    <input
                    type="checkbox"
                    name="from_target_checkbox"
                    checked={analytics.nivel_s_e.includes("BAJO")}
                    className={styledCheckbox({ variant: "default" })}
                    onChange={(e) => {onChange("BAJO")}}
                    />
                </div>
        </>
    );
}