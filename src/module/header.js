const btnOpen = document.querySelector(".burger__open");
const btnClose = document.querySelector(".burger__close");
const nav = document.querySelector(".nav");
const btn = document.querySelector(".head__btn");

btnOpen.addEventListener("click", function () {
  nav.classList.add("active");
});
btnClose.addEventListener("click", function () {
  nav.classList.remove("active");
});
function updateButtonText() {
  if (window.innerWidth >= 1024) {
    btn.textContent = "Войти";
  } else {
    btn.textContent = "Начать беседу";
  }
}
// Запускаем при загрузке
updateButtonText();
// Обновляем при изменении размера экрана
window.addEventListener("resize", updateButtonText);
