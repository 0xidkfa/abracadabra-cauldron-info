import mainnetPools from './mainnetPools';
import fantomPools from './fantomPools';
import avalanchePools from './avalanchePools';
import arbitrumPools from './arbitrumPools';
import bscPools from './bscPools';
// import optimismPools from "./optimism";

export default [
  ...mainnetPools,
  ...fantomPools,
  ...avalanchePools,
  ...arbitrumPools,
  ...bscPools,
  // ...optimismPools,
];
