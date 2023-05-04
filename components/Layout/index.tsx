import { FunctionComponent, PropsWithChildren } from "react";

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div id="container" className="flex flex-col h-full w-full text-ape_white">
      {children}
    </div>
  );
};

export default Layout;
