import { MAP_STYLE } from "@/Map/constants/map.constants";
import {
    DndContext
} from "@dnd-kit/core";

export function LayersPopover({ setMapStyle, mapStyle }: { setMapStyle: any, mapStyle : any }) {
  const items = MAP_STYLE;

    const handleSelectLayer = (layer:any) => {
      setMapStyle(layer);
    };
  
    return (
      <div>
        <div className="flex justify-between pb-2">
          <div className="font-bold">Mapas</div>
        </div>
        <div className="placemark-scrollbar overflow-y-auto" style={{maxHeight: 300}}>
          <DndContext>
            <div className="pt-2 border-t border-gray-100 dark:border-gray-700">
              {items.map((layerConfig) => {
                const isSelected = mapStyle === layerConfig;
                const selectedClass = isSelected ? 'bg-gray-200 dark:bg-gray-600' : '';
                return (
                  <p key={layerConfig.id} className={`cursor-pointer ${selectedClass}`} onClick={() => handleSelectLayer(layerConfig)}>
                    {layerConfig.name}
                  </p>
                );
              })}
            </div>
          </DndContext>
        </div>
      </div>
    );
  }
  