const ERC721 = artifacts.require("ERC721");

module.exports = async function (deployer) {
    await deployer.deploy(ERC721, "REDENV_NFT", "R&Denv", "https://www.redenv.it/");
};
