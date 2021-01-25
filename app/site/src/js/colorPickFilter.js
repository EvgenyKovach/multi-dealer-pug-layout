export default () => {
  const colorCheckboxes = document.querySelectorAll('.filters__colorLabel')

  colorCheckboxes.forEach(item => {

    item.onclick = () => {
      item.classList.toggle('checked');
      item.querySelector('.checkColor').classList.toggle('checked')
    }

  })

}
