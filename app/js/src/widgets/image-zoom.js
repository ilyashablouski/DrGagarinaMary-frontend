class ImageZoom extends Widget {
  constructor(node) {
    super(node, '.js-image-zoom');
    this.zoomImageContainer = this.queryElement('.container');
    this.zoomOptions = {
      zoomPosition: 'original',
      offset: { vertical: 0, horizontal: 10 },
      zoomLensStyle: 'opacity: 0;background: transparent;',
    };

    this.init();
  }

  build() {
    new imageZoom(this.zoomImageContainer, this.zoomOptions);
  }


  static init(element) {
    element && new ImageZoom(element);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-image-zoom').forEach(item => ImageZoom.init(item));
});
