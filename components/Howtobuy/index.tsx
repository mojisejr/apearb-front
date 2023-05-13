import { FunctionComponent, PropsWithChildren, useState } from "react";
import SwapBox from "./SwapBox";
import { useAccount } from "wagmi";
import OutsideLinks from "./OutsideLink";

const BuyBox: FunctionComponent<PropsWithChildren> = () => {
  const { isConnected } = useAccount();
  return (
    <div className="flex justify-center w-full mb-10 items-center gap-2 text-pepe_white pb-[10%]">
      <div className="flex flex-col">
        <div className="text-[60px]">Buy</div>
        {isConnected ? (
          <div>
            <SwapBox />
            <OutsideLinks />
          </div>
        ) : (
          <div className="text-[30px]">Please Connect Wallet!!</div>
        )}
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
