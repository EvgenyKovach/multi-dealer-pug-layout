export default () => {

  const checkboxes = document.querySelectorAll('.js-toggle-checkbox')

  checkboxes.forEach(item => {

    item.onchange = () => {
      if (item.checked) item.closest('label').classList.add('checked')
      else item.closest('label').classList.remove('checked')
    }

  })


}
