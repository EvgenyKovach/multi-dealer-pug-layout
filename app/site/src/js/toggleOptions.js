export default () => {

  const toggle_btn = document.querySelector('.js-toggle-option-btn')
  const toggle_list = document.querySelector('.js-toggle-option-list')

  if (!toggle_btn  || !toggle_list) return; // проверка на существование

  toggle_btn.onclick = () => {
    toggle_btn.classList.toggle('is-active')
    toggle_list.classList.toggle('is-active')
  }

}
