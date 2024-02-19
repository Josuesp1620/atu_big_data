import React from "react";
import * as C from "@radix-ui/react-collapsible";
import { CaretDownIcon, CaretRightIcon } from "@radix-ui/react-icons";
import { styledPanelTitle } from "./elements";
import clsx from "clsx";

export function PanelDetailsCollapsible({
  title,
  bold = "",
  children,
  state,
  onToggle,
}: React.PropsWithChildren<{
  title: string;
  bold?: string;
  state?: boolean;
  onToggle: () => void | boolean;
}>) {
  return (
    <C.Root open={state} onOpenChange={onToggle}>
      <C.Trigger className={styledPanelTitle({ interactive: true })}>
        <span className={clsx(bold === "bold-1" ? "font-semibold" : bold === "bold-2" ? "font-semibold text-gray-500" : "font-normal", 'side-panel')}>{title}</span>
        {state ? <CaretDownIcon /> : <CaretRightIcon />}
      </C.Trigger>
      <C.Content className="px-3 pb-3 contain-layout">{children}</C.Content>
    </C.Root>
  );
}

export default PanelDetailsCollapsible;
