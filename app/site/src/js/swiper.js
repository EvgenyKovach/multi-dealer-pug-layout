import Swiper from '../../../../node_modules/swiper';

export default () => {
    const slider = new Swiper('.swiper-container', {
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
};
