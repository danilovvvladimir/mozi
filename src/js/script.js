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
