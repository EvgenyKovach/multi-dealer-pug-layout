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

  let popularModelsSlider = new Swiper('.js-slider-popular-models', {
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
      nextEl: '.popular-models__button-next',
      prevEl: '.popular-models__button-prev',
      clickable: true,
    },
    spaceBetween: 60,
    slidesPerView: 1,
    loop: true,
    speed: 300,
  });

  let searchAsTypeSlider = new Swiper('.js-search-as-type-slider', {
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
      nextEl: '.search-as-type__button-next',
      prevEl: '.search-as-type__button-prev',
      clickable: true,
    },
    spaceBetween: 60,
    slidesPerView: 1,
    loop: true,
    speed: 300,
    allowTouchMove: true
  });

  let newArrivalsSlider = new Swiper('.js-new-arrivals-slider', {
    spaceBetween: 60,
    slidesPerView: 1,
    loop: true,
    speed: 300,
    allowTouchMove: true,
    longSwipesRatio: 1,
    navigation: {
      nextEl: '.new-arrivals__button-next',
      prevEl: '.new-arrivals__button-prev',
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
