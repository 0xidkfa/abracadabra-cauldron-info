export default [
  {
    name: 'WFTM',
    contractChain: 250,
    id: 1,
    stabilityFee: 12.5,
    interest: 3.5,
    ltv: 75,
    borrowFee: 0.05,
    isSwappersActive: true,
    cauldronSettings: {
      isDegenBox: false,
      strategyLink: false,
      isDepreciated: false,
      acceptUseDefaultBalance: true,
      healthMultiplier: 1,
      hasAccountBorrowLimit: false,
      hasWithdrawableLimit: false,
      leverageMax: 15,
      dynamicBorrowAmountLimit: 1000000,
      isCollateralClaimable: false,
      claimCrvReward: false,
    },
    contract: {
      name: 'CauldronV2Flat',
      address: '0x8E45Af6743422e488aFAcDad842cE75A09eaEd34',
    },
    token: {
      name: 'WFTM',
      decimals: 18,
      address: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    },
    pairToken: {
      name: 'MIM',

      decimals: 18,
      address: '0x82f0B8B456c1A451378467398982d4834b6829c1',
    },
    swapContractInfo: {
      address: '0x3d19f3Af2AA7A6fFec2324f92421A8f4156309D1',
    },
    reverseSwapContractInfo: {
      address: '0xE8f1D5D6B83c59aC3Ba6D1CB9aFbfF54408EcBDC',
    },
  },
  {
    name: 'WFTM',
    contractChain: 250,
    id: 2,
    stabilityFee: 7.5,
    interest: 1.8,
    ltv: 50,
    borrowFee: 0.05,
    isSwappersActive: true,
    cauldronSettings: {
      isDegenBox: false,
      strategyLink: false,
      isDepreciated: false,
      acceptUseDefaultBalance: true,
      healthMultiplier: 1,
      hasAccountBorrowLimit: false,
      hasWithdrawableLimit: false,
      leverageMax: 15,
      dynamicBorrowAmountLimit: 1000000,
      isCollateralClaimable: false,
      claimCrvReward: false,
    },
    contract: {
      name: 'CauldronV2Flat',
      address: '0xd4357d43545F793101b592bACaB89943DC89d11b',
    },
    token: {
      name: 'WFTM',
      decimals: 18,
      address: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    },
    pairToken: {
      name: 'MIM',

      decimals: 18,
      address: '0x82f0B8B456c1A451378467398982d4834b6829c1',
    },
    swapContractInfo: {
      address: '0x3d19f3Af2AA7A6fFec2324f92421A8f4156309D1',
    },
    reverseSwapContractInfo: {
      address: '0xE8f1D5D6B83c59aC3Ba6D1CB9aFbfF54408EcBDC',
    },
  },
  {
    name: 'yvWFTM',
    contractChain: 250,
    id: 3,
    stabilityFee: 12.5,
    interest: 2,
    ltv: 80,
    borrowFee: 0.5,
    isSwappersActive: true,
    cauldronSettings: {
      isDegenBox: false,
      strategyLink: false,
      isDepreciated: false,
      acceptUseDefaultBalance: false,
      healthMultiplier: 1,
      hasAccountBorrowLimit: false,
      hasWithdrawableLimit: false,
      leverageMax: 15,
      dynamicBorrowAmountLimit: 1000000,
      isCollateralClaimable: false,
      claimCrvReward: false,
    },
    contract: {
      name: 'CauldronV2Flat',
      address: '0xed745b045f9495B8bfC7b58eeA8E0d0597884e12',
    },
    token: {
      name: 'yvWFTM',
      decimals: 18,
      address: '0x0DEC85e74A92c52b7F708c4B10207D9560CEFaf0',
    },
    pairToken: {
      name: 'MIM',

      decimals: 18,
      address: '0x82f0B8B456c1A451378467398982d4834b6829c1',
    },
    swapContractInfo: {
      address: '0x26FA3fFFB6EfE8c1E69103aCb4044C26B9A106a9',
    },
    reverseSwapContractInfo: {
      address: '0xFE2b09980D1f579E13a0Ce3f45AB240d5b1C2f6b',
    },
  },
  // {
  //   name: "ICE",
  //   contractChain: 250,
  //   id: 4,
  //   stabilityFee: 8,
  //   interest: 1.5,
  //   ltv: 75,
  //   borrowFee: 0.5,
  //   isSwappersActive: true,
  //   cauldronSettings: {
  //     isDegenBox: false,
  //     strategyLink: false,
  //     isDepreciated: false,
  //     acceptUseDefaultBalance: false,
  //     healthMultiplier: 1,
  //     hasAccountBorrowLimit: false,
  //     hasWithdrawableLimit: false,
  //     leverageMax: 15,
  //     dynamicBorrowAmountLimit: 1000000,
  //     isCollateralClaimable: false,
  //     claimCrvReward: false,
  //   },
  //   contract: {
  //     name: "CauldronV2FTM",
  //     address: "0xF08e4cc9015a1B8F49A8EEc7c7C64C14B9abD7C7",
  //
  //   },
  //   token: {
  //     name: "ICE",
  //     decimals: 18,
  //     address: "0xf16e81dce15B08F326220742020379B855B87DF9",
  //
  //   },
  //   pairToken: {
  //     name: "MIM",
  //     decimals: 18,
  //     address: "0x82f0B8B456c1A451378467398982d4834b6829c1",
  //
  //   },
  //   swapContractInfo: {
  //     address: "0x6cc0cd7D25E291029B55C767B9A2D1d9A18Ae668",
  //
  //   },
  //   reverseSwapContractInfo: {
  //     address: "0x585A94dAe6a34541891fDbdC0A897fA2cB2fbE23",
  //
  //   },
  // },
  {
    name: 'xBOO',
    contractChain: 250,
    id: 5,
    stabilityFee: 12.5,
    interest: 3,
    ltv: 70,
    borrowFee: 1,
    isSwappersActive: true,
    cauldronSettings: {
      isDegenBox: true,
      strategyLink: false,
      isDepreciated: false,
      acceptUseDefaultBalance: false,
      healthMultiplier: 1,
      hasAccountBorrowLimit: false,
      hasWithdrawableLimit: false,
      leverageMax: 15,
      dynamicBorrowAmountLimit: false,
      isCollateralClaimable: false,
      claimCrvReward: false,
    },
    contract: {
      name: 'CauldronV2FTM',
      address: '0xa3Fc1B4b7f06c2391f7AD7D4795C1cD28A59917e',
    },
    token: {
      name: 'xBOO',
      decimals: 18,
      address: '0xa48d959ae2e88f1daa7d5f611e01908106de7598',
    },
    pairToken: {
      name: 'MIM',

      decimals: 18,
      address: '0x82f0B8B456c1A451378467398982d4834b6829c1',
    },
    swapContractInfo: {
      address: '0x791aaB38C442a327Df0beb1fEc5767D8cA91dcc1',
    },
    reverseSwapContractInfo: {
      address: '0x9732D3Ee0f185D7c2D610E30DC5de28EF68Ad7c9',
    },
  },
  // {
  //   name: "wFTM",
  //   contractChain: 250,
  //   id: 6,
  //   stabilityFee: 7.5,
  //   interest: 5,
  //   ltv: 85,
  //   borrowFee: 0.5,
  //   isSwappersActive: true,
  //   cauldronSettings: {
  //     isDegenBox: true,
  //     strategyLink: false,
  //     isDepreciated: false,
  //     acceptUseDefaultBalance: true,
  //     healthMultiplier: 1,
  //     hasAccountBorrowLimit: false,
  //     hasWithdrawableLimit: false,
  //     leverageMax: 15,
  //     dynamicBorrowAmountLimit: 1000000,
  //     isCollateralClaimable: false,
  //     claimCrvReward: false,
  //   },
  //   contract: {
  //     name: "CauldronV2FTM",
  //     address: "0xEf7A0bd972672b4eb5DF28f2F544f6b0BF03298a",
  //
  //   },
  //   token: {
  //     name: "WFTM",
  //     decimals: 18,
  //     address: "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",
  //
  //   },
  //   pairToken: {
  //     name: "MIM",
  //     decimals: 18,
  //     address: "0x82f0B8B456c1A451378467398982d4834b6829c1",
  //
  //   },
  //   swapContractInfo: {
  //     address: "0x38a67c0F839e5F8939B12f9181A1924E4e4375eD",
  //
  //   },
  //   reverseSwapContractInfo: {
  //     address: "0xE94C443e2d124cF9d5b5A6F1CE0E29dc464551DA",
  //
  //   },
  // },
  {
    name: 'FTM/MIM',
    contractChain: 250,
    id: 7,
    stabilityFee: 8,
    interest: 1,
    ltv: 85,
    borrowFee: 0.5,
    isSwappersActive: true,
    cauldronSettings: {
      isDegenBox: true,
      strategyLink: 'https://abracadabramoney.medium.com/our-spiritswap-lp-degenbox-strategy-11c1a786ff67',
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
      name: 'CauldronV2FTM',
      address: '0x7208d9F9398D7b02C5C22c334c2a7A3A98c0A45d',
    },
    token: {
      name: 'FTM/MIM',
      decimals: 18,
      address: '0xB32b31DfAfbD53E310390F641C7119b5B9Ea0488',
    },
    pairToken: {
      name: 'MIM',

      decimals: 18,
      address: '0x82f0B8B456c1A451378467398982d4834b6829c1',
    },
    swapContractInfo: {
      address: '0xe45217A77C332FF767112dC89E568c473c5fad2b',
    },
    reverseSwapContractInfo: {
      address: '0xD7477321A84F3d39B8D742580F3740016658135D',
    },
  },
  {
    name: 'FTM/MIM',
    contractChain: 250,
    id: 8,
    stabilityFee: 8,
    interest: 1,
    ltv: 85,
    borrowFee: 0.5,
    isSwappersActive: true,
    cauldronSettings: {
      isDegenBox: true,
      strategyLink:
        'https://mirror.xyz/0x5744b051845B62D6f5B6Db095cc428bCbBBAc6F9/EORl4KYTfOLX7g9-Ypqi4mw_E_VZCsseZ5-ZcDKbPIE',
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
      name: 'CauldronV2FTM',
      address: '0x4fdfFa59bf8dda3F4d5b38F260EAb8BFaC6d7bC1',
    },
    token: {
      name: 'FTM/MIM',
      decimals: 18,
      address: '0x6f86e65b255c9111109d2D2325ca2dFc82456efc',
    },
    pairToken: {
      name: 'MIM',

      decimals: 18,
      address: '0x82f0B8B456c1A451378467398982d4834b6829c1',
    },
    swapContractInfo: {
      address: '0xe788aBab092c165fAb7Ded7b7D2962abc808eE6C',
    },
    reverseSwapContractInfo: {
      address: '0xFDF2C2689c130B0686331C9ADa0E40Ec1A1A58d7',
    },
  },
];
