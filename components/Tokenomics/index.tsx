import { FunctionComponent, PropsWithChildren } from "react";
import Image from "next/image";
import BorderBox from "../Shared/BorderBox";

const TokenomicBox: FunctionComponent<PropsWithChildren> = () => {
  return (
    <div className="flex flex-col justify-center w-full items-center gap-2 text-pepe_white pb-[10%]">
      <div className="text-[60px]">TOKENOMICS</div>
      <div className="flex gap-10">
        <div className=" flex flex-col  gap-[30px] max-w-[500px]">
          <div>
            <div>Token Supply: </div>
            <div>420,690,000,000,000</div>
          </div>
          <BorderBox>
            <div className="text-[25px] pb-10">
              No Taxes, No Bullshit. It{"'"}s that simple.
            </div>
            <div className="text-xl">
              88.9% of the tokens were sent to the liquidity pool, LP tokens
              were burnt, and contract is renounced. The remaining 6.2% of the
              supply to be used as tokens for future centralized exchange
              listings, earn, game, marketing, bridges, liquidity pools and many
              more. 4.9 % Finally, give away airdrops to pepekrub disciples who
              participate in the event.
            </div>
          </BorderBox>
        </div>
        <div className="relative flex flex-col justify-center items-center gap-10">
          <div className="absolute top-10 left-0">
            <div>Other:</div>
            <div>6.2%</div>
          </div>
          <div>
            <div>Airdrop:</div>
            <div>4.9%</div>
          </div>
          <Image src="/images/pepeo.png" width={300} height={300} alt="o" />
          <div>
            <div>Liquidity Pool:</div>
            <div>88.9%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicBox;
