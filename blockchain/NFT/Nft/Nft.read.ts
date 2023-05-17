import { useContractRead } from "wagmi";
import { useAccount } from "wagmi";
import { contracts } from "../../contract";
import { parseNFTMetadata } from "./utils/parseNftMetadata";
import { useState } from "react";

export function useGetMetadataOf() {
  const { address } = useAccount();
  const [metadata, setMetadata] = useState<
    {
      name?: string;
      description?: string;
      image?: string;
      attributes?: { trait_type: string; value: any }[];
    }[]
  >([]);

  const { refetch } = useContractRead({
    ...contracts.gen1,
    functionName: "getMetadataOf",
    args: [address],
    onSuccess(data: string[]) {
      setMetadata(parseNFTMetadata(data));
    },
  });

  return {
    metadata,
    refetchMeta: refetch,
  };
}
