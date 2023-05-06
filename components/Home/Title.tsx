import Image from "next/image";
import { FunctionComponent, PropsWithChildren } from "react";
import styles from "./Title.module.css";
import Link from "next/link";

const Title: FunctionComponent<PropsWithChildren> = () => {
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
          pepekub <br /> the new chapter of the kub chain legend.
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
        <Link
          href="/howtobuy"
          className="mt-5 pl-3 pr-3 pt-2 pb-2 bg-pepe_green1 text-[25px]
          border-[2px] border-pepe_white
          rounded-md hover:underline
          hover:shadow-[0px_0px_30px_6px_rgb(255,255,0)] transition-all 0.2"
        >
          Buy Pepe Noi Krub!
        </Link>
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
