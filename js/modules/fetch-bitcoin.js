export default function initFetchBitcoin() {
  async function getBitcoinPrice() {
    try {
      const url = "https://blockchain.info/ticker";
      const btcPrices = await (await fetch(url)).json();
      const txtBtcPreco = document.querySelector(".btc-preco");
      txtBtcPreco.innerText = (1000 / btcPrices.BRL.sell).toFixed(4);
    } catch (error) {
      console.log(error);
    }
  }

  getBitcoinPrice();
}
