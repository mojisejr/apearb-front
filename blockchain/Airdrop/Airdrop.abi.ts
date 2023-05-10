export const abiAridrop = [
  {
    type: "constructor",
    stateMutability: "nonpayable",
    inputs: [
      { type: "address", name: "_token", internalType: "address" },
      { type: "uint256", name: "_start", internalType: "uint256" },
    ],
  },
  {
    type: "event",
    name: "Claimed",
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
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "_rescueERC20",
    inputs: [{ type: "address", name: "erc20", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "payable",
    outputs: [],
    name: "_rescueETH",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "addWhitelist",
    inputs: [
      { type: "address[]", name: "_wallets", internalType: "address[]" },
      { type: "uint256[]", name: "_amounts", internalType: "uint256[]" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "checkBalance",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "claim",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "claimableAmounts",
    inputs: [{ type: "address", name: "", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "claimed",
    inputs: [{ type: "address", name: "", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "claimedAmounts",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "claimingCounter",
    inputs: [],
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
    outputs: [{ type: "bool", name: "", internalType: "bool" }],
    name: "paused",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "removeWhitelist",
    inputs: [
      { type: "address[]", name: "_wallets", internalType: "address[]" },
    ],
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
    name: "setPaused",
    inputs: [{ type: "bool", name: "_value", internalType: "bool" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setStartTime",
    inputs: [{ type: "uint256", name: "_time", internalType: "uint256" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "start",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "contract IERC20" }],
    name: "token",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "transferOwnership",
    inputs: [{ type: "address", name: "newOwner", internalType: "address" }],
  },
];