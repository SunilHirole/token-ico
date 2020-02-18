export default function ether (n) {
  // console.log('====web3', web3)
  return (web3.utils.toWei(n, 'ether'));
}