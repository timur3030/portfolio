const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close"),
  overlay = document.querySelector(".menu__overlay"),
  menuList = document.querySelectorAll(".menu__link"),
  contactBtn = document.querySelector(".contacts__btn"),
  modal = document.querySelector(".modal"),
  checkbox = document.querySelector(".checkbox"),
  userName = document.querySelector("#name"),
  userMail = document.querySelector("#email");
  // inputs = document.querySelectorAll(".input");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("active");
});

menuList.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

// contactBtn.addEventListener("click", () => {
//   for (let input of [...inputs]) {
//     if (!input.value || !checkbox.checked) {
//       break;
//     } else {
//       modal.classList.add("activate");
//       setTimeout(() => {
//         modal.classList.remove("activate");
//       }, 1000);
//     }
//   }
// });

contactBtn.addEventListener("click", () => {
  if (userName.value && userMail.value && checkbox.checked) {
    modal.classList.add("activate");
    setTimeout(() => {
      modal.classList.remove("activate");
    }, 1500);
  }
});

const counters = document.querySelectorAll(".skills__ratings-counter"),
  lines = document.querySelectorAll(".skills__ratings-line span");

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      // $("#consultation, #order").fadeOut();
      // $(".overlay, #thanks").fadeIn("slow");
      $("form").trigger("reset");
    });
    return false;
  });
});
