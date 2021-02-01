export default () => {

  let slider = new Swiper('.slider__container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 300,
    breakpoints: {
      480: {
        spaceBetween: 100,
      },
      769: {
        spaceBetween: 50,
      },
      1024: {
        spaceBetween: 40,
      },
      1440: {
        spaceBetween: 50,
      },
    },
    navigation: {
      nextEl: '.slider__button-next',
      prevEl: '.slider__button-prev',
      clickable: true,
    },
  });

  let popularModelsSlider = new Swiper('.js-slider-popularModels', {
    breakpoints: {
      1224: {
        slidesPerView: 4,
      },
      980: {
        slidesPerView: 3,
      },
      625: {
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: '.popularModels__button-next',
      prevEl: '.popularModels__button-prev',
      clickable: true,
    },
    spaceBetween: 60,
    slidesPerView: 1,
    loop: true,
    speed: 300,
  });

  let searchAsTypeSlider = new Swiper('.js-searchAsType-slider', {
    breakpoints: {
      1224: {
        slidesPerView: 4,
      },
      980: {
        slidesPerView: 3,
      },
      625: {
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: '.searchAsType__button-next',
      prevEl: '.searchAsType__button-prev',
      clickable: true,
    },
    spaceBetween: 60,
    slidesPerView: 1,
    loop: true,
    speed: 300,
    allowTouchMove: true
  });

  let newArrivalsSlider = new Swiper('.js-newArrivals-slider', {
    spaceBetween: 60,
    slidesPerView: 1,
    loop: true,
    speed: 300,
    allowTouchMove: true,
    longSwipesRatio: 1,
    navigation: {
      nextEl: '.newArrivals__button-next',
      prevEl: '.newArrivals__button-prev',
      clickable: true,
    },
    breakpoints: {
      1280: {
        slidesPerView: 3,
      },
      875: {
        slidesPerView: 2,
      },
    },

  });

};
