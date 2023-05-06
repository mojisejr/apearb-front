import { abiDaimonRouter } from "./DiamonFinance/Router/Rounter.abi";
import { abiDaimonFactory } from "./DiamonFinance/Factory/Factory.abi";
import { abiHoneyPot } from "./HoneyPot/Pot.abi";
import { abiERC20 } from "./Tokens/ERC20/ERC20.abi";
const address = {
  diamonRounter: "0xbD84F72a48a3B8412e0954e03BbDC218Dd194740",
  daimonFactory: "0x6E906Dc4749642a456907deCB323A0065dC6F26E",
  pot: "0x7aAFC8bECA9Ed0c4Fe68a41ad62064A46A2E77A4",
  pepe: "0xB55d9A6062767E30bEce52ba5267646DfE39A8aE",
};

export const contracts = {
  diamon: {
    abi: abiDaimonRouter,
    address: address.diamonRounter as `0x${string}`,
  },
  factory: {
    abi: abiDaimonFactory,
    address: address.daimonFactory as `0x${string}`,
  },
  pot: {
    abi: abiHoneyPot,
    address: address.pot as `0x${string}`,
  },
  pepe: {
    abi: abiERC20,
    address: address.pepe as `0x${string}`,
  },
  pairs: {
    ethToToken: [
      "0xe27e65bf9bdc148c6248b495386571fd49410f27",
      "0xB55d9A6062767E30bEce52ba5267646DfE39A8aE",
    ],
    tokenToEth: [
      "0xB55d9A6062767E30bEce52ba5267646DfE39A8aE",
      "0xe27e65bf9bdc148c6248b495386571fd49410f27",
    ],
  },
};
