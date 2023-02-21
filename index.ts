import * as cauldrons from './cauldrons/pools';
import { pick, map, each } from 'underscore';
const fs = require('fs');

let blockTimes = {
  '0x7b7473a76D6ae86CE19f7352A1E89F6C9dc39020': 13127188,
  '0xc1879bf24917ebE531FbAA20b0D05Da027B592ce': 13318362,
  '0x9617b633EF905860D919b88E1d9d9a6191795341': 13491944,
  '0x252dCf1B621Cc53bc22C256255d2bE5C8c32EaE4': 13452048,
  '0xCfc571f3203756319c231d3Bc643Cee807E74636': 13492855,
  '0x5ec47EE69BEde0b6C2A2fC0D9d094dF16C192498': 13941597,
  '0x390Db10e65b5ab920C19149C919D970ad9d18A41': 13852120,
  '0x257101F20cB7243E2c7129773eD5dBBcef8B34E0': 13518049,
  '0x4EAeD76C3A388f4a841E9c765560BBe7B3E4B3A0': 13297740,
  '0x3410297D89dCDAf4072B805EFc1ef701Bb3dd9BF': 13492815,
  '0x98a84EfF6e008c5ed0289655CcdCa899bcb6B99F': 13082618,
  '0xf179fe36a36B32a4644587B8cdee7A23af98ed37': 14262369,
  '0x920D9BD936Da4eAFb5E25c6bDC9f6CB528953F9f': 12776693,
  '0xEBfDe87310dc22404d918058FAa4D56DC4E93f0A': 12903352,
  '0x53375adD9D2dFE19398eD65BAaEFfe622760A9A6': 14771464,
  '0x7Ce7D9ED62B9A6c5aCe1c6Ec9aeb115FA3064757': 14580479,
  '0xd31E19A0574dBF09310c3B06f3416661B4Dc7324': 14744272,
  '0xc6B2b3fE7c3D7a6f823D9106E22e66660709001e': 14744293,
  '0x8227965A7f42956549aFaEc319F4E444aa438Df5': 15448458,
  '0xd8F21A2D152D21C960807ABF49F5c38B046FE073': 16627286,
  '0x85f60D3ea4E86Af43c9D4E9CC9095281fC25c405': 16180626,
  '0x406b89138782851d3a8C04C743b010CEb0374352': 16180626,
  '0x207763511da879a900973A5E092382117C3c1588': 16154962,
  '0x7259e152103756e1616A77Ae982353c3751A6a90': 16520538,
  '0x6cbAFEE1FaB76cA5B5e144c43B3B50d42b7C8c8f': 12558945,
  '0x551a7CfF4de931F32893c928bBc3D25bF1Fc5147': 12558932,
  '0x6Ff9061bB8f97d948942cEF376d98b51fA38B91f': 12558932,
  '0xbb02A884621FB8F5BFd263A67F58B65df5b090f3': 12558960,
  '0xFFbF4892822e0d552CFF317F65e1eE7b5D3d9aE6': 12558943,
  '0xC319EEa1e792577C319723b5e60a15dA3857E7da': 13239675,
  '0x806e16ec797c69afa8590A55723CE4CC1b54050E': 13148516,
  '0x6371EfE5CD6e3d2d7C477935b7669401143b7985': 13505014,
  '0x003d5A75d284824Af736df51933be522DE9Eed0f': 13071089,
  '0x05500e2Ee779329698DF35760bEdcAAC046e7C27': 13127890,
  '0x0BCa8ebcB26502b013493Bf8fE53aA2B1ED401C1': 13097463,
  '0x35a0Dd182E4bCa59d5931eae13D0A2332fA30321': 13393468,
  '0x68f498C230015254AFF0E1EB6F85Da558dFf2362': 18919918,
  '0x8E45Af6743422e488aFAcDad842cE75A09eaEd34': 11536771,
  '0xd4357d43545F793101b592bACaB89943DC89d11b': 11536803,
  '0xed745b045f9495B8bfC7b58eeA8E0d0597884e12': 1749482,
  '0xa3Fc1B4b7f06c2391f7AD7D4795C1cD28A59917e': 3124064,
  '0x7208d9F9398D7b02C5C22c334c2a7A3A98c0A45d': 31494241,
  '0x4fdfFa59bf8dda3F4d5b38F260EAb8BFaC6d7bC1': 3149787,
  '0xF08e4cc9015a1B8F49A8EEc7c7C64C14B9abD7C7': 2710581,
  '0xEf7A0bd972672b4eb5DF28f2F544f6b0BF03298a': 28502448,
  '0x3CFEd0439aB822530b1fFBd19536d897EF30D2a2': 3709091,
  '0xAcc6821d0F368b02d223158F8aDA4824dA9f28E3': 9512704,
  '0x56984F04d2d04B2F63403f0EbeDD3487716bA49d': 5046414,
  '0x35fA7A723B3B39f15623Ff1Eb26D8701E7D6bB21': 6888366,
  '0x3b63f81Ad1fc724E44330b4cf5b5B6e355AD964B': 6414426,
  '0x95cCe62C3eCD9A33090bBf8a9eAC50b699B54210': 6415427,
  '0x0a1e6a80E93e62Bd0D3D3BFcF4c362C40FB1cF3D': 6877723,
  '0x2450Bf8e625e98e14884355205af6F97E3E68d07': 6877772,
  '0xC89958B03A55B5de2221aCB25B58B89A000215E6': 845270,
  '0x5698135CA439f21a57bDdbe8b582C62f090406D5': 42827353,
  '0x726413d7402fF180609d0EBc79506df8633701B1': 55708731,
  '0x6c1E051b83Eab3c10395955F7c5421a69a2520cE': 55511538,
  '0x692CF15F80415D83E8c0e139cAbcDA67fcc12C90': 12763666,
  '0xF8049467F3A9D50176f4816b20cDdd9bB8a93319': 12765698,
};

function outputToFile(content: string) {
  fs.writeFile('./markets.json', content, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

function main() {
  let markets: { [key: string]: Array<{ [key: string]: any }> } = {};

  each(cauldrons.default, (cauldron) => {
    if (markets[cauldron.contractChain] === undefined) markets[cauldron.contractChain] = [];

    markets[cauldron.contractChain.toString()].push({
      name: cauldron.name,
      cauldron: {
        contract: cauldron.contract.address,
        version: parseInt(cauldron.contract.name.match(/[0-9]/)[0]),
        deprecated: cauldron.cauldronSettings.isDepreciated,
        creationBlock: blockTimes[cauldron.contract.address],
      },
      leverageSwapper: {
        contract: cauldron.swapContractInfo?.address,
      },
      deleverageSwapper: {
        contract: cauldron.reverseSwapContractInfo?.address,
      },
    });
  });

  outputToFile(JSON.stringify(markets));
}

main();
