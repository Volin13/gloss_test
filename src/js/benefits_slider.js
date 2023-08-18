import Swiper from 'swiper';
import { Mousewheel, Navigation } from 'swiper/modules';
// Now you can use Swiper
const swiper = new Swiper('.benefits__swiper', {
  speed: 500,
  direction: 'horizontal',
  grabCursor: true,
  mousewheel: true,
  modules: [Mousewheel, Navigation],
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 14,
      height: 288,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
