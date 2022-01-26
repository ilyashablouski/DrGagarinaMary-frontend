class Carousel extends Widget {
  constructor(node) {
    super(node, '.js-carousel');

    this.swiper = null;
    this.activeFilter = null;
    this.$slider = this.queryElement('.slider');
    this.$slides = this.queryElements('.item');
    // this.$navPrev = this.queryElement('.prev');
    // this.$navNext = this.queryElement('.next');
    this.$tabs = this.queryElements('.tab');
    // this.isBig = !!this.$node.dataset.carouselBig;
    this.withPagination = !!this.$node.dataset.carouselWithPagination;

    this.onLayoutChange = this.onLayoutChange.bind(this);

    this.init();
  }

  build() {
    this.events();
    this.default();

    this.onLayoutChange();
  }


  onLayoutChange() {
    if (Layout.isDesktopLayout()) {
      this.initDesktop();
    } else {
      this.initMobile();
    }
  }

  initDesktop() {
    this.initSwiper();
  }

  initMobile() {
    if (this.swiper) {
      this.swiper.destroy(true, true);
      this.swiper = null;
    }
  }

  initSwiper() {
    // If Carousel with scrollbar
    // if (document.querySelector('.swiper-scrollbar')) {
    //   this.swiper = new Swiper(this.$slider, {
    //     slidesPerView: 'auto',
    //     scrollbar: {
    //       el: '.swiper-scrollbar',
    //       draggable: true,
    //     },
    //     grabCursor: true,
    //     spaceBetween: 0,
    //     preventClicks: false,
    //     preventClicksPropagation: false,
    //     navigation: {
    //       prevEl: this.$navPrev,
    //       nextEl: this.$navNext,
    //     },
    //     on: {
    //       slideChangeTransitionStart: () => this.$slider.classList.add('transition'),
    //       slideChangeTransitionEnd: () => this.$slider.classList.remove('transition'),
    //     },
    //   });
    // } else {

    this.swiper = new Swiper(this.$slider, {
      slidesPerView: 'auto',
      pagination: this.withPagination ? {
        el: '.swiper-pagination',
        clickable: true,
      } : false,
      spaceBetween: 90,
      loop: true,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 3,
        slideShadows: false,
      },
    });
  }

  events() {
    this.$tabs.forEach($tab => $tab.addEventListener('click', e => {
      e.preventDefault();
      this.setActiveFilter($tab.dataset.filter);
    }));

    Layout.addListener(this.onLayoutChange);
  }

  setActiveFilter(filter) {
    this.activeFilter = filter;
    this.$tabs.forEach($tab => $tab.classList.toggle('active', $tab.dataset.filter === filter));

    this.processFilter();

    this.$slider.scrollLeft = 0;
  }

  showNode(node) {
    node.classList.add('swiper-slide');
    node.classList.remove('non-swiper-slide');
  }

  hideNode(node) {
    node.classList.remove('swiper-slide');
    node.classList.add('non-swiper-slide');
  }

  checkFilter(filter, $node) {
    if (filter === '*') {
      return true;
    }

    const filters = $node.dataset.filters ? $node.dataset.filters.split(',') : [];

    return filters.indexOf(filter) !== -1;
  }

  processFilter() {
    let visibleCount = 0;

    this.$slides.forEach(node => {
      if (this.checkFilter(this.activeFilter, node)) {
        this.showNode(node);
        visibleCount = visibleCount + 1;
      } else {
        this.hideNode(node);
      }
    });

    if (this.swiper) {
      this.swiper.destroy(true, true);
      this.initSwiper();
    }
  }

  default() {
    let found = false;

    this.$tabs.forEach($tab => {
      if ($tab.classList.contains('active')) {
        this.setActiveFilter($tab.dataset.filter);
        found = true;
      }
    });
  }


  static init(el) {
    el && new Carousel(el);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-carousel').forEach(item => Carousel.init(item));
});

