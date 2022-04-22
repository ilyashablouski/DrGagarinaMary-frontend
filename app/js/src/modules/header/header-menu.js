class HeaderMenu extends Widget {
  constructor(node) {
    super(node, 'js-header');

    this.burgerBtn = this.queryElement('.burger');
    this.closeBtn = document.querySelector('.js-header__close');
    this.isOpened = false;

    this.onShowCloseClick = this.onShowCloseClick.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.build();

    return this;
  }

  build() {
    this.burgerBtn.addEventListener('click', this.onShowCloseClick);
    this.closeBtn.addEventListener('click', this.onShowCloseClick);
    document.addEventListener('click', ({ target }) => {
      if (target.closest('.js-header__aside') || target.closest('.js-header__burger')) {
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

  onShowCloseClick() {
    this.isOpened ? this.closeOverlay() : this.openOverlay();
  }

  static init(el) {
    HeaderMenu.el = new HeaderMenu(el);
  }
}

window.HeaderMenu = HeaderMenu;
