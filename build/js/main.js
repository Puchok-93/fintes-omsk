'use strict';

document.querySelectorAll(".tabs-trigger__item").forEach((item) =>
  item.addEventListener('click', function (e) {
  e.preventDefault();
  const id = e.target.getAttribute('href').replace('#', '');
  document.querySelectorAll('.tabs-trigger__item').forEach((child) => child.classList.remove('tabs-trigger__item--active'));
  document.querySelectorAll('.tabs-content__item').forEach((child) => child.classList.remove('tabs-content__item--active'));

  item.classList.add('tabs-trigger__item--active');
  document.getElementById(id).classList.add('tabs-content__item--active');
})
);

document.querySelector('.tabs-trigger__item').click();


const slideReviewsrBlock = document.querySelector(`.slider-responses__wrapper`);
    if (slideReviewsrBlock) {
      const reviewsSlider = new Swiper(`.slider-responses__wrapper`, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 57,
        navigation: {
          nextEl: `.slider-reviews__btn--next`,
          prevEl: `.slider-reviews__btn--prev`
        },
        breakpoints: {
          320: {
            spaceBetween: 32
          },
          768: {
            spaceBetween: 57
          },
          1200: {
            spaceBetween: 80
          }
        }
      });
    }



  const sliderBlock = document.querySelector(`.slider__wrapper`);
  if (sliderBlock) {
    const mainSlider = new Swiper(`.slider__wrapper`, {
      loop: true,
      navigation: {
        nextEl: `.slider__btn--next`,
        prevEl: `.slider__btn--prev`
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 40
        }
      }
    });
  }
