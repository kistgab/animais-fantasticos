export default function fetchBitcoin(url, target) {
  async function getBitcoinPrice() {
    try {
      const btcPrices = await (await fetch(url)).json();
      const txtBtcPreco = document.querySelector(target);
      txtBtcPreco.innerText = (1000 / btcPrices.BRL.sell).toFixed(4);
    } catch (error) {
      console.log(error);
    }
  }

  getBitcoinPrice();
}
