var SushiToken = artifacts.require("./Shiba.js");

module.exports = function(deployer) {
  deployer.deploy(SushiToken);
};
