    const infoLiNum = document.querySelectorAll(".info__box-num");
    const infoLi = document.querySelectorAll(".info__item-list");

  infoLiNum.forEach((elem, index) => {
    elem.addEventListener("click", () => {
      infoLi.forEach((content) => {
        content.classList.remove("active");
      });
      infoLiNum.forEach((tab) => {
        tab.classList.remove("active__btn");
      });
      infoLiNum[index].classList.add("active__btn");
      infoLi[index].classList.add("active");
    });
  });
