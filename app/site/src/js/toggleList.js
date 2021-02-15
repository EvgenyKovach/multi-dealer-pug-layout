export default () => {

  const toggleList = document.querySelectorAll('.js-toggled-list')

  toggleList.forEach(item => {
    item.onclick = () => {
      item.classList.toggle('is-active')
    }
  })

}
