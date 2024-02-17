import React from "react";
import * as C from "@radix-ui/react-collapsible";
import { CaretDownIcon, CaretRightIcon } from "@radix-ui/react-icons";
import { styledPanelTitle } from "./elements";
import clsx from "clsx";

export function PanelDetailsCollapsible({
  title,
  bold = false,
  children,
  state,
  onToggle,
}: React.PropsWithChildren<{
  title: string;
  bold?: boolean;
  state?: boolean;
  onToggle: () => void | boolean;
}>) {
  return (
    <C.Root open={state} onOpenChange={onToggle}>
      <C.Trigger className={styledPanelTitle({ interactive: true })}>
        <span className={clsx(bold ? "font-bold" : "font-normal", 'side-panel')}>{title}</span>
        {state ? <CaretDownIcon /> : <CaretRightIcon />}
      </C.Trigger>
      <C.Content className="px-3 pb-3 contain-layout">{children}</C.Content>
    </C.Root>
  );
}

export default PanelDetailsCollapsible;
