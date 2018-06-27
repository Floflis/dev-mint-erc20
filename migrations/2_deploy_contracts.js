var SafeMath = artifacts.require('SafeMath.sol');
var MintableToken = artifacts.require('MintableToken.sol');

module.exports = function(deployer, network, accounts) {
  return deployer.deploy(SafeMath).then(async () => {

    await deployer.deploy(MintableToken);
  });
}
