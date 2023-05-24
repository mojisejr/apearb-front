import Image from "next/image";
import {
  FunctionComponent,
  PropsWithChildren,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import styles from "./Title.module.css";
import Link from "next/link";
import { useAccount } from "wagmi";
import {
  useAirdropUser,
  useReadAirdropData,
} from "../../blockchain/Airdrop/Airdrop.read";
import { useClaim } from "../../blockchain/Airdrop/Airdrop.write";
import CountdownTimer from "../Shared/Countdown";
import { useReadApproveForBuy } from "../../blockchain/Tokens/ERC20/ERC20.read";
import {
  useReadPause,
  useReadStartTime,
} from "../../blockchain/NFT/Sale/sale.read";
import { useApproveForBuyNft } from "../../blockchain/Tokens/ERC20/ERC20.write";
import { useMint } from "../../blockchain/NFT/Sale/sale.write";
import { ethers } from "ethers";

const Title: FunctionComponent<PropsWithChildren> = () => {
  const [end, setEnd] = useState(false);
  const [amount, setAmount] = useState<number>(1);
  const { isConnected, address } = useAccount();

  const { approveBuy, refetchBuy } = useReadApproveForBuy(
    amount <= 0 ? 1 : amount
  );
  const { start, refetchStart } = useReadStartTime();
  const { pause, refetchPause } = useReadPause();

  const { approveForBuyNft } = useApproveForBuyNft(amount <= 0 ? 1 : amount);
  const { buy } = useMint(amount <= 0 ? 1 : amount);

  useEffect(() => {
    setEnd(false);
    refetchStart();
    refetchPause();
    refetchBuy();
  }, [isConnected, address]);

  function handleMint(e: SyntheticEvent) {
    e.preventDefault();
    buy();
  }

  function handleApprove(e: SyntheticEvent) {
    e.preventDefault();
    approveForBuyNft();
  }

  return (
    <div className="flex justify-center w-full items-center gap-2 text-pepe_white pb-[10%]">
      <div
        className="flex flex-col items-center
      tabletM:items-start"
      >
        <div
          className="flex justify-center items-center gap-3
        "
        >
          <div className={`text-[4rem] ${styles.textStroke}`}>$</div>
          <div className={`text-[3rem] ${styles.textStroke}`}>PepeKrub</div>
        </div>
        <div
          className="text-[25px] pl-5
        tabletM:pl-0"
        >
          When PEPE visits the kub chain. <br /> Pepe disciples will make
          Pepekrub <br /> the new chapter of the kub chain legend.
        </div>
        <div>
          <ul className="flex gap-2 mt-10 items-center">
            <li className="drop-shadow-xl">
              <Image
                src="/images/coin.png"
                alt="bitkub"
                width={100}
                height={100}
              />
            </li>
            <li className="drop-shadow-xl">
              <Link href="https://twitter.com/PepeKrub" target="_blank">
                <Image
                  src="/images/twitter.png"
                  alt="twitter"
                  width={100}
                  height={100}
                />
              </Link>
            </li>
            <li className="drop-shadow-xl">
              <Link href="https://t.me/PepeKrub" target="_blank">
                <Image src="/images/tg.png" alt="tg" width={100} height={100} />
              </Link>
            </li>
            <li className="drop-shadow-xl">
              <Image
                src="/images/bitkub.png"
                alt="bitkub"
                width={100}
                height={100}
              />
            </li>
          </ul>
        </div>
        {/* <Link
          href="/howtobuy"
          className="mt-5 pl-3 pr-3 pt-2 pb-2 bg-pepe_green1 text-[25px]
          border-[2px] border-pepe_white
          rounded-md hover:underline
          hover:shadow-[0px_0px_30px_6px_rgb(255,255,0)] transition-all 0.2"
        >
          Buy Pepe Noi Krub!
        </Link> */}
        {end ? (
          <div>
            {isConnected ? (
              <div
                className="mt-5 pl-3 pr-3 pt-2 pb-2 bg-pepe_green1 text-[25px]
          border-[2px] border-pepe_white
          rounded-md 
          hover:shadow-[0px_0px_30px_6px_rgb(255,255,0)] transition-all 0.2"
              >
                <div>Mint GEN1 SSR here !!</div>
                {!pause ? (
                  <form>
                    <input
                      type="number"
                      placeholder="amount to mint"
                      value={amount}
                      onChange={(e: any) => setAmount(e.target.value)}
                      className="text-pepe_green1 text-center p-2 rounded-md"
                    ></input>
                    <div className="flex gap-3">
                      <button
                        className="hover:underline disabled:text-pepe_black"
                        onClick={(e) => handleApprove(e)}
                        disabled={approveBuy}
                      >
                        approve
                      </button>
                      <button
                        className="hover:underline disabled:text-pepe_black"
                        disabled={!approveBuy}
                        onClick={(e) => handleMint(e)}
                      >
                        mint
                      </button>
                    </div>
                    <div className="text-[15px]">
                      price:{" "}
                      {ethers.utils.formatEther(
                        "3000000000000000000000000000000"
                      )}
                      {" Pepe/NFT "}
                    </div>
                  </form>
                ) : (
                  <div>To be honest. Our airdrop is not for you krub!</div>
                )}
              </div>
            ) : (
              <div
                className="mt-5 pl-3 pr-3 pt-2 pb-2 bg-pepe_green1 text-[25px]
          border-[2px] border-pepe_white
          rounded-md hover:underline
          hover:shadow-[0px_0px_30px_6px_rgb(255,255,0)] transition-all 0.2"
              >
                MINTING TIME! Connect Wallet!
              </div>
            )}
          </div>
        ) : (
          <div className="mt-5">
            <CountdownTimer endtimeMs={start} setCanSettle={setEnd} />
          </div>
        )}
      </div>
      <div
        className="hidden
      tabletM:block"
      >
        <Image
          src="/images/pepeleft.png"
          width={400}
          height={400}
          alt="left-pepe"
        />
      </div>
    </div>
  );
};

export default Title;
