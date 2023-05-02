import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML += `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`;

    return div;
  }
  async function fetchAnimais(url) {
    try {
      const numerosGrid = document.querySelector(".numeros-grid");
      const animais = await (await fetch(url)).json();
      animais.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });

      initAnimaNumeros();
    } catch (error) {
      console.log(error);
    }
  }

  fetchAnimais("./animaisapi.json");
}
