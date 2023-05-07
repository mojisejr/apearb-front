import { abiDaimonRouter } from "./DiamonFinance/Router/Router.abi";
import { abiDaimonFactory } from "./DiamonFinance/Factory/Factory.abi";
import { abiHoneyPot } from "./HoneyPot/Pot.abi";
import { abiERC20 } from "./Tokens/ERC20/ERC20.abi";
const address = {
  // diamonRounter: "0xbD84F72a48a3B8412e0954e03BbDC218Dd194740",
  // daimonFactory: "0x6E906Dc4749642a456907deCB323A0065dC6F26E",
  // pot: "0x7aAFC8bECA9Ed0c4Fe68a41ad62064A46A2E77A4",
  // pepe: "0xB55d9A6062767E30bEce52ba5267646DfE39A8aE",
  // weth: "",
  diamonRounter: "0xAb30a29168D792c5e6a54E4bcF1Aec926a3b20FA",
  daimonFactory: "0x6E906Dc4749642a456907deCB323A0065dC6F26E",
  pot: "0x7aAFC8bECA9Ed0c4Fe68a41ad62064A46A2E77A4",
  pepe: "0xDBeAa777a5cCab24bAA9220257d27d59b4336603",
  weth: "0x67ebd850304c70d983b2d1b93ea79c7cd6c3f6b5",
  lp: "0x5931Dc7d9d5990a665bb149604a478433090aBA0",
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
    ethToToken: {
      addr: [address.weth, address.pepe],
      token0Img: "/images/bitkub.png",
      token1Img: "/images/coin.png",
    },
    tokenToEth: {
      addr: [address.pepe, address.weth],
      token0Img: "/images/bitkub.png",
      token1Img: "/images/coin.png",
    },
  },
  lp: address.lp,
};

// ["0xe27e65bf9bdc148c6248b495386571fd49410f27","0xB55d9A6062767E30bEce52ba5267646DfE39A8aE"]
// [0xe27e65bf9bdc148c6248b495386571fd49410f27,0xB55d9A6062767E30bEce52ba5267646DfE39A8aE]

// [0x67ebd850304c70d983b2d1b93ea79c7cd6c3f6b5,0xdbeaa777a5ccab24baa9220257d27d59b4336603]
