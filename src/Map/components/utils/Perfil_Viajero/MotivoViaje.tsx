import { StyledLabelSpan, styledCheckbox } from "@/components/elements";
import { setPerfilViajero } from "@/redux/features/analyticsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function MotivoViaje() {

    const dispatch = useAppDispatch();
    const analytics = useAppSelector((state) => state.analyticsReducer.perfil_viajero);

    const onChange = (value) => {
        const list_motivo_viaje = analytics.motivo_viaje
        const updatedMotivoViajeList = list_motivo_viaje.includes(value)
        ? list_motivo_viaje.filter((motivo_viaje) => motivo_viaje !== value)
        : [...list_motivo_viaje, value];
        
        dispatch(
            setPerfilViajero({
            motivo_viaje: updatedMotivoViajeList,
            })
        );  
    }

    return (
        <>        
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">A Casa</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="source_to_target_checkbox"
                        checked={analytics.motivo_viaje.includes("A Casa")}
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {onChange("A Casa")}}
                        />
                    </div>

                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Al Trabajo</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_source_checkbox"
                        checked={analytics.motivo_viaje.includes("A Trabajo")}
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {onChange("A Trabajo")}}
                        />
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Otros</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_target_checkbox"
                        checked={analytics.motivo_viaje.includes("Otros")}
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {onChange("Otros")}}
                        />
                    </div>
            </>
    );
}