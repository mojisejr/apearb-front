import { useContractReads, useContractRead, useAccount } from "wagmi";
import { contracts } from "../contract";
import { BigNumber } from "ethers";
import { parsePotData } from "./utils/parsePotData";
import { useState } from "react";
import { IPotData } from "../../interfaces/iPotData";
import { parsePotMetadata } from "./utils/parsePotMetadata";
import { notify } from "../../helpers/notify";

export function useGetPotData() {
  const [a, setData] = useState<IPotData | undefined>(undefined);
  const data = useContractReads({
    contracts: [
      {
        ...contracts.pot,
        functionName: "endTime",
      },
      {
        ...contracts.pot,
        functionName: "_price",
      },
      {
        ...contracts.pot,
        functionName: "_fee",
      },
      {
        ...contracts.pot,
        functionName: "_currentTokenId",
      },
      {
        ...contracts.pot,
        functionName: "ROUND",
      },
      {
        ...contracts.pot,
        functionName: "ROUND_MINTED_COUNT",
      },
      { ...contracts.pot, functionName: "WINNER_PICKED" },
      {
        ...contracts.pot,
        functionName: "paused",
      },
    ],
    onSuccess(
      data: [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean
      ]
    ) {
      const potData = parsePotData(data);
      setData(potData);
    },
  });

  return {
    potData: a,
    refetchPotData: data.refetch,
  };
}

export function useGetWinner(round: string) {
  const [winner, setWinner] = useState<string>("");
  useContractRead({
    ...contracts.pot,
    functionName: "getWinningOfRound",
    args: [round],
    onSuccess(data: string) {
      setWinner(data);
    },
  });

  return { winner };
}

export function useGetMetadataOf(owner: `0x${string}`) {
  const [metadata, setMetadata] = useState<
    {
      name?: string;
      description?: string;
      image?: string;
    }[]
  >([]);
  useContractRead({
    ...contracts.pot,
    functionName: "metadataOfOwner",
    args: [owner],
    onSuccess(data: string[]) {
      if (!data) return;
      const metadata = parsePotMetadata(data);
      setMetadata(metadata);
    },
  });

  return {
    metadata,
  };
}

export function useGetTokensOfOwner() {
  const [tokenIds, setTokenIds] = useState<number[]>([]);
  const { address } = useAccount();

  useContractRead({
    ...contracts.pot,
    functionName: "tokensOfOwner",
    args: [address],
    onSuccess(data: BigNumber[]) {
      const tokens = data.map((d) => +d.toString());
      setTokenIds(tokens);
    },
  });

  return {
    tokensOfOwner: tokenIds,
  };
}

export function useGetIsApprovalForAllWithGen1() {
  const { address } = useAccount();
  const [approved, setApproved] = useState<boolean>(false);

  const { refetch } = useContractRead({
    ...contracts.pot,
    functionName: "isApprovedForAll",
    args: [address, contracts.gen1.address],
    onError(error) {
      notify("Have to approve before uplevel");
    },
    onSuccess(data: boolean) {
      setApproved(data);
    },
  });

  return {
    approvedWithGen1: approved,
    reApproveWithGen1: refetch,
  };
}
