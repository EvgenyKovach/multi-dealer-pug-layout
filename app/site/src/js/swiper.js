export default () => {

    let slider = new Swiper('.slider__container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 600,
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

    let popularModelsSlider = new Swiper('.popularModels-slider', {
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
        speed: 600,
    });

    let searchAsTypeSlider = new Swiper('.searchAsType-slider', {
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
        speed: 600,
    });

};
