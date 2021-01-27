export default () => {
  const colorCheckboxes = document.querySelectorAll('.js-color-toggle')

  colorCheckboxes.forEach(item => {

    item.onclick = () => {
      item.classList.toggle('checked');
      item.querySelector('.checkColor').classList.toggle('checked')
    }

  })

}
