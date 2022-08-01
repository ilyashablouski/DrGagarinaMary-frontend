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
        const myMap = new maps.Map(this.mapContainer, {
          center: [53.922851,27.625522],
          zoom: 16,
        });

        myMap.geoObjects
          .add(new maps.Placemark([53.922851,27.625522], {
            balloonContent: '<strong>Студия функциональной эстетики\n' +
              'Марии Гагариной</strong>'
          }, {
            preset: 'islands#icon',
            iconColor: '#191919'
          }))
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
