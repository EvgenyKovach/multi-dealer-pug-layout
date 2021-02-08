export default () => {

  const toggleFilterBtn = document.querySelector('.js-mobile-filters-btn');
  const mobileFilter = document.querySelector('.js-mobile-filter')

  window.onload = () => {
    if (window.innerWidth < 1085) {
      mobileFilter.classList.add('mobile-filter')
    }
  }

  toggleFilterBtn.onclick = () => {
    mobileFilter.classList.toggle('isActive')
    if (mobileFilter.classList.contains('isActive')) {
      document.body.style.overflow = 'hidden'
    }
    else document.body.style.overflow = 'auto'
  }

}
