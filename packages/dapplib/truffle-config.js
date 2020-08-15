require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember around guess kiwi flame gas'; 
let testAccounts = [
"0x95669a1ab59eb32fba6604af3897e77836e58bcd6c2c8287f62bf3965f8cea58",
"0x878949b000757a71236d4170847f63b3546e40a178f2051b6c2893f592df4864",
"0xbb8d8e160d67fd5d54ac7ff962fb2c2481f497869a68ae9fb02b40133d854dcd",
"0xfe39ca718cb80f79acd774b6c902a20d4e7a5848661cdde23a5294a1649195f6",
"0xb2fe4cf00718ee160ee4322891c0ad012801c2b61961522391c13fe1eddcfb1b",
"0xe406c66dba9299d7abd9d213bb5b8ea9a55f8c42cf0fb84434e73582d60843f9",
"0x1dd2bbcfc740c5d4598c82aec8bd001ea5bd1e7bb06b4e2eb2f95ca934659c82",
"0xdc3ab6458d71da1247fcd2fc011ddb12db8b729f3714161e2537dfa429a89888",
"0x74267ffd05ac061c14836ad9c98447fad201d28716a233673515dc67836a2269",
"0x828f2cde209e2aa91d8e2a7ab03c6fcba1b45f6904ec820ca42a263a53428785"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
