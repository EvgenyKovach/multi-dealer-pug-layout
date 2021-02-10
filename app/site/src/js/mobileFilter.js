import overlay from "./overlay";

export default () => {

  const filterBtn = document.querySelector('.js-mobile-filters-btn');
  const mobileFilter = document.querySelector('.js-mobile-filter')

  const hide = () => {
    mobileFilter.classList.remove('isActive')
    filterBtn.classList.remove('isActive')
    document.body.style.overflow = 'auto'
  }

  const show = () => {
    mobileFilter.classList.add('isActive')
    filterBtn.classList.add('isActive')
    document.body.style.overflow = 'hidden'
  }

  filterBtn.onclick = () => {
    show()
    overlay(true, () => (hide()))
  }

}
