import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useGetMetadataOf } from "../../blockchain/NFT/Nft/Nft.read";
import Image from "next/image";
import BorderBox from "../Shared/BorderBox";

const Inventory = () => {
  const { isConnected } = useAccount();
  const { metadata, refetchMeta } = useGetMetadataOf();

  useEffect(() => {
    if (isConnected) {
      refetchMeta();
    }
  }, [isConnected]);

  return (
    <div className="">
      {metadata == undefined ? null : (
        <div>
          {metadata.length <= 0 ? (
            <div>Loading..</div>
          ) : (
            <div>
              <div className="text-[50px]">Inventory</div>
              <div className="max-w-[800px] flex gap-[10px] overflow-scroll p-3">
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
                    <div className="button flex gap-2 justify-end">
                      <div className="bg-pepe_green1 pl-3 pr-3 pt-1 pb-1 rounded-md shadow-xl">
                        uplevel
                      </div>
                      <div className="bg-pepe_black pl-3 pr-3 pt-1 pb-1 rounded-md shadow-xl">
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
