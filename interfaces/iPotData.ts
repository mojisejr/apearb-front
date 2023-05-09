import { BigNumber } from "ethers";

export interface IPotData {
  endTime: number;
  price: {
    wei: string;
    ether: string;
    bignum: BigNumber;
  };
  fee: {
    wei: string;
    ether: string;
    bignum: BigNumber;
  };
  currentTokenId: string;
  currentRound: string;
  roundMintedCount: string;
  winnerPicked: boolean;
  isPaused: boolean;
}
