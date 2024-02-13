"use client"
import * as T from "@radix-ui/react-tooltip";
import { Root, Trigger } from "@radix-ui/react-popover";
import * as E from "@/components/elements";
import { TrashIcon } from "@radix-ui/react-icons";

export default function CleanMapControl( { setLayersDeck,setLayers } : {setLayersDeck : any ,setLayers : any } ) {

    const cleanMap = () => {
        setLayersDeck([])
        setLayers([])
    }

    return (
      <T.Provider>
        <T.Root>
        <Root>
           <div className="flex absolute bottom-0 right-0 my-32 mx-3 bg-white shadow border border-gray-300 rounded" onClick={cleanMap}>
            <T.Trigger asChild>
              <Trigger aria-label="Layers" asChild>
                <E.Button variant="quiet" size="sm" >
                  <TrashIcon style={{ width: '15px', height: '15px' }}/>
                </E.Button>
              </Trigger>
            </T.Trigger>
          </div>
        </Root>
       
        <E.TContent side="bottom" className="mx-3">
          <span className="whitespace-nowrap">Limpiar Mapa</span>
        </E.TContent> 
      </T.Root>
      </T.Provider>
        
    );
}