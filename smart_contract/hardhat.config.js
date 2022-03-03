require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/1nOJJ7Uk7x_IMrX1ygUIokq9phmB9Usy',
      accounts: ['94c71b465fe3fc6d941fdac29ed6386dc805bfbb61cfdee7e58fd98ad861788b']
    }
  }
}