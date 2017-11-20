  /*networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 4500000,
      network_id: "*" // Match any network id
    }
  }*/
	var HDWalletProvider = require("truffle-hdwallet-provider");

	var mnemonic = "confirm vessel fly agree boat voyage swift wire void pattern clip parrot";

	module.exports = {
	  migrations_directory: "./migrations",
	  networks: {
	    development: {
	      host: "localhost",
	      port: 8545,
	      gas: 4500000,
	      network_id: "*" // Match any network id
	    },
	    ropsten: {
	      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"),
	      gas: 4500000,
	      network_id: 3
	    },
	    rinkeby: {
	      provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/"),
	      gas: 4500000,
	      network_id: 4
	    }
	  }
	}