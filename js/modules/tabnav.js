export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  activeTab(index) {
    this.tabContent.forEach((section) =>
      section.classList.remove(this.activeClass)
    );

    const animationDirection = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, animationDirection);
  }

  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabContent.length && this.tabMenu.length) {
      this.activeTab(0);
      this.addTabNavEvent();
    }

    return this;
  }
}
