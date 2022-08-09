window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header__list"),
    menuItem = document.querySelectorAll(".header__item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("header__hamburger_active");
    menu.classList.toggle("header__list_active");
  });


  menuItem.forEach((item) => {
    item.addEventListener("click", (e) => {
      hamburger.classList.toggle("header__hamburger_active");
      menu.classList.toggle("header__list_active");
    });
  });
});