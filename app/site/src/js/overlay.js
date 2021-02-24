export default (toggle, callback) => {
  const overlay = document.querySelector('.js-overlay')

  const show = () => {
    overlay.classList.add('isActive')
    document.body.style.overflowY = 'hidden'
    // document.body.style. = 'scroll'
  }

  const hide = () => {
    overlay.classList.remove('isActive')
    document.body.style.overflowY = 'scroll'
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
