import Swiper from 'swiper';
import { Mousewheel } from 'swiper/modules';
const image1 = './assets/images/benefits/image1-min.jpg';
const image2 = './assets/images/benefits/image2-min.jpg';
const image3 = './assets/images/benefits/image3-min.jpg';
const image4 = './assets/images/benefits/image4-min.jpg';
const swiperWrapper = document.querySelector('.swiper-wrapper');
// Now you can use Swiper
const swiper = new Swiper('.swiper', {
  speed: 500,
  direction: 'horizontal',
  grabCursor: true,
  mousewheel: true,
  modules: [Mousewheel],
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

const images = [image1, image2, image3, image4, image1, image2, image3, image4];

images.forEach(function (image) {
  let slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = '<img src="' + image + '" alt="веб студія Глянець">';
  swiperWrapper.appendChild(slide);
});
