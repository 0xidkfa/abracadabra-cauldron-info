import * as cauldrons from './cauldrons/pools';
import { pick, map } from 'underscore';

function main() {
  let table = map(cauldrons.default, (cauldron) => {
    return {
      name: cauldron.name,
      chainId: cauldron.contractChain,
      id: cauldron.id,
      cauldronType: cauldron.contract.name,
      cauldronAddress: cauldron.contract.address,
      tokenName: cauldron.token.name,
      tokenAddress: cauldron.token.address,
      swapperAddress: cauldron.swapContractInfo?.address,
      reverseSwapperAddress: cauldron.reverseSwapContractInfo?.address,
      isDegenBox: cauldron.cauldronSettings.isDegenBox,
    };
  });
  console.log(table);
}

main();
