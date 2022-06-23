const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/64043b768d4e4eb0b716ebbbf05f64f9'))

const privKey = '7d067c9cfbb7341c3e90e8b0136bbd885dfffa0fbe4177ae6bb3ff2850ba3e81';

const addressFrom = '0xAA45958452eE785DB60b3c4c60C3a96E7A49C440';
const addressTo = '0xafba04Cf1D43De7a7Fc364443f307e0575EdA3C0';

const deploy = async() =>{
    console.log(`Making transaction from ${addressFrom} to ${addressTo}`);

    const createTransaction = await web3.eth.accounts.signTransaction({
        from: addressFrom,
        to: addressTo,
        value: web3.utils.toWei('0.5', 'ether'),
        gas: '21000'
    },
    privKey
    );

    const createReceipt = await web3.eth.sendSignedTransaction(
    createTransaction.rawTransaction
    );

    console.log(
        `Transaction successful with hash: ${createReceipt.transactionHash}`
     );

};

deploy();