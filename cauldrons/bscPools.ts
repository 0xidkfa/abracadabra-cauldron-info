export default [
  {
    name: 'WBNB',
    contractChain: 56,
    id: 1,
    stabilityFee: 10,
    interest: 2,
    ltv: 85,
    borrowFee: 0.5,
    isSwappersActive: false,
    cauldronSettings: {
      isDegenBox: true,
      strategyLink: false,
      isDepreciated: false,
      acceptUseDefaultBalance: true,
      healthMultiplier: 1,
      hasAccountBorrowLimit: false,
      hasWithdrawableLimit: true,
      leverageMax: 15,
      dynamicBorrowAmountLimit: 1000000,
      isCollateralClaimable: false,
      claimCrvReward: false,
    },
    contract: {
      name: 'CauldronV2MultiChain',
      address: '0x692CF15F80415D83E8c0e139cAbcDA67fcc12C90',
    },
    token: {
      name: 'WBNB',
      decimals: 18,
      address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    pairToken: {
      name: 'MIM',

      decimals: 18,
      address: '0xfE19F0B51438fd612f6FD59C1dbB3eA319f433Ba',
    },
    swapContractInfo: {
      address: '0x197De282d7b5cEFfFD8f8B0196c30e8401593CF6',
    },
    reverseSwapContractInfo: {
      address: '0x1D7C1C99045C1c776607F8C1eC9DDd27a2d319D3',
    },
  },
  {
    name: 'CAKE',
    contractChain: 56,
    id: 2,
    stabilityFee: 12.5,
    interest: 3,
    ltv: 75,
    borrowFee: 0.5,
    isSwappersActive: false,
    cauldronSettings: {
      isDegenBox: true,
      strategyLink:
        'https://mirror.xyz/0x5744b051845B62D6f5B6Db095cc428bCbBBAc6F9/AyHB_Ir-nb59HXY2o4H4ysBf5D1yPkWyh-xghKzfCeg',
      isDepreciated: false,
      acceptUseDefaultBalance: false,
      healthMultiplier: 1,
      hasAccountBorrowLimit: false,
      hasWithdrawableLimit: true,
      leverageMax: 15,
      dynamicBorrowAmountLimit: 1000000,
      isCollateralClaimable: false,
      claimCrvReward: false,
    },
    contract: {
      name: 'CauldronV2MultiChain',
      address: '0xF8049467F3A9D50176f4816b20cDdd9bB8a93319',
    },
    token: {
      name: 'CAKE',
      decimals: 18,
      address: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    pairToken: {
      name: 'MIM',

      decimals: 18,
      address: '0xfE19F0B51438fd612f6FD59C1dbB3eA319f433Ba',
    },
    swapContractInfo: {
      address: '0x197De282d7b5cEFfFD8f8B0196c30e8401593CF6',
    },
    reverseSwapContractInfo: {
      address: '0x1D7C1C99045C1c776607F8C1eC9DDd27a2d319D3',
    },
  },
];
