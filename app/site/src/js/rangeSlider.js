import noUiSlider from 'nouislider'

export default () => {

  let rangeSlider = document.querySelector('.js-rangeSlider');

  const dataRange = document.querySelector('.js-rangeData')
  const dataRangeObj = {
    min: dataRange.querySelector('.js-rangeMin'),
    max: dataRange.querySelector('.js-rangeMax')
  }

  noUiSlider.create(rangeSlider, {
    start: [dataRangeObj.min.value, dataRangeObj.max.value],
    step: 1000,
    range: {
      'min': +dataRangeObj.min.value,
      'max': +dataRangeObj.max.value
    },
    animate: false,
    connect: true
  });

  rangeSlider.noUiSlider.on('update', function (values, handle) {

    if (handle) {
      dataRangeObj.min.value = 'до ' + (parseFloat(values[handle])).toLocaleString();
    } else {
      dataRangeObj.max.value = 'от ' + (parseFloat(values[handle])).toLocaleString();
    }

  });

}
