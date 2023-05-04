import Image from "next/image";
import { FunctionComponent, PropsWithChildren } from "react";
import styles from "./Title.module.css";

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
          <ul className="flex gap-2 mt-10">
            <li>
              <Image
                src="/images/twitter.png"
                alt="twitter"
                width={100}
                height={100}
              />
            </li>
            <li>
              <Image src="/images/tg.png" alt="tg" width={100} height={100} />
            </li>
            <li>
              <Image
                src="/images/bitkub.png"
                alt="bitkub"
                width={100}
                height={100}
              />
            </li>
          </ul>
        </div>
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
