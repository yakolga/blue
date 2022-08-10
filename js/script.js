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

  function scrollToElement (selector) {
  $('html, body').animate({
    scrollTop: $(selector).offset().top
  }, 2000);    
  };

  $(document).on('click', 'a.smooth', function () {
    scrollToElement($(this).attr('href'));
  });

  const menus = document.querySelector('.menu'), 
        links = document.querySelector('.links'), 
        arrow = links.querySelector('.links__arrow');

  links.addEventListener('click', (e) => {
    menus.classList.toggle('none');
    if (!menus.classList.contains('none')) {
      arrow.style.transform = 'rotate(180deg)';
      arrow.style.transition = '0.4s all';
    } else if (menus.classList.contains('none')) {
      arrow.style.transform = 'rotate(0)';
      arrow.style.transition = '0.4s all';
    }
  });
});