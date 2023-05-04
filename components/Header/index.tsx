import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, PropsWithChildren } from "react";
import { ConnectWalletButton } from "../ConnectWalletBtn";

const Header: FunctionComponent<PropsWithChildren> = () => {
  return (
    <div className="bg-pepe_green1 h-[100px] flex justify-evenly items-center">
      <div className="w-36">
        <Image src="/images/pepelogo.png" alt="logo" width={250} height={250} />
      </div>
      <div
        className="hidden
      tabletM:block"
      >
        <ul className="flex gap-4 text-pepe_white font-thin">
          <li className="hover:underline">
            <Link href="/">HOME</Link>
          </li>
          <li className="hover:underline">
            <Link href="/about">ABOUT</Link>
          </li>
          <li className="hover:underline">
            <Link href="/howtobuy">HOW TO BUY</Link>
          </li>
          <li className="hover:underline">
            <Link href="/tokenomic">TOKENOMIC</Link>
          </li>
          <li className="hover:underline">
            <Link href="/roadmap">ROADMAP</Link>
          </li>
          <li className="hover:underline">
            <Link href="/nft">NFT</Link>
          </li>
          <li className="hover:underline">
            <Link href="/pot">HONEY POT</Link>
          </li>
          <li className="hover:underline">
            <Link href="/earn">EARN</Link>
          </li>
          <li className="hover:underline">
            <Link href="/defi">DEFI</Link>
          </li>
        </ul>
      </div>
      <div>
        <ConnectWalletButton />
      </div>
    </div>
  );
};

export default Header;
