export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  workingData() {
    this.weekWorkingDays = this.funcionamento.dataset.semana
      .split(",")
      .map(Number);
    this.weekWorkingTime = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  nowData() {
    this.actualDate = new Date();
    this.actualWeekDay = this.actualDate.getDay();
    this.actualHour = this.actualDate.getUTCHours() - 3;
  }

  isOpen() {
    const opensToday = this.weekWorkingDays.includes(this.actualWeekDay);
    const isOpenNow =
      this.actualHour >= this.weekWorkingTime[0] &&
      this.actualHour < this.weekWorkingTime[1];

    return isOpenNow && opensToday;
  }

  turnOnWhenOpen() {
    if (this.isOpen()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.workingData();
      this.nowData();
      this.turnOnWhenOpen();
    }

    return this;
  }
}
