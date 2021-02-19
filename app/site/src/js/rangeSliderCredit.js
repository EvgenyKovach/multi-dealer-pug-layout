import noUiSlider from 'nouislider';

export default () => {

  const creditData = document.querySelector('.js-credit-data')
  const creditRange = document.querySelector('.js-credit-range')
  const creditSumm = document.querySelector('.js-credit-summ')
  const creditSummInput = document.querySelector('.js-summ-range')

  if (!creditData   ||
      !creditRange  ||
      !creditSumm   ||
      !creditSummInput) return

  const initSlider = (sliderClass, sliderInput) => {

    const data = {
      min: parseInt(sliderInput.dataset.min),
      max: parseInt(sliderInput.dataset.max),
      from: parseInt(sliderInput.dataset.from)
    }

    noUiSlider.create(sliderClass, {
      start: [data.from],
      step: 1,
      range: {
        'min': data.min,
        'max': data.max
      },
      connect: [true, false]
    });

    sliderClass.noUiSlider.on('update', function (values, handle) {
      sliderInput.value = parseFloat(values[handle]).toLocaleString();
    });

  }

  initSlider(creditRange, creditData)
  initSlider(creditSummInput, creditSumm)

}
