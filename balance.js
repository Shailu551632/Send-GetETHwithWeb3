const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/64043b768d4e4eb0b716ebbbf05f64f9'))

web3.eth.getBalance("0xAA45958452eE785DB60b3c4c60C3a96E7A49C440", (err, result) => {
    if(err){
        console.log(err);
    }else{
        console.log(web3.utils.fromWei(result, 'ether') + ' ETH');
    }
})