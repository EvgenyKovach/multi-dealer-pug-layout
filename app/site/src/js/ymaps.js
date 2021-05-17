import ymaps from 'ymaps';

export default () => {
  const ya_maps_arr = document.querySelectorAll('.js-ya-maps-init')

  if (!ya_maps_arr) return

  ya_maps_arr.forEach(mapCoords => {

    ymaps
      .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
      .then(maps => {
        const map = new maps.Map(mapCoords, {
          center: [parseInt(mapCoords.dataset.x), parseInt(mapCoords.dataset.y)],
          zoom: 7
        });
      })
      .catch(error => console.log('Failed to load Yandex Maps', error));
  })

}
