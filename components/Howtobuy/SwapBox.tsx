import {
  FunctionComponent,
  PropsWithChildren,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import Image from "next/image";

import { useForm } from "react-hook-form";
import { RiArrowUpDownFill } from "react-icons/ri";
import { BiReset } from "react-icons/bi";

import { useGetAmountOut } from "../../blockchain/DiamonFinance/Router/Router.read";
import {
  useSwapExacEthForTokens,
  useSwapExacTokensForEth,
} from "../../blockchain/DiamonFinance/Router/Router.write";
import { useReadApproveForSwap } from "../../blockchain/Tokens/ERC20/ERC20.read";
import { useApproveForSwap } from "../../blockchain/Tokens/ERC20/ERC20.write";
import {
  useSwapApprovalEvent,
  useTokenTransferEvent,
} from "../../blockchain/Tokens/ERC20/ERC20.event";
import { useAppSwapContext } from "../../hooks/swapContext";

type Inputs = {
  token0: number;
};

const SwapBox: FunctionComponent<PropsWithChildren> = () => {
  const { isSwapLoading, isApproveLoading, setSwapLoading, setApproveLoading } =
    useAppSwapContext();

  const { register, watch, resetField } = useForm<Inputs>();

  const { approveSwap, refetchSwap } = useReadApproveForSwap(
    watch("token0") == undefined ? 0 : +watch("token0")
  );

  const { approveForSwap } = useApproveForSwap(
    watch("token0") == undefined ? 0 : +watch("token0")
  );
  const { swapData } = useGetAmountOut(
    watch("token0") == undefined ? 0 : +watch("token0")
  );
  const [selected, setSelected] = useState(false);

  const { swapExacEthForTokens } = useSwapExacEthForTokens(
    watch("token0") == undefined ? 0 : +watch("token0")
  );
  const { swapExacTokensForEth } = useSwapExacTokensForEth(
    watch("token0") == undefined ? 0 : +watch("token0")
  );

  useEffect(() => {
    refetchSwap();
  }, [watch("token0")]);

  //Event Listener
  useSwapApprovalEvent();
  useTokenTransferEvent();

  function handleSwap(e: SyntheticEvent) {
    setSwapLoading(true);
    e.preventDefault();
    if (selected && approveSwap) {
      swapExacTokensForEth();
    } else {
      swapExacEthForTokens();
    }
  }

  function handleApprove(e: SyntheticEvent) {
    setApproveLoading(true);
    e.preventDefault();
    if (!approveSwap) {
      approveForSwap();
    }
  }

  function handleSelected(e: SyntheticEvent) {
    e.preventDefault();
    setSelected(!selected);
  }

  function handleReset(e: SyntheticEvent) {
    e.preventDefault();
    resetField("token0");
  }

  return (
    <div className="w-[425px] max-w-[600px] bg-pepe_green1 flex flex-col gap-2 p-[15px] rounded-xl shadow-2xl border-[1px]">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-[30px]">Swap</div>
          <div className="font-thin">Swap your Kub to Pepe noi Krub!</div>
        </div>
        <div className="flex gap-2 justify-center items-center">
          {/* <BsFillGearFill /> */}
          {/* <BsQuestionCircle /> */}
          <button onClick={(e) => handleReset(e)}>
            <BiReset size={30} />
          </button>
        </div>
      </div>
      <hr />
      <div>
        <form className="flex flex-col gap-[30px] w-full p-8">
          <div className="flex gap-2">
            <input
              className="w-full p-2 rounded-xl text-pepe_white text-center bg-pepe_white bg-opacity-40 
              disabled:bg-pepe_green1
              disabled:border-[1px]
              disabled:border-[#666]"
              disabled={isApproveLoading || isSwapLoading}
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
            type="button"
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
                  ? parseFloat(swapData?.ethToToken.output).toFixed(3)
                  : parseFloat(swapData?.tokenToEth.output).toFixed(3)
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
            <>
              {selected ? (
                <button
                  type="button"
                  disabled={isApproveLoading || approveSwap}
                  className="border-[1px] p-3 rounded-xl w-full 
                  disabled:text-pepe_black 
                  disabled:text-opacity-50"
                  onClick={(e) => handleApprove(e)}
                >
                  {!isApproveLoading ? "Approve" : "Approving"}
                </button>
              ) : null}
            </>
            <>
              {selected ? (
                <button
                  type="button"
                  className="border-[1px] p-3 rounded-xl w-full
                disabled:text-pepe_black 
                disabled:text-opacity-50"
                  disabled={isSwapLoading || !approveSwap}
                  onClick={(e) => handleSwap(e)}
                >
                  {!isSwapLoading ? "Swap" : "Swaping"}
                </button>
              ) : (
                <button
                  type="button"
                  className="border-[1px] p-3 rounded-xl w-full
                disabled:text-pepe_black 
                disabled:text-opacity-50"
                  disabled={isSwapLoading || +watch("token0") <= 0}
                  onClick={(e) => handleSwap(e)}
                >
                  {!isSwapLoading ? "Swap" : "Swaping"}
                </button>
              )}
            </>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SwapBox;
