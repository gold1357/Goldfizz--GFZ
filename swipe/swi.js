//FOR SLIDEPERVIEW,INFINTY LOOP


var swiper = new Swiper(".card_slider", {
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});



//FOR  EFFECT COVERFLOW
// var swiper = new Swiper(".card_slider", {
//   effect: "coverflow",
//   grabCursor: true,

//   centeredSlides: true,
//   spaceBetween: 30,
// coverflowEffect: {
// rotate: 9,
// stretch: 2,
// depth: 400,
// modifier: 1,
// slideShadows: 0,
// },
//   loop: true,
//   speed: 1500,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },
//     480: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//     1200: {
//       slidesPerView: 4,
//     },
//   },
// });
