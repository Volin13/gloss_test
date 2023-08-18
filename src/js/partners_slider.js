import Swiper from 'swiper';
import { Mousewheel, Navigation } from 'swiper/modules';
// Now you can use Swiper
const swiper2 = new Swiper('.partners__swiper', {
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
      slidesPerView: 6,
      spaceBetween: 30,
      height: 150,
    },
  },
  navigation: {
    nextEl: '.partners-swiper-button-next',
    prevEl: '.partners-swiper-button-prev',
  },
});
