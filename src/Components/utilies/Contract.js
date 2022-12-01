export const airdrop = "0x620DD286F245d2E5Ca4C7f9A4F5fDcbbd5dFfC83";
export const airdrop_ABI = [{"name":"Multisended","type":"event","inputs":[{"name":"total","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"tokenAddress","type":"address","indexed":false,"internalType":"address"}],"anonymous":false},{"name":"OwnershipTransferred","type":"event","inputs":[{"name":"previousOwner","type":"address","indexed":true,"internalType":"address"},{"name":"newOwner","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"name":"AirdropAmount","type":"function","inputs":[{"name":"_amounts","type":"uint256[]","internalType":"uint256[]"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"name":"emergencyWithdraw","type":"function","inputs":[{"name":"_token","type":"address","internalType":"contract IERC20"},{"name":"_tokenAmount","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"name":"emergencyWithdrawETH","type":"function","inputs":[{"name":"Amount","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"name":"multisendToken","type":"function","inputs":[{"name":"_token","type":"address","internalType":"contract IERC20"},{"name":"_contributors","type":"address[]","internalType":"address[]"},{"name":"_balances","type":"uint256[]","internalType":"uint256[]"}],"outputs":[],"stateMutability":"nonpayable"},{"name":"multisendTokenSigle","type":"function","inputs":[{"name":"_token","type":"address","internalType":"contract IERC20"},{"name":"_contributors","type":"address[]","internalType":"address[]"},{"name":"_balances","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"name":"multisendTokenwithApprove","type":"function","inputs":[{"name":"_token","type":"address","internalType":"contract IERC20"},{"name":"_contributors","type":"address[]","internalType":"address[]"},{"name":"_balances","type":"uint256[]","internalType":"uint256[]"}],"outputs":[],"stateMutability":"nonpayable"},{"name":"owner","type":"function","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"name":"renounceOwnership","type":"function","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"name":"sendMultiBnb","type":"function","inputs":[{"name":"_contributors","type":"address[]","internalType":"address payable[]"},{"name":"_balances","type":"uint256[]","internalType":"uint256[]"}],"outputs":[],"stateMutability":"payable"},{"name":"transferOwnership","type":"function","inputs":[{"name":"newOwner","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"}]
export const token_adress = '0x6320DBF6BEf21321767c6165045FB5370429b369'
export const token_abi = [{"type":"constructor","inputs":[],"stateMutability":"nonpayable"},{"name":"Approval","type":"event","inputs":[{"name":"owner","type":"address","indexed":true,"internalType":"address"},{"name":"spender","type":"address","indexed":true,"internalType":"address"},{"name":"value","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"name":"Transfer","type":"event","inputs":[{"name":"from","type":"address","indexed":true,"internalType":"address"},{"name":"to","type":"address","indexed":true,"internalType":"address"},{"name":"value","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"name":"allowance","type":"function","inputs":[{"name":"owner","type":"address","internalType":"address"},{"name":"spender","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"name":"approve","type":"function","inputs":[{"name":"spender","type":"address","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"name":"balanceOf","type":"function","inputs":[{"name":"account","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"name":"decimals","type":"function","inputs":[],"outputs":[{"name":"","type":"uint8","internalType":"uint8"}],"stateMutability":"view"},{"name":"decreaseAllowance","type":"function","inputs":[{"name":"spender","type":"address","internalType":"address"},{"name":"subtractedValue","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"name":"increaseAllowance","type":"function","inputs":[{"name":"spender","type":"address","internalType":"address"},{"name":"addedValue","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"name":"name","type":"function","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"name":"symbol","type":"function","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"name":"totalSupply","type":"function","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"name":"transfer","type":"function","inputs":[{"name":"recipient","type":"address","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"name":"transferFrom","type":"function","inputs":[{"name":"sender","type":"address","internalType":"address"},{"name":"recipient","type":"address","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"}]