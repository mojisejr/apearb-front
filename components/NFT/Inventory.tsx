import { SyntheticEvent, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import {
  useGetMetadataOf,
  useGetNftTokensOfOwner,
} from "../../blockchain/NFT/Nft/Nft.read";
import Image from "next/image";
import BorderBox from "../Shared/BorderBox";
import Select from "react-select";
import {
  useGetIsApprovalForAllWithGen1,
  useGetTokensOfOwner,
} from "../../blockchain/HoneyPot/Pot.read";
import { notify } from "../../helpers/notify";
import { useApprovalForAllWithGen1 } from "../../blockchain/HoneyPot/Pot.write";

const Inventory = () => {
  const { isConnected } = useAccount();
  const { metadata, refetchMeta } = useGetMetadataOf();
  const { tokensOfOwner } = useGetTokensOfOwner();
  const { nftTokensOfOwner } = useGetNftTokensOfOwner();
  const { approvePotToNft } = useApprovalForAllWithGen1();
  const { approvedWithGen1, reApproveWithGen1 } =
    useGetIsApprovalForAllWithGen1();
  const [gen1, setGen1] = useState<{ value: number; label: string }[]>([]);
  const [potTokens, setPotTokens] = useState<
    { value: number; label: string }[]
  >([]);

  const [selectedGen1, setSelectGen1] = useState<number>(0);
  const [selectedPots, setSelectedPot] = useState<number[]>([]);

  useEffect(() => {
    if (tokensOfOwner.length > 0) {
      const pots = tokensOfOwner.map((t) => {
        return {
          value: t,
          label: `Pot #${t}`,
        };
      });
      setPotTokens(pots);
    }

    if (nftTokensOfOwner.length > 0) {
      const gen1 = nftTokensOfOwner.map((n) => {
        return {
          value: n,
          label: `PPG #${n}`,
        };
      });
      setGen1(gen1);
    }
  }, [tokensOfOwner, nftTokensOfOwner]);

  useEffect(() => {
    if (isConnected) {
      refetchMeta();
    }
    if (!approvedWithGen1) {
      reApproveWithGen1();
    }
  }, [isConnected, approvedWithGen1]);

  function handleUplevel(e: SyntheticEvent) {
    e.preventDefault();
    if (selectedGen1 <= 0 || selectedPots.length <= 0) {
      notify("please select both gen1 and pot tokens");
    }
  }

  function handleApproveWithGen1(e: SyntheticEvent) {
    if (!approvedWithGen1) {
      approvePotToNft();
    }
  }

  return (
    <div className="">
      {metadata == undefined ? null : (
        <div>
          {metadata.length <= 0 ? (
            <div>Loading..</div>
          ) : (
            <div className="w-[800px]">
              <div className="text-[50px]">Inventory</div>
              <div>
                <div>level UP!</div>
                <BorderBox>
                  <div className="flex flex-col gap-2">
                    <Select
                      placeholder="select your PepeKub Gen1"
                      className="text-pepe_black"
                      options={gen1}
                      isClearable
                      onChange={(v) => setSelectGen1(v?.value!)}
                    />
                    <Select
                      placeholder="select PPOT Token for level up!"
                      isMulti
                      isClearable
                      className="text-pepe_black"
                      options={potTokens}
                      onChange={(v) => setSelectedPot(v.map((p) => p.value))}
                    />

                    {approvedWithGen1 ? (
                      <button
                        className="bg-pepe_green1 pl-3 pr-3 pt-1 pb-1 rounded-md shadow-xl"
                        onClick={(e) => handleUplevel(e)}
                      >
                        Up!
                      </button>
                    ) : (
                      <button
                        className="bg-pepe_green1 pl-3 pr-3 pt-1 pb-1 rounded-md shadow-xl"
                        onClick={(e) => handleApproveWithGen1(e)}
                      >
                        Approve your Pot to NFT!
                      </button>
                    )}
                  </div>
                </BorderBox>
              </div>
              <div className="flex gap-[10px] overflow-scroll p-3">
                {metadata.map((m, index) => (
                  <BorderBox key={index}>
                    <div className="nft-container flex flex-col gap-2 justify-center items-center">
                      <div className="image-box">
                        <Image
                          src={m.image as string}
                          width={150}
                          height={150}
                          alt={"img"}
                        />
                      </div>
                      <div className="status-box">
                        <ul>
                          <li>name: {m.name}</li>
                          {m.attributes?.map((a, index) => (
                            <li key={index}>
                              {a.trait_type}: {a.value}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="button flex gap-2 justify-center">
                      <div className="bg-pepe_green1 pl-3 pr-3 pt-1 pb-1 rounded-md shadow-xl">
                        evolution
                      </div>
                    </div>
                  </BorderBox>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Inventory;
