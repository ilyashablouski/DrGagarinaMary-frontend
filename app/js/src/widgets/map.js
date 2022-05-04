class Map extends Widget {
  constructor(node) {
    super(node, '.js-map');
    this.mapContainer = this.queryElement('.container');
    this.init();
  }

  build() {
    Ymaps
      .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
      .then(maps => {
        new maps.Map(this.mapContainer, {
          center: [53.902615, 27.559790],
          zoom: 7,
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
