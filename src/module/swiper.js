import Swiper from "swiper";
import "swiper/css"; // Базовые стили
import "swiper/css/pagination"; // Если нужен пагинатор
import "swiper/css/navigation"; // Если нужна навигация
import { Pagination } from "swiper/modules";

// Инициализация
const swiper = new Swiper(".my-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true, // Включаем свободный режим
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

// swiper reviews

const swiperReviews = new Swiper(".reviews-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true, // Включаем свободный режим
  modules: [Pagination],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 2,
    },
    1940: {
      slidesPerView: 2.4,
    },
  },
  on: {
    transitionEnd: function () {
      const containerRect = this.el.getBoundingClientRect();
      // Сначала убираем класс у всех слайдов
      this.slides.forEach((slide) => slide.classList.remove("blurred"));

      // Проверяем, если ширина окна больше или равна 1940px
      if (window.innerWidth >= 1940) {
        // Находим первый слайд, который частично выходит за правую границу контейнера
        const partiallyVisibleSlide = Array.from(this.slides).find((slide) => {
          const rect = slide.getBoundingClientRect();
          return (
            rect.right > containerRect.right && rect.left < containerRect.right
          );
        });

        if (partiallyVisibleSlide) {
          partiallyVisibleSlide.classList.add("blurred");
        }
      }
    },
  },
});
