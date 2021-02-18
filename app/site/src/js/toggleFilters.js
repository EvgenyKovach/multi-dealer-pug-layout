export default () => {
  const filters = document.querySelectorAll('.js-filter-toggle')

  filters.forEach(item => {

    item.querySelector('.filters__section-title').onclick = () => {
      item.classList.toggle('closed-list')
    }

  })

}
