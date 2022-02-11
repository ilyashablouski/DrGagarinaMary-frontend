class HeaderBurger extends Widget {
  constructor(node) {
    super(node, 'js-header');

    this.burgerBtn = this.queryElement('.open');
    this.closeBtn = this.queryElement('.close');
    this.pushedBlock = this.queryElement('.pushed');
    this.isOpened = false;

    this.onShowCloseClick = this.onShowCloseClick.bind(this);
    this.build();

    return this;
  }

  build() {
    this.burgerBtn.addEventListener('click', this.onShowCloseClick);
    this.closeBtn.addEventListener('click', this.onShowCloseClick);
    document.addEventListener('click', ({ target }) => {
      if (target.closest('.js-header__pushed') || target.closest('.js-header__open')) {
        return;
      } else {
        close();
      }
    });
  }

  open() {
    this.isOpened = true;
    this.$node.classList.add('opened');
    document.body.classList.add('no-scrollbar');
  }

  close() {
    this.isOpened = false;
    this.$node.classList.remove('opened');
    document.body.classList.remove('no-scrollbar');
  }

  onShowCloseClick() {
    this.isOpened ? this.close() : this.open();
  }

  static init(el) {
    HeaderBurger.el = new HeaderBurger(el);
  }

  static open() {
    if (HeaderBurger.el) {
      HeaderBurger.el.open();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-header').forEach(element => HeaderBurger.init(element));
});

window.HeaderBurger = HeaderBurger;
