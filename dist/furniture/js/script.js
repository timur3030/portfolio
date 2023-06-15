const hamburger = document.querySelector(".hamburger"),
  nav = document.querySelector("nav"),
  closeElem = document.querySelector(".menu__close"),
  overlay = document.querySelector(".menu__overlay"),
  menuList = document.querySelectorAll(".menu__link");

hamburger.addEventListener("click", () => {
  nav.classList.add("active");
  overlay.classList.add("menu__overlay_active");
});

closeElem.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("menu__overlay_active");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("menu__overlay_active");
});

menuList.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("menu__overlay_active");
  });
});
