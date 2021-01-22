//styles
import '../styles/app.scss';
import 'swiper/swiper-bundle.css';

// js
import lazyLoad from './lazyLoad';
import toggleMenu from './toggleMenu';
import swiper from './swiper';
import carCard from './carCard';
import hiddenTextDescription from './hiddenTextDescription';
import scrollTop from './scrollTop';
import checkbox from "./checkbox";
import toggleFilters from "./toggleFilters";

// inits
toggleMenu();
swiper();
carCard();
lazyLoad();
hiddenTextDescription();
scrollTop();

// filter
checkbox();
toggleFilters()
