const ERC721 = artifacts.require("ERC721");

contract("ERC721", accounts => {
  const owner = accounts[0];
  const account1 = accounts[1];
  const account2 = accounts[2];
  it("should ERC721 metadata be correct", async () => {
    const name = "REDENV_NFT";
    const symbol = "R&Denv";
    const url = "https://www.redenv.it/";
    const instance = await ERC721.deployed(name, symbol, url);
    const onlineName = await instance.name({from: owner});
    assert.equal(onlineName, name, "name isn't correct");
    const onlineSymbol = await instance.symbol({from: owner});
    assert.equal(onlineSymbol, symbol, "symbol isn't correct");
  });
});