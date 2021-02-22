export default () => {
  const galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 5,
    slidesPerView: 8,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
  });

  const galleryTop = new Swiper('.gallery-top', {
    width: null,
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 5,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    },
    breakpoints: {
      768: {
        width: 693,
      }
    }
  });

}


