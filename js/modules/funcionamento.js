export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");

  const weekWorkingDays = funcionamento.dataset.semana.split(",").map(Number);
  const weekWorkingTime = funcionamento.dataset.horario.split(",").map(Number);
  const actualDate = new Date();
  const actualWeekDay = actualDate.getDay();
  const actualHour = actualDate.getHours();

  const opensToday = weekWorkingDays.includes(actualWeekDay);
  const isOpenNow = actualHour >= weekWorkingTime[0] && actualHour < weekWorkingTime[1];

  if (opensToday && isOpenNow) {
    funcionamento.classList.add("aberto");
  }
}
