import { FunctionComponent, PropsWithChildren } from "react";
import Image from "next/image";
import styles from "../Home/Title.module.css";

const HoneyPotBox: FunctionComponent<PropsWithChildren> = () => {
  return (
    <div className="flex flex-col justify-center w-full items-center gap-2 text-pepe_white pb-[10%]">
      <div className={`text-[60px] ${styles.textStroke} mb-10`}>Honey Pot</div>
      <div>
        <Image src="/images/blue.png" width={500} height={500} alt="blue" />
      </div>
    </div>
  );
};

export default HoneyPotBox;
