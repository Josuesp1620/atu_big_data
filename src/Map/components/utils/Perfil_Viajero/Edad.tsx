import { StyledLabelSpan, styledCheckbox } from "@/components/elements";
import { setPerfilViajero } from "@/redux/features/analyticsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function EdadComponent() {
    const dispatch = useAppDispatch();
    const analytics = useAppSelector((state) => state.analyticsReducer.perfil_viajero);

    const onChange = (value) => {
        const list_edad = analytics.edad
        const updatedEdadList = list_edad.includes(value)
        ? list_edad.filter((edad) => edad !== value)
        : [...list_edad, value];
        
        dispatch(
            setPerfilViajero({
            edad: updatedEdadList,
            })
        );  
    }

    return (
        <>
        <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">15 a 19</StyledLabelSpan>
                    <input
                        type="checkbox"
                        name="from_source_checkbox"
                        checked={analytics.edad.includes("15 - 19")}
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {onChange("15 - 19")}}
                        />
                </div>
                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">20 a 29</StyledLabelSpan>
                    <input
                    type="checkbox"
                    name="from_target_checkbox"
                    checked={analytics.edad.includes("20 - 29")}
                    className={styledCheckbox({ variant: "default" })}
                    onChange={(e) => {onChange("20 - 29")}}
                    />
                </div>
                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">30 a 39</StyledLabelSpan>
                    <input
                    type="checkbox"
                    name="source_to_target_checkbox"
                    checked={analytics.edad.includes("30 - 39")}
                    className={styledCheckbox({ variant: "default" })}
                    onChange={(e) => {onChange("30 - 39")}}
                    />
                </div>

                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">40 a 49</StyledLabelSpan>
                    <input
                    type="checkbox"
                    name="from_source_checkbox"
                    checked={analytics.edad.includes("40 - 49")}
                    className={styledCheckbox({ variant: "default" })}
                    onChange={(e) => {onChange("40 - 49")}}
                    />
                </div>
                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">50 a mas</StyledLabelSpan>
                    <input
                    type="checkbox"
                    name="from_target_checkbox"
                    checked={analytics.edad.includes("50 - mas")}
                    className={styledCheckbox({ variant: "default" })}
                    onChange={(e) => {onChange("50 - mas")}}
                    />
                </div>
        </>
    );
}