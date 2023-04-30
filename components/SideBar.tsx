import Image from "next/image";
import Link from "next/link";
import { FaGamepad, FaFlagCheckered } from "react-icons/fa";
import { FiGift, FiHelpCircle } from "react-icons/fi";
import { GiCrystalShine } from "react-icons/gi";
import { RiStackFill } from "react-icons/ri";

const SideBar = () => {
  return (
    <div className="flex flex-col items-center">
      <Image src="/images/apelogo1.png" width={200} height={200} alt="Logo" />
      <ul className="flex flex-col gap-[20px]">
        <li>
          <Link href="" className="flex gap-2 items-center hover:underline">
            <FaGamepad color="white" size={25} />
            Games
          </Link>
        </li>
        <li>
          <Link href="" className="flex gap-2 items-center hover:underline">
            <FiGift color="white" size={25} />
            Claim
          </Link>
        </li>
        <li>
          <Link href="" className="flex gap-2 items-center hover:underline">
            <GiCrystalShine color="white" size={25} />
            Buy NFT
          </Link>
        </li>
        <li>
          <Link href="" className="flex gap-2 items-center hover:underline">
            <FaFlagCheckered color="white" size={25} />
            Road Map
          </Link>
        </li>
        <li>
          <Link href="" className="flex gap-2 items-center hover:underline">
            <RiStackFill color="white" size={25} />
            Staking
          </Link>
        </li>
        <li>
          <Link href="" className="flex gap-2 items-center hover:underline">
            <FiHelpCircle color="white" size={25} />
            Help
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
