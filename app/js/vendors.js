import 'intersection-observer';
import './polyfills';
import 'picturefill';
import lazySizes from 'lazysizes';
import 'lazysizes/plugins/native-loading/ls.native-loading';
import 'lazysizes/plugins/object-fit/ls.object-fit';
import svgPolyfill from 'svg4everybody';
import jquery from 'jquery';
import swiper from 'swiper';
import SwiperCore, { Pagination, EffectCoverflow } from 'swiper/core';
import ymaps from 'ymaps';
import imask from 'imask';
import datepicker from 'js-datepicker';
import { format as dateFormat } from 'date-fns';

SwiperCore.use([Pagination, EffectCoverflow]);

window.$ = window.jQuery = jquery;
window.svg4everybody = svgPolyfill;
window.Swiper = swiper;
window.IMask = imask;
window.datepicker = datepicker;
window.dateHelper = {
  format: dateFormat,
};
window.Ymaps = ymaps;

lazySizes.cfg.lazyClass = 'lazy';
lazySizes.cfg.srcAttr = 'data-original';
lazySizes.cfg.loadMode = 1;
lazySizes.cfg.nativeLoading = {
  setLoadingAttribute: true,
  disableListeners: {
    scroll: true,
  },
};
