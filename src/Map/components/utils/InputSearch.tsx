import React from "react";
import { StyledLabelSpan, inputClass } from "@/components/elements";
import Fuse from 'fuse.js';
import { data_input } from "@/Map/constants/input.data.constants";
import { clsx } from "clsx";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setLineasDeseo } from "@/redux/features/analyticsSlice";
import {Source, Layer} from 'react-map-gl';
import { addLayers, removeAllLayers, removeLayer } from "@/redux/features/layersSlice";
import { removeAllLayersDeck } from "@/redux/features/layersDeckSlice";

export function InputSearch({ label, disable=false, placeholder='', type='' }: { label: string, disable?: boolean, placeholder?: string, type?: string }) {
    const [value, setValue] = React.useState("");
    const dispatch = useAppDispatch();

    const [showResult, setShowResult] = React.useState([]);

    const layersGeoserver = useAppSelector((state) => state.layersGeoserverReducer);

    const fuseOptions = {
        includeScore: true,
        keys: ["denominacion"],
        threshold: 0.3,
    };

    const handleOptionClick = (item, type) => {
        setValue(item.denominacion);
        console.log(item)
        setShowResult([]);
        dispatch(setLineasDeseo({[type === 'source' ? 'source_id' : 'target_id']: parseInt(item.id)}))

        const layerDetails = layersGeoserver[item.tipo];
        dispatch(removeAllLayers())
        dispatch(removeAllLayersDeck())
        
        if (layerDetails.layer) { 
          const layerNew = 
          <Source  key={layerDetails.id} id={layerDetails.id} type="vector"  scheme="tms" name={layerDetails.layer} tiles={[`http://200.121.128.47:8080/geoserver/gwc/service/tms/1.0.0/atu_vt:${layerDetails.layer}@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf`]}>
            <Layer {...layerDetails.fillStyle} />
            <Layer {...layerDetails.lineStyle} />
            <Layer {...layerDetails.labelLayer}/>
            <Layer {...layerDetails.selecterdLineStyle}  filter={['==',layerDetails.filter,'',]} />
          </Source>;
          dispatch(addLayers(layerNew))
        }
    };
    
    const handleOnchangeInput = (event) => {
        const { value } = event.target;
        setValue(value);

        const searchInType = (typeData) => {
            const fuse = new Fuse(typeData.data, fuseOptions);
            return fuse.search(value).slice(0, 5).map((result: any) => ({...result.item, type: typeData.tipo}));
        };

        const combinedResults = [
            ...searchInType(data_input.macrozonas),
            ...searchInType(data_input.distrito),
            ...searchInType(data_input.mesozonas),
            ...searchInType(data_input.microzonas)
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
                        onClick={() => handleOptionClick(item, type)}
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
                        <ul className="absolute z-50 bg-white border border-gray-100 rounded w-full shadow-lg">
                            {renderListItems("macrozonas", data_input.macrozonas.title)}
                            {renderListItems("distrito", data_input.distrito.title)}
                            {renderListItems("mesozonas", data_input.mesozonas.title)}
                            {renderListItems("microzonas", data_input.microzonas.title)}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
}
