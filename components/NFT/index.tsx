import { FunctionComponent, PropsWithChildren } from "react";
import Image from "next/image";
import styles from "../Home/Title.module.css";

const NFTBox: FunctionComponent<PropsWithChildren> = () => {
  return (
    <div className="flex justify-center w-full mb-10 items-center gap-2 text-pepe_white pb-[10%]">
      <div className="max-w-[600px]">
        <div className={`text-[60px] ${styles.textStroke}`}>Free Mint NFT</div>
        <div className="text-[20px] pb-10">
          You want to airdrop $PEPEKUB, right? <br />
          We don{"'"}t have it for you. <br />
          But don{"'"}t be sad. We have NFT for you. <br />
          Hhhhaaha PEPEKUB nft generate by ai <br />
          Sell 10$ ? <br />
          Sell 5 $ ? <br />
          NO!! <br />
          That Free !! <br />
        </div>
        <div className="text-[25px]">Comming Pepely soon !</div>
      </div>
      <div>
        <Image src="/images/two.png" width={400} height={400} alt="two" />
      </div>
    </div>
  );
};

export default NFTBox;
