import AnimateNumbers from "./anima-numeros.js";

export default function fetchAnimals(url, target) {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML += `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`;

    return div;
  }

  const numerosGrid = document.querySelector(target);
  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animateAnimalsNumbers() {
    const animateNumbers = new AnimateNumbers(
      "[data-numero]",
      ".numeros",
      "ativo"
    );
    animateNumbers.init();
  }

  async function createAnimals() {
    try {
      const animals = await (await fetch(url)).json();
      animals.forEach((animal) => fillAnimals(animal));
      animateAnimalsNumbers();
    } catch (error) {
      console.log(error);
    }
  }

  return createAnimals();
}
