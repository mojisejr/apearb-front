import Link from "next/link";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineSwap } from "react-icons/ai";
import { config } from "../../constants/config";
export const OutsideLinks = () => {
  return (
    <div className="flex flex-col items-end mt-2">
      <div className="flex gap-2 items-center">
        <AiOutlineSwap />
        <Link href={config.diamonURI}>Swap on Diamon finance</Link>
      </div>
      <div className="flex gap-2 items-center">
        <BsGraphUpArrow />
        <Link href={config.pepeGraphUrl}>Pepe Graph Krub</Link>
      </div>
    </div>
  );
};

export default OutsideLinks;
