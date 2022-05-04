class Filter extends Widget {
  constructor(node) {
    super(node, 'js-filter');

    this.openFilterBtn = document.querySelector('.js-filter__open');
    this.closeFilterBtn = this.queryElement('.close');
    this.isOpened = false;

    this.onOpenCloseClick = this.onOpenCloseClick.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.build();

    return this;
  }

  build() {
    this.openFilterBtn.addEventListener('click', this.onOpenCloseClick);
    this.closeFilterBtn.addEventListener('click', this.onOpenCloseClick);
    document.addEventListener('click', ({ target }) => {
      if (target.closest('.js-filter') || target.closest('.js-filter__open')) {
        return;
      } else {
        this.closeOverlay();
      }
    });
  }

  openOverlay() {
    this.isOpened = true;
    this.$node.classList.add('opened');
    document.body.classList.add('no-scrollbar');
  }

  closeOverlay() {
    this.isOpened = false;
    this.$node.classList.remove('opened');
    document.body.classList.remove('no-scrollbar');
  }

  onOpenCloseClick() {
    this.isOpened ? this.closeOverlay() : this.openOverlay();
  }

  static init(el) {
    console.log("iehjfiuhefiuh");
    Filter.el = new Filter(el);
  }
}

window.Filter = Filter;
