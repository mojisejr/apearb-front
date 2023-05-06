import { FunctionComponent, PropsWithChildren } from "react";
import BorderBox from "../Shared/BorderBox";

const RoadmapBox: FunctionComponent<PropsWithChildren> = () => {
  return (
    <div className="flex flex-col justify-center w-full mb-10 items-center gap-2 text-pepe_white pb-[10%]">
      <div className="text-[60px] mb-10">ROADMAP</div>
      <p className="text-[25px] max-w-[1200px]">
        You think this is just a meme? We are $pepekub, a quality meme coin. We
        {"'"}re not joking around. Let{"'"}s wait and see. Handing out from the
        first day of the great journey.
      </p>

      <div className="flex gap-5 mt-5">
        <BorderBox>
          <div className="text-center mb-2 text-xl">Phase 1</div>
          <ul className="text-center font-thin">
            <li>Whitelist NFT</li>
            <li>Launch</li>
            <li>List $PEPEKRUB swap</li>
            <li>Free mint NFT</li>
            <li>Honeypot</li>
            <li>1,000+ Holders</li>
            <li>CoinGecko/Coinmarketcap{" "}Listings</li>
          </ul>
        </BorderBox>
        <BorderBox>
          <div className="text-center mb-2 text-xl">Phase 2</div>
          <ul className="text-center font-thin">
            <li>PEPE Defi</li>
            <li>Club</li>
            <li>Earn</li>
            <li>Gashapon Machine Game Burn</li>
            <li>Cross-Chain CEX Listings</li>
            <li> 10,000+holders</li>
          </ul>
        </BorderBox>
        <BorderBox>
          <div className="text-center mb-2 text-xl">Phase 3</div>
          <ul className="text-center font-thin">
            <li>LaunchPad</li>
            <li>Meme Club</li>
            <li>Pepekrub on Dubai</li>
            <li>T1 Exchange Listings</li>
            <li>100,000+ holders</li>
            <li>Meme Takeover</li>
          </ul>
        </BorderBox>
      </div>
    </div>
  );
};

export default RoadmapBox;
