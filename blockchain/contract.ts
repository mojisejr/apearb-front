import { abiDaimonRouter } from "./DiamonFinance/Router/Rounter.abi";
import { abiHoneyPot } from "./HoneyPot/Pot.abi";
import { abiERC20 } from "./Tokens/ERC20/ERC20.abi";
const address = {
  diamonRounter: "0xb345116b83c08c95C8E1140DaB3D4129c2cA77b3",
  pot: "0x7aAFC8bECA9Ed0c4Fe68a41ad62064A46A2E77A4",
  pepe: "0xB55d9A6062767E30bEce52ba5267646DfE39A8aE",
};

export const contracts = {
  diamon: {
    abi: abiDaimonRouter,
    address: address.diamonRounter as `0x${string}`,
  },
  pot: {
    abi: abiHoneyPot,
    address: address.pot as `0x${string}`,
  },
  pepe: {
    abi: abiERC20,
    address: address.pepe as `0x${string}`,
  },
};
