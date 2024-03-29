//styles

import 'swiper/swiper-bundle.css';
import 'nouislider/distribute/nouislider.min.css';
import 'choices.js/src/styles/choices.scss';
import '../styles/app.scss';


// js
import lazyLoad from './lazyLoad';
import toggleMenu from './toggleMenu';                        // скрипт тагла мобильного меню
import swiper from './swiper';                                // инит слайдера(ов)
import carCard from './carCardSlider';                              // инит слайдера в карточке + переработка pagination
import hiddenTextDescription from './hiddenTextDescription';  // скрытый текст на главной
import scrollTop from './scrollTop';                          // кнопка "вверх"
import checkbox from "./checkbox-l";                          //  настройка чекбоксов в фильтре
import toggleFilters from "./toggle_inits";                   // тагл разделов фильтра
import rangeSlider from "./rangeSlider";                       // инит ползунка слайдера
import colorPickFilter from "./checkbox-color";                // настройка чекбокса выбора цвета фильтра
import stickySidebar from "./stickySidebar";                   // инит плавающей настройки фильтра
import select from './select';
import mobileFilter from "./mobileFilter";                     // мобильный фильтр
import footerBrands from "./footerBrands";                     // размер списка бренда в футере, вынужденный костыль
import thumbSlider from "./thumbSlider"
import toggleOptions from "./toggleOptions";
import rangeSliderCredit from "./rangeSliderCredit";
import popup from "./popup";
import phoneMask from "./phoneMask";
import ymaps from "./ymaps";
import toggle_inits from "./toggle_inits";


// inits

swiper();
carCard();
lazyLoad();
hiddenTextDescription();
scrollTop();
select();
footerBrands();
thumbSlider();
checkbox();
stickySidebar();

toggleMenu();
toggleOptions();
rangeSliderCredit();
popup();
phoneMask();
ymaps();
toggle_inits();

// filter scripts
if (document.querySelector('.filters')) {
  rangeSlider();
  colorPickFilter();
  mobileFilter();
}
