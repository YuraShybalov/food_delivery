const burgerButton = document.querySelector(".btn-burger-menu");
const closeButton = document.querySelector(".clous-burger-nav");
const menu = document.querySelector(".nav-tablet-pc");
const menuLinks = document.querySelectorAll(".nav-tablet-pc a");
const heroFoodImage = document.querySelector(".hero-food-image");
const heroPrevButton = document.querySelector(".skroll-left");
const heroNextButton = document.querySelector(".skroll_right");
// -----------------------------
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

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  document.addEventListener("resize", () => {
    if (document.innerWidth >= 768) {
      closeMenu();
    }
  });
}
//
if (heroFoodImage && heroPrevButton && heroNextButton) {
  const tabletSlides = [
    {
      src: "./images/tablet/dish_1_tablet.png",
      alt: "Dish with fresh food",
    },
  ];

  const desktopSlides = [
    {
      src: "./images/pc/hero/dish_1_pc.png",
      alt: "Dish with fresh food 1",
    },
    {
      src: "./images/pc/hero/dish_2_pc.png",
      alt: "Dish with fresh food 2",
    },
    {
      src: "./images/pc/hero/dish_3_pc.png",
      alt: "Dish with fresh food 3",
    },
  ];

  let currentSlideIndex = 0;

  const getHeroSlides = () => {
    return window.innerWidth >= 1280 ? desktopSlides : tabletSlides;
  };

  const updateHeroSlide = () => {
    const slides = getHeroSlides();

    if (currentSlideIndex >= slides.length) {
      currentSlideIndex = 0;
    }

    heroFoodImage.src = slides[currentSlideIndex].src;
    heroFoodImage.alt = slides[currentSlideIndex].alt;
  };

  heroPrevButton.addEventListener("click", () => {
    const slides = getHeroSlides();
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateHeroSlide();
  });

  heroNextButton.addEventListener("click", () => {
    const slides = getHeroSlides();
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateHeroSlide();
  });

  window.addEventListener("resize", updateHeroSlide);

  updateHeroSlide();
}
