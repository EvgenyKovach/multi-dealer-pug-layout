import noUiSlider from 'nouislider';

export default () => {

  let rangeSlider    = document.querySelector('.js-rangeSlider')
  const dataRange    = document.querySelector('.js-range-data')

  const dataRangeObj = {
    min: dataRange.querySelector('.js-rangeMin'),
    max: dataRange.querySelector('.js-rangeMax')
  }

  noUiSlider.create(rangeSlider, {
    start: [dataRangeObj.min.value, dataRangeObj.max.value],
    step: 1000,
    range: {
      'min': parseInt(dataRangeObj.min.value),
      'max': parseInt(dataRangeObj.max.value)
    },
    animate: true,
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
