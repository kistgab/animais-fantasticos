import SmoothScroll from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropDownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import fetchAnimals from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import AnimateScroll from "./modules/scroll-animation.js";
import Funcionamento from "./modules/funcionamento.js";

const smoothScroll = new SmoothScroll("[data-menu='suave'] a[href^='#']");
smoothScroll.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

const modal = new Modal(
  "[data-modal='abrir']",
  "[data-modal='fechar']",
  "[data-modal='container']"
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const animateScroll = new AnimateScroll("[data-anime='scroll']");
animateScroll.init();

const dropdownMenu = new DropDownMenu("[data-dropdown]", [
  "touchstart",
  "click",
]);
dropdownMenu.init();

const funcionamento = new Funcionamento("[data-semana]", "aberto");
funcionamento.init();

initMenuMobile();

fetchAnimals("../../animaisapi.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
