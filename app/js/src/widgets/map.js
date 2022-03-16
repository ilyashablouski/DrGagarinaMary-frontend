class Map extends Widget {
  constructor(node) {
    super(node, '.js-map');
    this.mapContainer = this.queryElement('.container');
    this.init();
  }

  build() {
    Ymaps
      .load()
      .then(maps => {
        const map = new maps.Map(this.mapContainer, {
          center: [-8.369326, 115.166023],
          zoom: 7
        });
      })
      .catch(error => console.log('Failed to load Yandex Maps', error));
  }


  static init(element) {
    element && new Map(element);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-map').forEach(item => Map.init(item));
});
