import Swiper from 'swiper';

export default () => {
    const slider = new Swiper('.slider-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        loop: true,
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
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const popularModelsSlider = new Swiper('.popularModels-slider', {
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            480: {
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
};
