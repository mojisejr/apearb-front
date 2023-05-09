import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, PropsWithChildren } from "react";
import { ConnectWalletButton } from "../ConnectWalletBtn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header: FunctionComponent<PropsWithChildren> = () => {
  return (
    <div className="relative bg-pepe_green1 h-[100px] flex justify-evenly items-center">
      <div className="absolute top-2 right-2">
        <ToastContainer />
      </div>
      <div
        className="w-36
      tabletM:w-[250px]"
      >
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
          <li
            className="font-bold  bg-pepe_white text-pepe_green1 pl-2 pr-2 rounded-sm
          hover:underline
          hover:text-pepe_black
          hover:shadow-[0px_0px_30px_6px_rgb(255,255,0)]
          transition-all 0.2"
          >
            <Link href="/howtobuy">BUY!</Link>
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
