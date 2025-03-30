import Swiper from 'swiper';
import 'swiper/css'; // Базовые стили
import 'swiper/css/pagination'; // Если нужен пагинатор
import 'swiper/css/navigation'; // Если нужна навигация
import { Pagination } from 'swiper/modules';

// Инициализация
const swiper = new Swiper('.my-swiper', {
  slidesPerView: 1, 
  spaceBetween: 10, 
  freeMode: true, // Включаем свободный режим
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    }
  },
});
 
// swiper reviews

const swiperReviews = new Swiper('.reviews-swiper', {
  slidesPerView: 1, 
  spaceBetween: 10, 
  freeMode: true, // Включаем свободный режим
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    }
  },
});
