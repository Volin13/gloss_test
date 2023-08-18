import Swiper from 'swiper';
import { Mousewheel, Pagination } from 'swiper/modules';
// Now you can use Swiper
const heroSwiper = new Swiper('.hero__swiper', {
  speed: 500,
  direction: 'horizontal',
  grabCursor: true,
  mousewheel: true,
  modules: [Mousewheel, Pagination],
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1280: {
      slidesPerView: 1,
      height: 583,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});
