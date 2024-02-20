import { useAppDispatch } from "@/redux/hooks";
import clsx from "clsx";
import React from "react";

function Tab({
    onClick,
    active,
    label,
    ...attributes
  }: {
    onClick: () => void;
    active: boolean;
    label: React.ReactNode;
  } & React.HTMLAttributes<HTMLButtonElement>) {
    return (
      <button
        role="tab"
        onClick={onClick}
        aria-selected={active}
        className={clsx(
          "text-left text-sm py-1 px-3 focus:outline-none",
          active
            ? "text-black dark:text-white"
            : `
            bg-gray-100 dark:bg-gray-900
            border-b
            border-gray-200 dark:border-black
            text-gray-500 dark:text-gray-400
            hover:text-black dark:hover:text-gray-200
            focus:text-black`
        )}
        {...attributes}
      >
        {label}
      </button>
    );
  }

function TabList({
    tabOrder,
    setTab,
    activeTab,
  }: {
    tabOrder: any[];
    activeTab: any;
    setTab: any;
  }) {
    return (
      <div
        role="tablist"
        style={{
          gridTemplateColumns: `repeat(${tabOrder.length}, 1fr) min-content`,
        }}
        className="flex-0 grid h-8 flex-none
        sticky top-0
        bg-white dark:bg-gray-800
        divide-x divide-gray-200 dark:divide-black"
      >
        {tabOrder.map((tab) => (
          <Tab
            key={tab}
            onClick={() => setTab(tab)}
            active={activeTab === tab}
            label={tab}
          />
        ))}
      </div>
    );
};

  
function ActiveTab({
  activeTab,
  panelWidth,
  TAB_COMPONENTS
}: {
  activeTab: any;
  panelWidth: any;
  TAB_COMPONENTS: any
}) {
  const Component = TAB_COMPONENTS[activeTab];

  if (Component) {
    return typeof Component === 'function' ? <Component panelWidth={panelWidth} /> : Component;
  }

  return null;
}

export function PanelInner({
    side, 
    panelWidth, 
    setPanelWidth,
    setShowPanel,
    tabOrder,
    active,
    TAB_COMPONENTS
}: {
    side : string;
    panelWidth: any;
    setPanelWidth: any;
    setShowPanel: any;
    tabOrder: any;
    active: any;
    TAB_COMPONENTS: any
}){
    const [activeTab, setTab] = React.useState(active);
    const dispatch = useAppDispatch();
    const [isResizing, setIsResizing] = React.useState(false);
    const [initialX, setInitialX] = React.useState(0);
  
    React.useEffect(() => {
      console.log(panelWidth)
      if(panelWidth < 270){
        dispatch(setShowPanel(false))
        dispatch(setPanelWidth(350))
      }
      const handleMouseMove = (e) => {
        if (isResizing) {
          const deltaX = e.clientX - initialX;
          const newWidth = side === "right" ? panelWidth - deltaX : panelWidth + deltaX;
          dispatch(setPanelWidth(newWidth))
          setInitialX(e.clientX);
        }
      };
  
      const handleMouseUp = () => {
        if (isResizing) {
          setIsResizing(false);
        }
      };
  
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }, [isResizing, initialX, panelWidth, setPanelWidth, side]);
  
    const handleMouseDown = (e) => {
      setIsResizing(true);
      setInitialX(e.clientX);
    };
  
    const panelStyles = {
      width: `${panelWidth}px`,
      height: "100vh",
    };

    return (
        <div
            
            className={clsx(
              side === "right" ? "right-0" : "left-0"
            )}
          >
    
            <div          
            style={panelStyles}
              className={clsx(
                side === "right" ? "right-0" : "left-0",
                'absolute border-t border-b bg-white'
              )}
            >
                <TabList
                    tabOrder={tabOrder}
                    activeTab={activeTab}
                    setTab={setTab}
                />
                <ActiveTab activeTab={activeTab} panelWidth={panelWidth} TAB_COMPONENTS={TAB_COMPONENTS}/>                
            </div>
            <button
              type="button"
              role="separator"
              aria-orientation="vertical"
              aria-label="Resize panel"
              tabIndex={1}
              className={clsx(
                "absolute",
                "top-0",
                "bottom-0",
                "touch-none",
                "flex",
                "items-center",
                "justify-center",
                "w-1",
                "z-max",
                "bg-indigo-300",
                "hover:bg-indigo-400"
              )}
              style={{ cursor: "col-resize", right: side === "right" ? panelWidth - 5 : "unset", left: side === "left" ? 0 : "unset" }}
              onMouseDown={handleMouseDown}
            >
              <div className="hover-hover:hidden h-16 w-1 rounded" />
            </button>
          </div>
        );
}