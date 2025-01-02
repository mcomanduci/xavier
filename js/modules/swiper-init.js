import Swiper from "./swiper.js";

export default function swiperInit() {
  const swiper = new Swiper(".swiper", {
    slidesPerGroupSkip: 3,
    slidesPerGroup: 1,
    spaceBetween: 12,
    slidesPerView: "auto",
    centeredSlides: false,
    allowTouchMove: true,
    direction: "horizontal",
    mousewheel: {
      invert: false,
    },

    breakpoints: {
      1024: {
        spaceBetween: 24,
        slidesPerView: "auto",
      },
    },

    // Optional Navigation
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
