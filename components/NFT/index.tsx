import { FunctionComponent, PropsWithChildren } from "react";
import Image from "next/image";
import styles from "../Home/Title.module.css";
import NFTAirdrop from "./Airdrop";
import Inventory from "./Inventory";
import { useAccount } from "wagmi";

const NFTBox: FunctionComponent<PropsWithChildren> = () => {
  const { isConnected } = useAccount();
  return (
    <div
      className={`flex ${
        isConnected ? "flex-col" : ""
      } itmes-center justify-center w-full items-center gap-2 text-pepe_white`}
    >
      {/* <NFTBasePage /> */}

      {/* {isConnected ? <NFTAirdrop /> : <NFTBasePage />} */}
      {isConnected ? <Inventory /> : null}
    </div>
  );
};

function NFTBasePage() {
  return (
    <>
      <div className="max-w-[600px]">
        <div className={`text-[60px] ${styles.textStroke}`}>Free Mint NFT</div>
        <div className="text-[20px] pb-10">
          We have NFT for you. <br />
          Hhhhaaha PEPEKRUB nft. the AI Generated NFT <br />
          Sell 10$ ? <br />
          Sell 5 $ ? <br />
          NO!! <br />
          That Free !! <br />
        </div>
        <div className="text-[25px]">Comming Pepekrubbb! soon !</div>
      </div>
      <div>
        <Image src="/images/two.png" width={400} height={400} alt="two" />
      </div>
    </>
  );
}

export default NFTBox;
