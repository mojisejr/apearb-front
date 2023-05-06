import {
  FunctionComponent,
  PropsWithChildren,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { BsFillGearFill, BsQuestionCircle } from "react-icons/bs";
import { RiArrowUpDownFill } from "react-icons/ri";
import { contracts } from "../../blockchain/contract";
import { useGetAmountOut } from "../../blockchain/DiamonFinance/Router/Router.read";

type Inputs = {
  token0: number;
};

const SwapBox: FunctionComponent<PropsWithChildren> = () => {
  const { register, watch } = useForm<Inputs>();
  const { swapData } = useGetAmountOut(
    watch("token0") == undefined ? 0 : +watch("token0")
  );
  const [selected, setSelected] = useState(false);

  function handleSelected(e: SyntheticEvent) {
    e.preventDefault();
    setSelected(!selected);
  }

  return (
    <div className="w-[425px] max-w-[600px] bg-pepe_green1 flex flex-col gap-2 p-[15px] rounded-xl shadow-2xl border-[1px]">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-[30px]">Swap</div>
          <div className="font-thin">Swap your Kub to Pepe noi Krub!</div>
        </div>
        <div className="flex gap-2">
          <BsFillGearFill />
          <BsQuestionCircle />
        </div>
      </div>
      <hr />
      <div>
        <form className="flex flex-col gap-[30px] w-full p-8">
          <div className="flex gap-2">
            <input
              className="w-full p-2 rounded-xl text-pepe_white text-center bg-pepe_white bg-opacity-40 "
              type="number"
              {...register("token0")}
            />
            <Image
              src={!selected ? "/images/bitkub.png" : "/images/coin.png"}
              width={50}
              height={50}
              alt="token0"
            />
          </div>
          <button
            className="flex justify-center items-center pr-12"
            onClick={(e) => handleSelected(e)}
          >
            <RiArrowUpDownFill size={35} />
          </button>
          <div className="flex gap-2">
            <input
              className="w-full p-2 rounded-xl text-pepe_white text-center bg-pepe_white bg-opacity-40"
              disabled={true}
              type="number"
              value={
                !selected
                  ? swapData?.ethToToken.output
                  : swapData?.tokenToEth.output
              }
            />
            <Image
              src={!selected ? "/images/coin.png" : "/images/bitkub.png"}
              width={50}
              height={50}
              alt="token1"
            />
          </div>
          <div className="flex justify-evenly gap-10">
            <button className="border-[1px] p-3 rounded-xl w-full">
              Approve
            </button>
            <button className="border-[1px] p-3 rounded-xl w-full">Swap</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SwapBox;
