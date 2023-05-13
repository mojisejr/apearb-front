import { useContractReads, useContractRead } from "wagmi";
import { contracts } from "../contract";
import { BigNumber } from "ethers";
import { parsePotData } from "./utils/parsePotData";
import { useState } from "react";
import { IPotData } from "../../interfaces/iPotData";
import { parsePotMetadata } from "./utils/parsePotMetadata";

function useGetPotData() {
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

function useGetWinner(round: string) {
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

function useGetMetadataOf(owner: `0x${string}`) {
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

export { useGetPotData, useGetWinner, useGetMetadataOf };
