const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header__info");

hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("is-active");
  console.log(e.target);
  if (hamburger.classList.contains("is-active")) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

menu.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.currentTarget === menu) {
    menu.style.display = "none";
    hamburger.classList.remove("is-active");
  }
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 4,
  grabCursor: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".innovations__button--next",
    prevEl: ".innovations__button--prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    481: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
