import { useContractWrite } from "wagmi";
import { contracts } from "../../contract";
import { useGetPotData } from "../../HoneyPot/Pot.read";
import { useAppContext } from "../../../hooks/context";
import { BigNumber, BigNumberish } from "ethers";

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
