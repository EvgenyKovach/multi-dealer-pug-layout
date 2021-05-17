import toggle from "./toggle";

export default () => {
  const filters = document.querySelectorAll('.js-filter-toggle')
  const info_toggles = document.querySelectorAll('.js-info-toggle')

  if (filters) {
    filters.forEach(item => {
      toggle(item.querySelector('.filters__section-title'), item.querySelector('.filters__section-list'))
    })
  }

  if (info_toggles) {

    info_toggles.forEach(item => {
      toggle(item.querySelector('.info-tables__toggle-list-title'), item.querySelector('.info-tables__toggle-list-elements'))
    })
  }

}
