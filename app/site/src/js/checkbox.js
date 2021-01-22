export default () => {

  let checkboxes = document.querySelectorAll('.checkbox-input')

  checkboxes.forEach(item => {
    item.onclick = () => {
      if (item.checked) item.closest('.filters__checkbox-box').classList.add('checked')
      else item.closest('.filters__checkbox-box').classList.remove('checked')
    }
  })


}
