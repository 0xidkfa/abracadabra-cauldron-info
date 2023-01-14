export default [
  {
    name: 'Velodrome Volatile OP/USDC',
    contractChain: 10,
    id: 1,
    stabilityFee: 8,
    interest: 2,
    ltv: 70,
    borrowFee: 0,
    isSwappersActive: true,
    cauldronSettings: {
      isDegenBox: true,
      strategyLink: '#',
      isDepreciated: false,
      acceptUseDefaultBalance: false,
      healthMultiplier: 1,
      hasAccountBorrowLimit: false,
      hasWithdrawableLimit: true,
      leverageMax: 15,
      dynamicBorrowAmountLimit: false,
      isCollateralClaimable: false,
      claimCrvReward: false,
    },
    contract: {
      name: 'CauldronV3_2',
      address: '0x68f498C230015254AFF0E1EB6F85Da558dFf2362',
    },
    token: {
      name: 'wOP/USDC',
      decimals: 18,
      address: '0x6eb1709e0b562097bf1cc48bc6a378446c297c04',
    },
    token0: {
      address: '0x4200000000000000000000000000000000000042',
    },
    token1: {
      address: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
    },
    lpLogic: {
      name: 'OP/USDC',
      defaultToken: false,
      lpAddress: '0x47029bc8f5CBe3b464004E87eF9c9419a48018cd',
      tokenWrapper: '0x19C08F59c4D75407652A6a970078e79D117d0fD7',
    },
    pairToken: {
      name: 'MIM',

      decimals: 18,
      address: '0xB153FB3d196A8eB25522705560ac152eeEc57901',
    },
    chainlinks: {
      token0: '0x0d276fc14719f9292d5c1ea2198673d1f4269246',
      token1: '0x16a9fa2fda030272ce99b29cf780dfa30361e0f3',
    },
    swapContractInfo: {
      address: '0x6E4358c889bb7871061904Be31Fe47C3B8b7F442',
    },
    reverseSwapContractInfo: {
      address: '0x741A2378a8E003acbAdbc21506bC624062Ace36E',
    },
  },
  // {
  //
  //   name: "Stargate USDC",
  //   contractChain: 10,
  //   id: 2,
  //   stabilityFee: 0.5,
  //   interest: 0,
  //   ltv: 95,
  //   borrowFee: 0,
  //   isSwappersActive: true,
  //   cauldronSettings: {
  //     isDegenBox: true,
  //     strategyLink: false,
  //     isDepreciated: false,
  //     acceptUseDefaultBalance: false,
  //     healthMultiplier: 1,
  //     hasAccountBorrowLimit: false,
  //     hasWithdrawableLimit: false,
  //     leverageMax: 15,
  //     dynamicBorrowAmountLimit: false,
  //     isCollateralClaimable: false,
  //     claimCrvReward: false,
  //   },
  //   contract: {
  //     name: "CauldronV3_2",
  //     address: "0x0981a77C825CBF9fced939e05f12387Ef1955b90",
  //
  //   },
  //   token: {
  //     name: "S*USDC",
  //     decimals: 6,
  //     address: "0xdecc0c09c3b5f6e92ef4184125d5648a66e35298",
  //
  //   },
  //   pairToken: {
  //     name: "MIM",
  //
  //     decimals: 18,
  //     address: "0xB153FB3d196A8eB25522705560ac152eeEc57901",
  //
  //   },
  //   swapContractInfo: {
  //     address: "0x35467BBd152a0f4d9166E649728c101fe4806EAa",
  //
  //   },
  //   reverseSwapContractInfo: {
  //     address: "0x3e6ef9E97147C266c5bddeF03E7dfba7a167d853",
  //
  //   },
  // },
];
