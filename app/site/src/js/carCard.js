export default () => {
  let carSlider = document.querySelectorAll('.js-carCardSwiper');

  if (carSlider && carSlider.length) {
    let collectionsSwiper = new Swiper('.js-carCardSwiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      effect: 'fade',
      speed: 0,
      autoplay: {
        enabled: false,
        delay: 500
      },
      //Responsive breakpoints
      breakpoints: {
        480: {
          spaceBetween: 100
        },
        769: {
          spaceBetween: 50
        },
        1024: {
          spaceBetween: 40
        },
        1440: {
          spaceBetween: 50
        }
      },
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      scrollbar: {
        el:'.swiper-scrollbar'
      },
    });

    if (Array.isArray(collectionsSwiper)) {
      collectionsSwiper.forEach((item) => {
        item.el.addEventListener("mouseleave", () => {
          item.slideTo(0, 0);
        });
      });
    } else {
      collectionsSwiper.el.addEventListener("mouseleave", () => {
        collectionsSwiper.slideTo(0, 0);
      });
    }

    let swiperList = document.querySelectorAll('.js-carCardSwiper');

    if (swiperList) {
      swiperList.forEach((item, index)=> {

        let bulletsList = item.querySelectorAll('.swiper-pagination-bullet');

        if (bulletsList) {
          bulletsList.forEach((bulletItem, bulletIndex)=> {

            bulletItem.addEventListener("mouseenter", (e) => {

              if (collectionsSwiper.length) {
                collectionsSwiper[index].slideTo(bulletIndex,0);
              } else {
                collectionsSwiper.slideTo(bulletIndex,0);
              }

              item.querySelectorAll(".swiper-pagination-bullet-active").forEach((bulletItemActive, bulletIndexActive)=> {

                bulletItemActive.classList.remove("swiper-pagination-bullet-active");
              });

              bulletItem.classList.add("swiper-pagination-bullet-active");

            });
            bulletItem.addEventListener("mouseleave", (e) => {
              if(e.toElement.classList.contains("swiper-pagination-bullet")) {
                bulletItem.classList.remove("swiper-pagination-bullet-active");
              }
            });
          });
        }
      });
    }
  }
}
