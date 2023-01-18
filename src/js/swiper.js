const swiper = new Swiper('.swiper', {
  centeredSlides: true,
  speed: 400,
  slidesPerView: 3,
  spaceBetween: 8,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    768: {
      spaceBetween: 32,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  effect: 'coverflow',
  coverflowEffect: {
    depth: 50,
    rotate: 10,
    slideShadows: false,
    scale: 0.8,
  },
  loop: true,
});
