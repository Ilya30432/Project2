const arrowLeft = document.querySelector(".left");
const arrowRight = document.querySelector(".right");
const time = document.querySelector(".offerings__time-min");
const price = document.querySelector(".offerings__time-summa");

// Функция обновления кнопок (вынесена в отдельную)
function updateButtons() {
  let timeContent = +time.textContent;

  // Если достигли 0 — дизейблим левую кнопку
  if (timeContent <= 0) {
    arrowLeft.setAttribute("disabled", "");
  } else {
    arrowLeft.removeAttribute("disabled");
  }

  // Если достигли 180 — дизейблим правую кнопку
  if (timeContent >= 180) {
    arrowRight.setAttribute("disabled", "");
  } else {
    arrowRight.removeAttribute("disabled");
  }
}

arrowLeft.addEventListener("click", () => {
  time.textContent = +time.textContent - 10; // Обновляем значение времени
  price.textContent = +price.textContent - 49 // Обновляем значение суммы
  updateButtons(); // Проверяем и обновляем кнопки
});

arrowRight.addEventListener("click", () => {
  time.textContent = +time.textContent + 10; // Обновляем значение времени
  price.textContent = +price.textContent + 49 // Обновляем значение суммы
  updateButtons(); // Проверяем и обновляем кнопки
});

// Проверяем кнопки при загрузке
updateButtons();
