import Image from "next/image";
import { ConnectWalletButton } from "./ConnectWalletBtn";
import RegisterButton from "./RegisterButton";
import LoginButton from "./LoginButton";
import { CgMoveLeft, CgMoveRight } from "react-icons/cg";

import { useMenu } from "../hooks/context";

const Header = () => {
  const { open, close, isOpen } = useMenu();

  function toggle() {
    if (isOpen) {
      console.log("closing");
      close();
    } else {
      console.log("opening");
      open();
    }
  }

  return (
    <div className="relative flex justify-between pt-[20px] pr-[20px] pl-[20px]">
      <button
        id="left-zone"
        className="flex-0 hover:text-ape_yellow hover:transition-all 2s"
        onClick={toggle}
      >
        {isOpen ? (
          <CgMoveLeft size={40} />
        ) : (
          <div className="flex items-center">
            <Image
              src="/images/apelogo1.png"
              alt="logo"
              width={150}
              height={150}
            />
            <CgMoveRight size={40} />
          </div>
        )}
      </button>
      <div
        id="right-zone"
        className="flex-0 flex justify-center items-start gap-3"
      >
        <ConnectWalletButton />
        <LoginButton />
        <RegisterButton />
      </div>
    </div>
  );
};

export default Header;
