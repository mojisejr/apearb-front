import { FunctionComponent, PropsWithChildren } from "react";

const Content2: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-full flex bg-[url('/images/bg.png')] bg-opacity-90 bg-pepe_green1 bg-cover bg-center text-pepe_black">
      {children}
    </div>
  );
};

export default Content2;
