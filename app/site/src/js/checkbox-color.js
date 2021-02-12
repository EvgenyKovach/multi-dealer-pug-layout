export default () => {
  const colorCheckboxes = document.querySelectorAll('.js-color-toggle')

  colorCheckboxes.forEach(item => {

    item.onchange = () => {
      item.classList.toggle('checked');
    }

  })

}
