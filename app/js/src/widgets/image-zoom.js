class ImageZoom extends Widget {
  constructor(node) {
    super(node, '.js-image-zoom');

    this.imageZoom = null;
    this.zoomImageContainer = this.queryElement('.container');
    this.zoomOptions = {
      zoomPosition: 'original',
      offset: { vertical: 0, horizontal: 10 },
      zoomLensStyle: 'opacity: 0;background: transparent;',
    };
    this.desktopMediaQuery = window.matchMedia('(min-width: 1260px)');

    this.onLayoutChange = this.onLayoutChange.call(this);
  }

  build() {
    this.imageZoom = new imageZoom(this.zoomImageContainer, this.zoomOptions);
  }

  destroy() {
    this.imageZoom.kill();
    this.imageZoom = null;
  }

  onLayoutChange() {
    if (this.desktopMediaQuery.matches) {
      this.build();
    }

    this.desktopMediaQuery.addEventListener('change', () => {
      if (this.desktopMediaQuery.matches) {
        this.build();
      } else {
        this.destroy();
      }
    });
  }

  static init(element) {
    element && new ImageZoom(element);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-image-zoom').forEach(item => ImageZoom.init(item));
});
