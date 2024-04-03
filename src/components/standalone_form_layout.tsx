import { ReactNode } from "react";
import { H1, MinimalHeader, styledInlineA } from "./elements";
import clsx from "clsx";

export type LayoutProps = {
  title: string;
  children: ReactNode;
};

const StandaloneFormLayout = ({
  title,
  wide,
  children,
}: LayoutProps & { wide?: boolean }) => {
  return (
    <>
      <div>
        <div className="login-container">
            <span className="login-img"></span>
        </div>
        <div className="min-h-screen text-gray-700 flex flex-col">
            <MinimalHeader />
            <div className="flex-auto">
            <div
                className={clsx(
                wide ? "max-w-2xl" : "max-w-sm",
                "mx-auto px-8 md:px-0 pt-16 space-y-4"
                )}
            >
                <H1 className="mx-auto max-w-sm px-8 md:px-0 w-full py-4 text-center text-black">{title}</H1>
                {children}
            </div>
            </div>
            <div className="mx-auto max-w-sm px-8 md:px-0 w-full py-4 text-center">
            <a className={clsx(styledInlineA, 'no-underline	hover:text-blue-600 hover:font-semibold')} href="">
              © ATU 2024 - Desarrollada por Geosolution
            </a> 
            </div>
        </div>            
        </div>
    </>
  );
};

export default StandaloneFormLayout;
