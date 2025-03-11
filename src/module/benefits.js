const section = document.querySelector("#benefits-sec");
const divBenefits = document.querySelector(".benefits");

function updateClass() {
  if (innerWidth >= 768) {
    section.classList.remove("benefits__bg-color");
    divBenefits.classList.add("benefits__bg-color");
  } else {
    section.classList.add("benefits__bg-color");
    divBenefits.classList.remove("benefits__bg-color");
  }
}
updateClass();
window.addEventListener("resize", updateClass);
