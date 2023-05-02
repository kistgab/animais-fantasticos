export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");
    numeros.forEach((numero) => {
      const total = Number(numero.innerText);
      const increment = Math.floor(total / 100);
      let count = 0;

      const timer = setInterval(() => {
        count += increment;
        if (count > total) {
          count = total;
          clearInterval(timer);
        }
        numero.innerText = count;
      }, 25 * Math.random());
    });
  }

  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observerTarget = document.querySelector(".numeros");
  observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}
