import outsideClick from "./outsideclick.js";

export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  const userEvents = ["touchstart", "click"];

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");

    outsideClick(this, userEvents, () => {
      this.classList.remove("active");
    });
  }

  dropdownMenus.forEach((menu) => {
    userEvents.forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
