import * as T from "@radix-ui/react-tooltip";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { TContent } from "./elements";
import React from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setActivePanel } from "@/redux/features/sidePanelSlice";


export function PanelToggle({ side, setShowPanel, showPanel, setApplyTransition, setPanelWidth }: { side: any, setShowPanel : any, showPanel : any, setApplyTransition : any, setPanelWidth: any }) {
  const dispatch = useAppDispatch();

  const togglePanel = () => {
    dispatch(setShowPanel(!showPanel))

    dispatch(setApplyTransition(true))

    dispatch(setPanelWidth(350))
    dispatch(setActivePanel(null))
    setTimeout(() => dispatch(setApplyTransition(false)), 500);
  };

  return (
    <T.Provider>
      <T.Root>
        <T.Trigger
          onClick={togglePanel}
          aria-label="Abrir panel"
          className={clsx(
            side === "right" ? "right-0" : "left-0",
            side === "right"
              ? "border-l rounded-r-none"
              : "border-r rounded-l-none",
            `
            absolute px-0.5 py-2 top-1/2 border-t border-b
            bg-white hover:bg-purple-100 border-gray-300
            dark:bg-gray-900 dark:text-white dark:border-white
            rounded
          `
          )}
        >
          {showPanel ?   <ChevronRightIcon /> : <ChevronLeftIcon />}
        </T.Trigger>
        <T.Portal>
          <TContent>
            <div className="whitespace-nowrap">{showPanel ? "Ocultar Panel" : "Expandir Panel"}</div>
          </TContent>
        </T.Portal>
      </T.Root>
    </T.Provider>
  );
}

export function SidePanel({
  side,
  panelWidth,
  children,
}: React.PropsWithChildren<{
  side : string;
  panelWidth: any;
}>) {

  return (
      <div     
          style={{width: `${panelWidth}px`}}     
          className={clsx(
            side === "right" ? "right-0" : "left-0",
            'absolute p-3 bg-white'
          )}
        >
          {children}
        </div>
  );

}
