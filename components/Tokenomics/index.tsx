import { FunctionComponent, PropsWithChildren } from "react";
import Image from "next/image";
import BorderBox from "../Shared/BorderBox";

const TokenomicBox: FunctionComponent<PropsWithChildren> = () => {
  return (
    <div className="flex flex-col justify-center w-full mb-10 items-center gap-2 text-pepe_white pb-[10%]">
      <div className="text-[60px] mb-10">TOKENOMICS</div>
      <div className="flex gap-10">
        <div className=" flex flex-col  gap-[30px] max-w-[500px]">
          <div>
            <div>Token Supply: </div>
            <div>420,690,000,000,000</div>
          </div>
          <BorderBox>
            <div className="text-[25px] mb-10">
              No Taxes, No Bullshit. It{"'"}s that simple.
            </div>
            <div className="text-xl">
              93.1% of the tokens were sent to the liquidity pool, LP tokens
              were burnt, and contract is renounced. The remaining 6.9% of the
              supply is being held in a multi-sig wallet only to be used as
              tokens for future centralized exchange listings, bridges, and
              liquidity pools.
            </div>
          </BorderBox>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <div>
            <div>CEX Listings:</div>
            <div>6.9%</div>
          </div>
          <Image src="/images/pepeo.png" width={300} height={300} alt="o" />
          <div>
            <div>Liquidity Pool:</div>
            <div>93.1%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicBox;
