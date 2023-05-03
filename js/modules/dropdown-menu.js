import outsideClick from "./outsideclick.js";

export default class DropDownMenu {
  constructor(dropdownMenus, userEvents) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);

    this.activeClass = "active";

    this.userEvents =
      userEvents === undefined ? ["touchstart", "click"] : userEvents;
  }

  activeDropdownMenu(event) {
    event.preventDefault();

    const element = event.currentTarget;

    element.classList.add(this.activeClass);
    outsideClick(element, this.userEvents, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.userEvents.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    this.addDropdownMenusEvent();
  }
}
