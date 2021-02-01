export default () => {
  const filters = document.querySelectorAll('.filters__section')

  filters.forEach(item => {

    item.querySelector('.filters__section-title').onclick = () => {
      item.classList.toggle('closedList')
    }

  })

}
