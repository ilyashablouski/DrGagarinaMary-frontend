import 'intersection-observer';
import './polyfills';
import 'picturefill';
import lazySizes from 'lazysizes';
import 'lazysizes/plugins/native-loading/ls.native-loading';
import 'lazysizes/plugins/object-fit/ls.object-fit';
import jquery from 'jquery';
import swiper, { Autoplay } from 'swiper';
import SwiperCore, {Navigation, Pagination, EffectCoverflow } from 'swiper/core';
import ymaps from 'ymaps';
import ImageZoom from 'js-image-zoom';

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

window.$ = window.jQuery = jquery;
window.Swiper = swiper;
window.Ymaps = ymaps;
window.imageZoom = ImageZoom;

lazySizes.cfg.lazyClass = 'lazy';
lazySizes.cfg.srcAttr = 'data-original';
lazySizes.cfg.loadMode = 1;
lazySizes.cfg.nativeLoading = {
  setLoadingAttribute: true,
  disableListeners: {
    scroll: true,
  },
};
