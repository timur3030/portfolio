"use strict";

let a = ""; // Первое число
let b = ""; // Второе число
let sign = ""; // Знак операции
let finish = false;

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const actions = ["-", "+", "x", "÷"];

const out = document.querySelector(".calculator__display"), // Дисплей калькулятора
  clearBtn = document.querySelector(".ac"), // Кнопка очистить все
  btnsWrapper = document.querySelector(".calculator__buttons"); // Обертка кнопок

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  out.textContent = 0;
}

clearBtn.addEventListener("click", clearAll);

btnsWrapper.addEventListener("click", (event) => {
  // Если нажата не кнопка
  if (!event.target.classList.contains("calculator__btn")) return;

  // Если нажата кнопка очистить все
  if (event.target.classList.contains("ac")) return;

  // Если нажата кнопка очищаем дисплей калькулятора
  out.textContent = "";

  // Получаем нажатую кнопку
  const key = event.target.textContent;

  // Если нажата клавиша 0-9 или . -> формируем первое число и выводим на дисплей
  if (digits.includes(key)) {
    if (b === "" && sign === "") {
      if (key === "." && a.includes(".")) {
        a += "";
        out.textContent = a;
      } else if (key === "." && a === "") {
        a = `0${key}`;
        out.textContent = a;
      } else {
        a += key;
        out.textContent = a;
      }
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      if (key === "." && b.includes(".")) {
        b += "";
        out.textContent = b;
      } else if (key === "." && b === "") {
        b = `0${key}`;
        out.textContent = b;
      } else {
        b += key;
        out.textContent = b;
      }
    }
    console.log(a, sign, b);
    return;
  }

  // Если нажата клавиша + - ÷ x -> формируем Знак операции и выводим на дисплей
  if (actions.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.log(a, sign, b);
    return;
  }

  // Если нажата клавиша =
  if (key === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = +a - +b;
        break;
      case "x":
        a = +a * +b;
        break;
      case "÷":
        if (b === "0") {
          out.textContent = "Ошибка";
          a = "";
          b = "";
          sign = "";
          finish = false;
          return;
        }
        a = +a / +b;
        if (a === NaN || a === Infinity) {
          out.textContent = "Ошибка";
          a = "";
          b = "";
          sign = "";
          finish = false;
          return;
        }
        break;
    }
    finish = true;
    out.textContent = a;
    console.log(a, sign, b);
  }
});
