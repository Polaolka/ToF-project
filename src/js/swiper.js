const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
  // slidesPerView: 3,
  // direction: getDirection,
  
  slidesPerView: 3,
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween:8
    },
  
    // when window width is >= 640px
    768: {
      slidesPerView: 4,
      spaceBetween: 32
    },

    1280: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'coverflow',
  coverflowEffect: {
    depth: 100,
    rotate: 10,
    slideShadows: false,
    scale: .8,
  },
  loop: true,
});
