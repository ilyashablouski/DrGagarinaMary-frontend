class HeaderFixed extends Widget {
  constructor(node) {
    super(node);

    this.isFixed = false;
    this.bigTabletAndDesktopMediaQuery = window.matchMedia('(min-width: 1024px)');
    this.onLayoutChange.call(this);
  }

  events() {
    onScroll(this.onScroll.bind(this));
  }

  build() {
    this.events();
    this.updateHeight();
    this.update();
  }

  destroy() {
    offScroll(this.onScroll);
    this.setHeaderAsNotFixed();
  }

  onLayoutChange() {
    if (this.bigTabletAndDesktopMediaQuery.matches) {
      this.build();
    }

    this.bigTabletAndDesktopMediaQuery.addEventListener('change', () => {
        if (this.bigTabletAndDesktopMediaQuery.matches) {
          this.build();
        } else {
          this.destroy();
        }
    })
  }

  setHeaderAsFixed() {
    this.isFixed = true;

    this.$node.classList.add('fixed-prepare');
    this.$node.classList.add('fixed');
  }

  setHeaderAsNotFixed() {
    this.isFixed = false;

    document.body.classList.remove('header-fixed');
    this.$node.classList.remove('fixed-prepare');
    this.$node.classList.remove('fixed');
  }

  update() {
    const scrollTop = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);

      if (scrollTop > window.innerHeight) {
        this.setHeaderAsFixed();
      } else {
        this.setHeaderAsNotFixed();
      }

    if (this.isFixed === false && scrollTop > this.baseHeight && document.body.classList.contains('header-fixed') === false) {
      this.$node.classList.add('fixed-prepare');
      document.body.classList.add('header-fixed');
    } else if (scrollTop <= this.baseHeight) {
      this.$node.classList.remove('fixed-prepare');
      document.body.classList.remove('header-fixed');
    }
  }

  updateHeight() {
    this.baseHeight = 100;
  }

  onScroll() {
    this.update();
  }

  static init(el) {
    new HeaderFixed(el);
  }
}

window.HeaderFixed = HeaderFixed;
