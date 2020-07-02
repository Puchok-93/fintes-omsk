'use strict';

const containerPromo = document.querySelector(".container-promo");
const swiperContainer = document.querySelector(".swiper-container");

new Swiper('.container-promo', {
  loop: true,
  autoplay: false,
  sliderPerView: 1,
})
