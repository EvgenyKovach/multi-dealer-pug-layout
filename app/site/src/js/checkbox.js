export default () => {

  const checkboxes = document.querySelectorAll('.js-input-toggle')

  checkboxes.forEach(item => {

    item.onclick = () => {
      if (item.checked) item.closest('.js-toggle-checkbox').classList.add('checked')
      else item.closest('.js-toggle-checkbox').classList.remove('checked')
    }

  })


}
