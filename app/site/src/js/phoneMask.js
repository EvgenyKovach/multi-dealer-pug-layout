import IMask from 'imask';

export default () => {
  let phones_all = document.querySelectorAll('input[name="phone"]')

  let maskOptions = {
    mask: '+{0} (000) 000-00-00'
  };

  phones_all.forEach(item => IMask(item, maskOptions))

}
