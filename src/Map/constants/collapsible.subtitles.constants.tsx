import { StyledLabelSpan, styledCheckbox } from "@/components/elements";
import { BackpackIcon, CalendarIcon, ClockIcon, HomeIcon, PersonIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export const collapsibleSubTitles = [
    {
        id: "sub-001",
        title: "Horario (24 horas):",
        icon: (
            <ClockIcon /> 
        ),
        children: (
            <>
                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">0 a 6</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_source_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                    />
                </div>
                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">6 a 9</StyledLabelSpan>
                    <input
                    type="checkbox"
                    name="from_target_checkbox"
                    className={styledCheckbox({ variant: "default" })}
                    onChange={(e) => {

                    }}
                    />
                </div>
                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">9 a 11</StyledLabelSpan>
                    <input
                    type="checkbox"
                    name="source_to_target_checkbox"
                    className={styledCheckbox({ variant: "default" })}
                    onChange={(e) => {

                    }}
                    />
                </div>

                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">11 a 13</StyledLabelSpan>
                    <input
                    type="checkbox"
                    name="from_source_checkbox"
                    className={styledCheckbox({ variant: "default" })}
                    onChange={(e) => {

                    }}
                    />
                </div>
                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">13 a 15</StyledLabelSpan>
                    <input
                    type="checkbox"
                    name="from_target_checkbox"
                    className={styledCheckbox({ variant: "default" })}
                    onChange={(e) => {

                    }}
                    />
                </div>
                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">15 a 17</StyledLabelSpan>
                    <input
                    type="checkbox"
                    name="source_to_target_checkbox"
                    className={styledCheckbox({ variant: "default" })}
                    onChange={(e) => {

                    }}
                    />
                </div>

                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">17 a 19</StyledLabelSpan>
                    <input
                    type="checkbox"
                    name="from_source_checkbox"
                    className={styledCheckbox({ variant: "default" })}
                    onChange={(e) => {

                    }}
                    />
                </div>
                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">19 a 21</StyledLabelSpan>
                    <input
                    type="checkbox"
                    name="from_target_checkbox"
                    className={styledCheckbox({ variant: "default" })}
                    onChange={(e) => {

                    }}
                    />
                </div>
                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">21 a 0</StyledLabelSpan>
                    <input
                    type="checkbox"
                    name="source_to_target_checkbox"
                    className={styledCheckbox({ variant: "default" })}
                    onChange={(e) => {

                    }}
                    />
                </div>
            </>
        )
    },
    {
        id: "sub-002",
        title: "Edad (años):",
        icon: (
            <PersonIcon /> 
        ),
        children: (
            <>
            <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">15 a 19</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_source_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">20 a 29</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_target_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">30 a 39</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="source_to_target_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>

                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">40 a 39</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_source_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">50 a mas</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_target_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
            </>
        )
    },
    {
        id: "sub-003",
        title: "Nivel Socio Economico:",
        icon: (
            <HomeIcon /> 
        ),
        children: (
            <>
                                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">A / B</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="source_to_target_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>

                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">C</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_source_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">D / E</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_target_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
            </>
        )
    },
    {
        id: "sub-004",
        title: "Tipo de dia:",
        icon: (
            <CalendarIcon /> 
        ),
        children: (
            <>
                                <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Lunes</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="source_to_target_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>

                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Martes</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_source_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Miercoles</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_target_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div><div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Jueves</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="source_to_target_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>

                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Viernes</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_source_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Sabado</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_target_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div><div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Domingo</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="source_to_target_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
            </>
        )
    },
    {
        id: "sub-005",
        title: "Motivo de Viaje:",
        icon: (
            <BackpackIcon /> 
        ),
        children: (
            <>        
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">A Casa</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="source_to_target_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>

                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Al Trabajo</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_source_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Otros</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_target_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>
            </>
        )
    },
    {
        id: "sub-006",
        title: "Genero:",
        icon: (
            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABVklEQVR4nK3Uu0oeURSG4UcSCEhEu4BgIwQVD3jstPOEvTamD+gN2KkEIgg2tp7AA3gDaqk2MZ14Si7CWxAiG5awGXT+wT8vTLH23vPNWt9ae3g/bRjKnj51soo/eMK/eLr8B0bwGILdVV/qxA8cYRNTsd6D+xB9qiq4gl+YD68msYvTEOuJcw9VBBexjw+v7M3ipPDh1jKxT2F6I5reOLOHCRVowBi2Il7DBfoL56bD01KWo9QZrGfrvbjFQLY2iIMysa5owEe0Fzx6Eb3M4m/hXemwfs/iyxDJSd39Gh7foaNMMKU/nMWpvJuC6EbMYfJvSQ02Y85y+qIhxxFvY1RFZrDzxl6asc/4G+WqOi7nmHtlLzXqEAu1RFpwhS/Z3TyLoZ2K65a6+TtGqhLTuC7czXH8jB/Caq1uKpBEkjdJNGVaF81ZZinTVH5dpEYk0ReSp+/mGTslPQRpgq07AAAAAElFTkSuQmCC" alt="logo_gender"/>
        ),
        children: (
            <>
                <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Masculino</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="source_to_target_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                    </div>

                    <div className="py-1 whitespace-nowrap flex justify-between">
                        <StyledLabelSpan size="xs">Femenino</StyledLabelSpan>
                        <input
                        type="checkbox"
                        name="from_source_checkbox"
                        className={styledCheckbox({ variant: "default" })}
                        onChange={(e) => {

                        }}
                        />
                </div>
            </>
        )
    }
];
