export default [
  {
    name: 'WETH',
    contractChain: 42161,
    id: 1,
    stabilityFee: 5,
    interest: 0.5,
    ltv: 85,
    borrowFee: 0.5,
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
      address: '0xC89958B03A55B5de2221aCB25B58B89A000215E6',
    },
    token: {
      name: 'WETH',
      decimals: 18,
      address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    },
    pairToken: {
      name: 'MIM',

      decimals: 18,
      address: '0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A',
    },
    swapContractInfo: {
      address: '0xC9faCFA2fC50C9A30C77a2ad14E2dB107d591918',
    },
    reverseSwapContractInfo: {
      address: '0x4c56DbCC056655b8813539aF9C819ae128c07e17',
    },
  },
  {
    name: 'GLP',
    contractChain: 42161,
    id: 2,
    stabilityFee: 7.5,
    interest: 0,
    ltv: 75,
    borrowFee: 0,
    isSwappersActive: false,
    cauldronSettings: {
      isDegenBox: true,
      strategyLink:
        'https://mirror.xyz/0x5744b051845B62D6f5B6Db095cc428bCbBBAc6F9/u0vFLaZaHrstsu7V-pcs58ufFm7s6Sdw9coKgOfEkXM',
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
      name: 'CauldronV4',
      address: '0x5698135CA439f21a57bDdbe8b582C62f090406D5',
    },
    token: {
      name: 'abra-wsGlp',
      decimals: 18,
      address: '0x3477Df28ce70Cecf61fFfa7a95be4BEC3B3c7e75',
    },
    lpLogic: {
      name: 'GLP',
      defaultToken: false,
      lpAddress: '0x5402B5F40310bDED796c7D0F3FF6683f5C0cFfdf',

      tokenWrapper: '0xDd45c6614305D705a444B3baB0405D68aC85DbA5',
    },
    pairToken: {
      name: 'MIM',

      decimals: 18,
      address: '0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A',
    },
  },
  {
    name: 'MagicGLP',
    contractChain: 42161,
    id: 3,
    stabilityFee: 7.5,
    interest: 6,
    ltv: 75,
    borrowFee: 0,
    isSwappersActive: true,
    is0xSwap: true,
    cauldronSettings: {
      isDegenBox: true,
      strategyLink: 'https://abracadabramoney.gitbook.io/learn/intro/stake/mglp',
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
      name: 'CauldronV4',
      address: '0x726413d7402fF180609d0EBc79506df8633701B1',
    },
    token: {
      name: 'magicGLP',
      decimals: 18,
      address: '0x85667409a723684Fe1e57Dd1ABDe8D88C2f54214',
    },
    lpLogic: {
      name: 'GLP',
      defaultToken: false,
      lpAddress: '0x5402B5F40310bDED796c7D0F3FF6683f5C0cFfdf',

      tokenWrapper: '0x565adE5536Ab84018e00d6d7f56E7a300717c10b',
    },
    pairToken: {
      name: 'MIM',

      decimals: 18,
      address: '0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A',
    },
    swapContractInfo: {
      address: '0x49Bd7dB43695c38661067765BE9484F8177B13f3',
    },
    reverseSwapContractInfo: {
      address: '0x08a47F1F14292b0655B70588C76b614f64074db4',
    },
  },
];
