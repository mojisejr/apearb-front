import { FunctionComponent, PropsWithChildren } from "react";

const BorderBox: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="p-5 bg-pepe_black rounded-tr-2xl rounded-bl-2xl bg-opacity-70 border-pepe_white border-[2px]">
      {children}
    </div>
  );
};

export default BorderBox;
