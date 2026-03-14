const burgerButton = document.querySelector(".btn-burger-menu");
const closeButton = document.querySelector(".clous-burger-nav");
const menu = document.querySelector(".nav-tablet-pc");
const menuLinks = document.querySelectorAll(".nav-tablet-pc a");

if (burgerButton && closeButton && menu) {
  const openMenu = () => {
    menu.classList.add("is-open");
    burgerButton.classList.add("is-active");
    burgerButton.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
  };

  const closeMenu = () => {
    menu.classList.remove("is-open");
    burgerButton.classList.remove("is-active");
    burgerButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };

  burgerButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  });
}
