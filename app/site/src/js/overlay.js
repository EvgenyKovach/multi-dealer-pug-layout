export default (toggle, callback) => {
  const overlay = document.querySelector('.js-overlay')

  const show = () => {
    overlay.classList.add('isActive')
  }

  const hide = () => {
    overlay.classList.remove('isActive')
  }

  if (toggle) {
    show()
  } else {
    hide()
  }

  overlay.onclick = () => {
    hide()
    if (typeof callback === 'function') callback()
    else console.log('overlay callback error type')
  }

}
