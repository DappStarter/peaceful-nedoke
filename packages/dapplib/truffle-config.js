require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remember smile good kitten sun gas'; 
let testAccounts = [
"0xfd789c77fb7252547cdd1f554e1406af6b188ab27e60dd031841c7044342d8ed",
"0x5b84808def233f810246770c68fec286de5b697a7a2321211c89f8d54122e9c8",
"0x921e13861832d84aaf8a53e383727df05d17bc71ab7c54946bfb4d1fe462a210",
"0x9254226706bf1998f11d4afa522f62ac8d82289a524a64d0e7f986487dd53315",
"0xdeb957548c52d081de9e7c2a8beda05fbc0b00f414635d8d9671ded205dcf05a",
"0xc2e6e4ec341394870e4354b9ba42c3f60894dbde6f7aeb21c14d96b744306310",
"0x82a8b9fc21fe3918aad50c95ddfc1eac06db2fbf993ad7c3cfb694d4d68cd8e7",
"0x128ecf25b6b5e5fd208b9b5fc9c20998470baeffd98ac0a10093745ccbe087d2",
"0x80d5ff7f9c81c385d4051c96459a9411e1cb41950f38019556c4a37c025e0f2b",
"0xb2a49373029f207da484d1a86318ab5de1a7d3cb863d27e5f741a74478c705e0"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
