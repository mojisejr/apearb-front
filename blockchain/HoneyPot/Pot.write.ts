import { useContractWrite } from "wagmi";
import { contracts } from "../contract";
import { useAppContext } from "../../hooks/context";
import { ethers } from "ethers";
import { useGetPotData } from "./Pot.read";

export function useBuyTicket(num: number) {
  const { setMinting, setLoading } = useAppContext();
  const { potData } = useGetPotData();
  const totalPrice = num * parseFloat(potData?.fee.ether!) || 0;
  const buyData = useContractWrite({
    ...contracts.pot,
    functionName: "mintLotto",
    args: [num],
    mode: "recklesslyUnprepared",
    onError() {
      setMinting(false);
    },
    onSuccess(data: any) {
      setMinting(false);
    },
    overrides: {
      value: ethers.utils.parseEther(totalPrice.toString()),
    },
  });

  return {
    mint: buyData.write,
  };
}
