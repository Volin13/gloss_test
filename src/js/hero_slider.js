import Swiper from 'swiper';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
// Now you can use Swiper
const heroSwiper = new Swiper('.hero__swiper', {
  speed: 500,
  direction: 'horizontal',
  grabCursor: true,
  mousewheel: true,
  modules: [Mousewheel, Pagination, Autoplay],
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
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
    1440: {
      slidesPerView: 1,
      height: 583,
    },
    1920: {
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
