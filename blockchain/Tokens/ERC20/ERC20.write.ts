import { useContractWrite } from "wagmi";
import { contracts } from "../../contract";
import { useGetPotData } from "../../HoneyPot/Pot.read";
import { useAppContext } from "../../../hooks/context";
import { BigNumber, BigNumberish, ethers } from "ethers";
import { useAppSwapContext } from "../../../hooks/swapContext";
import { notify } from "../../../helpers/notify";

export function useApprove() {
  const { potData } = useGetPotData();
  const { setApprove, setLoading } = useAppContext();
  const approveTokenNum = BigNumber.from(100).mul(
    potData?.price.bignum! == undefined
      ? BigNumber.from(100)
      : (potData?.price.bignum as BigNumberish)
  );

  const approve = useContractWrite({
    ...contracts.pepe,
    functionName: "approve",
    args: [contracts.pot.address, approveTokenNum.toString()],
    mode: "recklesslyUnprepared",
    onError() {
      setLoading(false);
      setApprove(false);
    },
    onSuccess(data: any) {
      setLoading(false);
      setApprove(true);
    },
  });

  return {
    approve: approve.write,
  };
}

export function useApproveForSwap(swapAmount: number) {
  const { setApproveLoading } = useAppSwapContext();
  const swapAmountBigNum = ethers.utils.parseEther(swapAmount.toString());

  const approve = useContractWrite({
    ...contracts.pepe,
    functionName: "approve",
    args: [contracts.diamon.address, swapAmountBigNum.toString()],
    mode: "recklesslyUnprepared",
    onError() {
      setApproveLoading(false);
    },
    onSuccess(data: any) {
      // setApproveLoading(false);
    },
  });

  return {
    approveForSwap: approve.write,
  };
}
