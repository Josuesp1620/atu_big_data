import { InputSearch } from "@/components/InputSearch"
import { StyledLabelSpan, styledCheckbox } from "@/components/elements"
import React from "react"

export function LineasDeseo() {
    const [lineasDeseo, setLineasDeseo] = React.useState({
        from_source_checkbox: true, 
        from_target_checkbox: false, 
        source_to_target_checkbox: false,
        inputSource: {
            value: "",
            disable: false
        },
        inputTarget: {
            value: "",
            disable: true
        }
    })

    return (
        <>
        <div className="py-1 whitespace-nowrap flex justify-between">
            <StyledLabelSpan size="xs">Desde un Origen</StyledLabelSpan>
            <input
            type="checkbox"
            name="from_source_checkbox"
            checked={lineasDeseo.from_source_checkbox}
            className={styledCheckbox({ variant: "default" })}
            onChange={(e) => {
                setLineasDeseo({
                    from_source_checkbox: true, 
                    from_target_checkbox: false, 
                    source_to_target_checkbox: false,
                    inputSource: {
                        value: "",
                        disable: false
                    },
                    inputTarget: {
                        value: "",
                        disable: true
                    }
                })
            }}
            />
        </div>
        <div className="py-1 whitespace-nowrap flex justify-between">
            <StyledLabelSpan size="xs">Hacia un Destino</StyledLabelSpan>
            <input
            type="checkbox"
            name="from_target_checkbox"
            checked={lineasDeseo.from_target_checkbox}
            className={styledCheckbox({ variant: "default" })}
            onChange={(e) => {
                setLineasDeseo({
                    from_source_checkbox: false, 
                    from_target_checkbox: true, 
                    source_to_target_checkbox: false,
                    inputSource: {
                        value: "",
                        disable: true
                    },
                    inputTarget: {
                        value: "",
                        disable: false
                    }
                })
            }}
            />
        </div>
        <div className="py-1 whitespace-nowrap flex justify-between">
            <StyledLabelSpan size="xs">Orígen a Destino</StyledLabelSpan>
            <input
            type="checkbox"
            name="source_to_target_checkbox"
            checked={lineasDeseo.source_to_target_checkbox}
            className={styledCheckbox({ variant: "default" })}
            onChange={(e) => {
                setLineasDeseo({
                    from_source_checkbox: false, 
                    from_target_checkbox: false, 
                    source_to_target_checkbox: true,
                    inputSource: {
                        value: "",
                        disable: false
                    },
                    inputTarget: {
                        value: "",
                        disable: false
                    }
                })
            }}
            />
        </div>

        <div>
            <InputSearch label={"Origen"} placeholder={"Ingrese Origen"} disable={lineasDeseo.inputSource.disable} />
        </div>
        <div>
            <InputSearch label={"Destino"} placeholder={"Ingrese Destino"} disable={lineasDeseo.inputTarget.disable} />
        </div>
    </>
    )
}