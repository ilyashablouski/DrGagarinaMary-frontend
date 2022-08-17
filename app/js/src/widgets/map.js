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
            balloonContent: `<strong>Студия функциональной эстетики\n
              Марии Гагариной</strong><br>
              Ссылка нa <a href="https://yandex.by/maps/157/minsk/?from=mapframe&ll=27.561481%2C53.902496&panorama%5Bdirection%5D=94.818149%2C-5.424828&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=27.625388%2C53.923055&panorama%5Bspan%5D=111.306646%2C60.000000&z=12" target="_blank" style="color: #b68c3b;"><strong>3D - тур</strong></a>`
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
