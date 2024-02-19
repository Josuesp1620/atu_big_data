import React from "react";
import { StyledLabelSpan, inputClass } from "./elements";
import Fuse from 'fuse.js';
import { data_input } from "@/Map/constants/input.data.constants";
import { clsx } from "clsx";

export function InputSearch({ label, disable=false, placeholder='' }: { label: string, disable?: boolean, placeholder?: string }) {
    const [value, setValue] = React.useState("");

    const [showResult, setShowResult] = React.useState([]);

    const fuseOptions = {
        includeScore: true,
        keys: ["denominacion"],
        threshold: 0.3,
    };

    const handleOptionClick = (item) => {
        setValue(item.denominacion);
        setShowResult([]);
    };
    
    const handleOnchangeInput = (event) => {
        const { value } = event.target;
        setValue(value);

        const searchInType = (typeData) => {
            const fuse = new Fuse(typeData.data, fuseOptions);
            return fuse.search(value).slice(0, 5).map((result: any) => ({...result.item, type: typeData.title}));
        };

        const combinedResults = [
            ...searchInType(data_input.macrozonas),
            ...searchInType(data_input.distrito),
            ...searchInType(data_input.sectores),
            ...searchInType(data_input.microsectores)
        ];
        setShowResult(combinedResults);
    };

    const renderListItems = (tipo, title) => {
        const filteredItems = showResult.filter(item => item.tipo === tipo);
        return filteredItems.length > 0 ? (
            <>
                <h1 className="px-2">{title}</h1>
                {filteredItems.map((item, index) => (
                    <li
                        key={index}
                        className="py-1 px-2 hover:bg-gray-100 cursor-pointer text-xs"
                        onClick={() => handleOptionClick(item)}
                    >
                        {item.denominacion}
                    </li>
                ))}
            </>
        ) : null;
    };

    React.useEffect(() => {
        if(disable === true){
            setValue("");
        }
    }, [disable, value])
    return (
        <>
            <div className="relative">
                <div className="py-1 whitespace-nowrap flex justify-between">
                    <StyledLabelSpan size="xs">{label}</StyledLabelSpan>
                    <input
                        type="text"
                        name="source_input"
                        value={value}
                        disabled={disable}
                        placeholder={placeholder}
                        className={clsx(disable ? "cursor-not-allowed" : "cursor-text", inputClass({ _size: "xs" }))}
                        onChange={handleOnchangeInput}
                    />
                </div>
                <div className="result-search">
                    {showResult.length > 0 && (
                        <ul className="absolute z-10 bg-white border border-gray-100 rounded w-full shadow-lg">
                            {renderListItems("macrozonas", data_input.macrozonas.title)}
                            {renderListItems("distrito", data_input.distrito.title)}
                            {renderListItems("sectores", data_input.sectores.title)}
                            {renderListItems("microsectores", data_input.microsectores.title)}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
}
