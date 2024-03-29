class HeaderMenu extends Widget {
  constructor(node) {
    super(node, 'js-header');

    this.burgerBtn = this.queryElement('.burger');
    //Delete after return yClients
    this.bookingBtns = document.querySelectorAll('.js-booking-btn');
    this.asideBookingContent = document.querySelector('.aside__content-booking');
    this.asideMainContent = document.querySelector('.aside__content-main');
    //-----------------------------------------------------------------------
    this.closeBtn = document.querySelector('.js-header__close');
    this.isOpened = false;

    this.onOpenCloseClick = this.onOpenCloseClick.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.build();

    return this;
  }

  build() {
    //Delete after return yClients
    this.bookingBtns.forEach((element) => {
      element.addEventListener('click', (event) => {
        event.preventDefault();
        this.asideBookingContent.style.display = 'block';
        this.asideMainContent.style.display = 'none';

        this.onOpenCloseClick(event.target);
      });
    });
    //-----------------------------------------------------------------------
    this.burgerBtn.addEventListener('click', ({ target }) => {
      //Delete after return yClients
      this.asideBookingContent.style.display = 'none';
      this.asideMainContent.style.display = 'block';
      //-----------------------------------------------------------------------
      this.onOpenCloseClick(target);
    });
    this.closeBtn.addEventListener('click', this.onOpenCloseClick);
    document.addEventListener('click', ({ target }) => {
      if (target.closest('.js-header__aside') ||
        target.closest('.js-header__burger') ||
        target.closest('.js-booking-btn')) {
        return;
      } else {
        this.closeOverlay();
      }
    });
  }

  openOverlay(target) {
    this.isOpened = true;
    target.classList.contains('js-booking-btn') ?
      this.$node.classList.add('opened') : this.$node.classList.add('opened-menu');
    document.body.classList.add('no-scrollbar');
  }

  closeOverlay() {
    this.isOpened = false;
    this.$node.classList.remove('opened', 'opened-menu');
    document.body.classList.remove('no-scrollbar');
  }

  onOpenCloseClick(target) {
    this.isOpened ? this.closeOverlay() : this.openOverlay(target);
  }

  static init(el) {
    HeaderMenu.el = new HeaderMenu(el);
  }
}

window.HeaderMenu = HeaderMenu;
