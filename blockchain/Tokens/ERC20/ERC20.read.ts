import { useAccount, useContractRead } from "wagmi";
import { contracts } from "../../contract";
import { useGetPotData } from "../../HoneyPot/Pot.read";
import { useAppContext } from "../../../hooks/context";
import { BigNumber, BigNumberish } from "ethers";
import { useState } from "react";

export function useReadApprove() {
  const { potData } = useGetPotData();
  const { address } = useAccount();
  const { setApprove } = useAppContext();
  const approveTokenNum = BigNumber.from(100).mul(
    potData?.price.bignum! == undefined
      ? BigNumber.from(100)
      : (potData?.price.bignum as BigNumberish)
  );

  const [data, setData] = useState<boolean>(false);

  const approve = useContractRead({
    ...contracts.pepe,
    functionName: "allowance",
    args: [address, contracts.pot.address],
    onError(error) {
      setApprove(false);
    },
    onSuccess(allowance: BigNumber) {
      if (allowance.gte(approveTokenNum)) {
        setData(true);
        setApprove(true);
      } else {
        setData(false);
        setApprove(false);
      }
    },
  });

  return {
    approveRead: data,
  };
}
