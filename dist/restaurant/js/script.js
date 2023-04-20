const hamburger = document.querySelector(".hamburger"),
  nav = document.querySelector(".header__nav"),
  menuItem = document.querySelectorAll(".header__menu-item");
//   overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger_active");
  nav.classList.toggle("header__nav_active");
//   overlay.classList.toggle("hidden");
});

// if (wrapper.classList.contains("hidden")) {
//   wrapper.addEventListener("click", () => {
//     hamburger.classList.toggle("hamburger_active");
//     nav.classList.toggle("header__nav_active");
//     wrapper.classList.toggle("hidden");
//   });
// }

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    nav.classList.toggle("header__nav_active");
  });
});
