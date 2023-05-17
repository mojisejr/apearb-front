import { useEffect } from "react";
import { useAccount } from "wagmi";
import { useClaimabled } from "../../blockchain/NFT/Airdrop/Nftdrop.read";
import BorderBox from "../Shared/BorderBox";
import { useNFTClaim } from "../../blockchain/NFT/Airdrop/Nftdrop.write";

const NFTAirdrop = () => {
  const { isConnected } = useAccount();
  const { isClaimed, refetchClaimable } = useClaimabled();
  const { claim } = useNFTClaim();

  useEffect(() => {
    if (isConnected) {
      refetchClaimable();
    }
  }, [isConnected]);

  return (
    <div>
      {isConnected ? (
        <div>
          <div className="text-[50px]">Freemint NFT</div>
          {/**TODO: change logic in contract before deploy */}
          <BorderBox>
            <div className="max-w-[800px] space-y-2">
              <div className="text-3xl underline">Description</div>
              <p className="font-thin">
                Introducing the exclusive Cool PPK NFT with outstanding stats,
                designed to dominate the battle. Get ready to unleash its power!
                What{"'"}s more, each NFT comes with a unique luck value,
                enhancing your chances to win exciting prizes. Don{"'"}t miss
                out on this opportunity to own a truly remarkable collectible!.
                Announce Adding FREE NFT N R S and SR class. a. FREE NFT B Class
                and C Class remain the same conditions. b. FREE NFT A Class will
                be given to holders of $PEPEKRUB from 10 kub up to 30 kub. c.
                FREE NFT N Class will be given to holders of $PEPEKRUB worth 30
                kub up to 50 kub. d. FREE NFT R Class will be given to holders
                of $PEPEKRUB worth from 50 kub up to 70 kub. e. FREE NFT S Class
                will be given to holders of $PEPEKRUB worth 70 kub up to 100
                kub. g. FREE NFT SR Class will be given to holders of $PEPEKRUB
                worth 100 kub or more. FREE NFT Each class has different stats
                and luck. Different values can be used to increase luck in
                Honeypot and Gaza Pong. Including many more fun in the future.
              </p>
              <div>
                {!isClaimed ? (
                  <button
                    className="pl-3 pr-3 pt-2 pb-2 bg-pepe_green1 text-3xl rounded-md"
                    onClick={() => claim()}
                  >
                    Claim
                  </button>
                ) : null}
              </div>
            </div>
          </BorderBox>
        </div>
      ) : (
        <div>Please Connect Wallet</div>
      )}
    </div>
  );
};

export default NFTAirdrop;
