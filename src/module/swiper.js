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
});