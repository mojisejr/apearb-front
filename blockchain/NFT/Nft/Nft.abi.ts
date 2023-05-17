export const abiNft = [
  { type: "constructor", stateMutability: "nonpayable", inputs: [] },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        type: "address",
        name: "owner",
        internalType: "address",
        indexed: true,
      },
      {
        type: "address",
        name: "approved",
        internalType: "address",
        indexed: true,
      },
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ApprovalForAll",
    inputs: [
      {
        type: "address",
        name: "owner",
        internalType: "address",
        indexed: true,
      },
      {
        type: "address",
        name: "operator",
        internalType: "address",
        indexed: true,
      },
      { type: "bool", name: "approved", internalType: "bool", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Evolution",
    inputs: [
      { type: "address", name: "", internalType: "address", indexed: true },
      { type: "uint256", name: "", internalType: "uint256", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LevelUp",
    inputs: [
      { type: "uint256", name: "", internalType: "uint256", indexed: false },
      { type: "uint256", name: "", internalType: "uint256", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Minted",
    inputs: [
      { type: "address", name: "", internalType: "address", indexed: true },
      { type: "uint256", name: "", internalType: "uint256", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        type: "address",
        name: "previousOwner",
        internalType: "address",
        indexed: true,
      },
      {
        type: "address",
        name: "newOwner",
        internalType: "address",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      { type: "address", name: "from", internalType: "address", indexed: true },
      { type: "address", name: "to", internalType: "address", indexed: true },
      {
        type: "uint256",
        name: "tokenId",
        internalType: "uint256",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "UpLevel",
    inputs: [
      { type: "address", name: "", internalType: "address", indexed: false },
      { type: "uint256", name: "", internalType: "uint256", indexed: false },
      { type: "uint256", name: "", internalType: "uint256", indexed: false },
    ],
    anonymous: false,
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "approve",
    inputs: [
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "tokenId", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "balanceOf",
    inputs: [{ type: "address", name: "owner", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "evo2Add",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "evo2Exp",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "evo3Add",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "evo3Exp",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "evoulution",
    inputs: [{ type: "uint256", name: "_tokenId", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "expMultiplier",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "expPerNormal",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "expPerWinner",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "getApproved",
    inputs: [{ type: "uint256", name: "tokenId", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "string[]", name: "", internalType: "string[]" }],
    name: "getMetadataOf",
    inputs: [{ type: "address", name: "_owner", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "tuple",
        name: "",
        internalType: "struct PepeKrubGen1NaWoi.PepeStatus",
        components: [
          { type: "string", name: "evo1", internalType: "string" },
          { type: "string", name: "evo2", internalType: "string" },
          { type: "string", name: "evo3", internalType: "string" },
          { type: "string", name: "uri", internalType: "string" },
          { type: "uint256", name: "str", internalType: "uint256" },
          { type: "uint256", name: "agi", internalType: "uint256" },
          { type: "uint256", name: "vit", internalType: "uint256" },
          { type: "uint256", name: "_int", internalType: "uint256" },
          { type: "uint256", name: "exp", internalType: "uint256" },
          { type: "string", name: "name", internalType: "string" },
          { type: "uint256", name: "level", internalType: "uint256" },
        ],
      },
    ],
    name: "getNFTProps",
    inputs: [{ type: "uint256", name: "_tokenId", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      {
        type: "tuple[]",
        name: "",
        internalType: "struct PepeKrubGen1NaWoi.PepeStatus[]",
        components: [
          { type: "string", name: "evo1", internalType: "string" },
          { type: "string", name: "evo2", internalType: "string" },
          { type: "string", name: "evo3", internalType: "string" },
          { type: "string", name: "uri", internalType: "string" },
          { type: "uint256", name: "str", internalType: "uint256" },
          { type: "uint256", name: "agi", internalType: "uint256" },
          { type: "uint256", name: "vit", internalType: "uint256" },
          { type: "uint256", name: "_int", internalType: "uint256" },
          { type: "uint256", name: "exp", internalType: "uint256" },
          { type: "string", name: "name", internalType: "string" },
          { type: "uint256", name: "level", internalType: "uint256" },
        ],
      },
    ],
    name: "getNFTPropsOf",
    inputs: [{ type: "address", name: "_owner", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "increaseMaxMint",
    inputs: [{ type: "uint256", name: "_value", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "init",
    inputs: [
      { type: "address", name: "_randomAddress", internalType: "address" },
      { type: "address", name: "_minterAddress", internalType: "address" },
      { type: "address", name: "_potAddress", internalType: "address" },
      { type: "uint256", name: "_maxMint", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "isApprovedForAll",
    inputs: [
      { type: "address", name: "owner", internalType: "address" },
      { type: "address", name: "operator", internalType: "address" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "mint",
    inputs: [
      { type: "uint256", name: "_tokenId", internalType: "uint256" },
      { type: "address", name: "_to", internalType: "address" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "string", name: "", internalType: "string" }],
    name: "name",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [{ type: "bytes4", name: "", internalType: "bytes4" }],
    name: "onERC721Received",
    inputs: [
      { type: "address", name: "operator", internalType: "address" },
      { type: "address", name: "from", internalType: "address" },
      { type: "uint256", name: "tokenId", internalType: "uint256" },
      { type: "bytes", name: "data", internalType: "bytes" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "owner",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "ownerOf",
    inputs: [{ type: "uint256", name: "tokenId", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "renounceOwnership",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "rescueERC721",
    inputs: [
      { type: "address", name: "_erc721", internalType: "address" },
      { type: "address", name: "_to", internalType: "address" },
      { type: "uint256", name: "_tokenId", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "safeTransferFrom",
    inputs: [
      { type: "address", name: "from", internalType: "address" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "tokenId", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "safeTransferFrom",
    inputs: [
      { type: "address", name: "from", internalType: "address" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "tokenId", internalType: "uint256" },
      { type: "bytes", name: "data", internalType: "bytes" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setAdmin",
    inputs: [
      { type: "address", name: "_admin", internalType: "address" },
      { type: "bool", name: "_superadmin", internalType: "bool" },
      { type: "bool", name: "_minter", internalType: "bool" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setApprovalForAll",
    inputs: [
      { type: "address", name: "operator", internalType: "address" },
      { type: "bool", name: "approved", internalType: "bool" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setBaseUri",
    inputs: [
      { type: "uint256", name: "_tokenId", internalType: "uint256" },
      { type: "string[]", name: "_evoBase", internalType: "string[]" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setBaseUriBatch",
    inputs: [
      { type: "uint256[]", name: "_tokenIds", internalType: "uint256[]" },
      { type: "string[]", name: "_evo1Base", internalType: "string[]" },
      { type: "string[]", name: "_evo2Base", internalType: "string[]" },
      { type: "string[]", name: "_evo3Base", internalType: "string[]" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setEvolutionExp",
    inputs: [
      { type: "uint256", name: "_generation", internalType: "uint256" },
      { type: "uint256", name: "_amount", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setExpMultiplier",
    inputs: [{ type: "uint256", name: "_mul", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setItemExp",
    inputs: [
      { type: "uint256", name: "_normal", internalType: "uint256" },
      { type: "uint256", name: "_winner", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setName",
    inputs: [
      { type: "uint256", name: "_tokenId", internalType: "uint256" },
      { type: "string", name: "_name", internalType: "string" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setPotNft",
    inputs: [{ type: "address", name: "_nft", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setRandom",
    inputs: [{ type: "address", name: "_addr", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "supportsInterface",
    inputs: [{ type: "bytes4", name: "interfaceId", internalType: "bytes4" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "string", name: "", internalType: "string" }],
    name: "symbol",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "tokenByIndex",
    inputs: [{ type: "uint256", name: "index", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "tokenOfOwnerByIndex",
    inputs: [
      { type: "address", name: "owner", internalType: "address" },
      { type: "uint256", name: "index", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "string", name: "", internalType: "string" }],
    name: "tokenURI",
    inputs: [{ type: "uint256", name: "_tokenId", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256[]", name: "", internalType: "uint256[]" }],
    name: "tokensOfOwner",
    inputs: [{ type: "address", name: "_owner", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "totalSupply",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "transferFrom",
    inputs: [
      { type: "address", name: "from", internalType: "address" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "tokenId", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "transferOwnership",
    inputs: [{ type: "address", name: "newOwner", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "upLevel",
    inputs: [
      { type: "uint256[]", name: "_tokenIds", internalType: "uint256[]" },
      { type: "uint256", name: "tokenId", internalType: "uint256" },
    ],
  },
];