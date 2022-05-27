const web3Utils = require('web3-utils');
const Wallet = require('ethereumjs-wallet').default;
const EthUtil = require('ethereumjs-util');
const randomHex = web3Utils.randomHex(256/8);
const privateKeyBuffer = EthUtil.toBuffer(randomHex);
console.log(randomHex);
const wallet = Wallet.fromPrivateKey(privateKeyBuffer);
const address = wallet.getChecksumAddressString();
console.log(address);
