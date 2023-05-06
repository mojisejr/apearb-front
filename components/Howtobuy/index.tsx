import { FunctionComponent, PropsWithChildren } from "react";
import SwapBox from "./SwapBox";

const BuyBox: FunctionComponent<PropsWithChildren> = () => {
  return (
    <div className="flex justify-center w-full mb-10 items-center gap-2 text-pepe_white pb-[10%]">
      <div className="flex flex-col">
        <div className="text-[60px]">Buy</div>
        {/* <SwapBox /> */}
        <BuyBoxSoon />
      </div>
    </div>
  );
};

const BuyBoxSoon: FunctionComponent<PropsWithChildren> = () => {
  return (
    <>
      <div className="bg-pepe_green1 p-[20px] mt-10 mb-1">
        <div className="text-[25px]">
          XX days : XX hours : XX miniutes : XX seconds
        </div>
      </div>
      <div className="text-xl">
        Launching Date will let PepeKrub{"'s"} FAM knows later !, be in touch
      </div>
    </>
  );
};

export default BuyBox;
