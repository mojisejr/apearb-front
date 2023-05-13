import { useAccount } from "wagmi";
import { useGetMetadataOf } from "../../blockchain/HoneyPot/Pot.read";
import Image from "next/image";

const NFTList = () => {
  const { address } = useAccount();
  const { metadata } = useGetMetadataOf(address!);

  return (
    <div className="p-2 h-[200px] overflow-scroll scroll-smooth">
      <div className="text-xl">NFT List</div>
      {metadata.length > 0 ? (
        <div className="grid grid-cols-4">
          {metadata.map((m) => (
            <Image
              key={m.name}
              src={m.image as string}
              alt="pot token"
              height={150}
              width={150}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default NFTList;
