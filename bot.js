const ethers = require('ethers');

//*************
//ENTER YOUR DETAILS - Refer to instructions!

//1. Snipe ddetails
const SnipeID = "Enter ID of the token to snipe. Refer to instructions for formatting"
const Receive = 'Enter ID of the token to buy. Usually the same as SnipeID'
const amountIn = ethers.utils.parseUnits('Enter how much WBNB to spend', 'ether')


//2. Wallet / connection details
const WSS = "Enter WSS address. Refer to instructions for links" 
const Seed = 'Enter your wallet 12 word seed phrase'
const recipientaddress = 'Enter your wallet address where to send the bought tokens'
 

//3. Optional settings
const Spend = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
const routeraddress = '0x10ED43C718714eb63d5aA57B78B54704E256024E'
const Slippage = ethers.utils.parseUnits('0', 'ether')


//////Done. Do NOT change code after this!



const MethodID = "0xf305d719" 
const MethodID2 = "0xe8e33700" 
const provider = new ethers.providers.WebSocketProvider(WSS);
const wallet = ethers.Wallet.fromMnemonic(Seed);
const account = wallet.connect(provider);
provider.removeAllListeners()
const router = new ethers.Contract(
  routeraddress,
  ['function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)'],
  account
);
console.log(`Connecting to the blockchain`),
console.log(`Starting to scan the network for a matching transaction based on the config entered`),
console.log(`As soon as a matching transaction has been found, it will be displayed here`),
provider.on("pending", async (tx) => {
  provider.getTransaction(tx).then(function (transaction){
    if (transaction != null && transaction['data'].includes(MethodID2) && transaction['data'].includes(SnipeID) || transaction != null && transaction['data'].includes(MethodID) && transaction['data'].includes(SnipeID))
  console.log(transaction),
  console.log(`Matching liquidity add transaction found!`),
router.swapExactTokensForTokens(
    amountIn,
    Slippage,
    [Spend, Receive],
    recipientaddress,
    Date.now() + 1000 * 60 * 10,
    { gasLimit: transaction.gasLimit, gasPrice: transaction.gasPrice}
  ),

setTimeout(function () {console.log(`Attempting to place a buy order...`)}, 500),
setTimeout(function () {console.log('Ctrl+click the link below to and enter your wallet address to check if tokens were bought')}, 1000),
setTimeout(function () {console.log('https://bscscan.com/address/')}, 700),
setTimeout(function () {throw new Error("Order placed! Stopping the bot. Disregard the error message. ");}, 1000)

return;
  
  
 

  

  
})})