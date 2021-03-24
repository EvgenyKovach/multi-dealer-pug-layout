export default (toggle, callback) => {
  const overlay = document.querySelector('.js-overlay')

  const show = () => {
    overlay.classList.add('is-active')
    document.body.style.overflowY = 'scroll'
    document.querySelector('html').style.overflowY = 'hidden'
  }

  const hide = () => {
    overlay.classList.remove('is-active')
    document.body.style.overflowY = 'auto'
    document.querySelector('html').style.overflowY = 'auto'

    if (typeof callback === 'function') callback()
  }

  if (toggle) show()
  else hide()

  overlay.onclick = () => hide()

  window.addEventListener('keyup', function(event) {
    if (event.keyCode === 27) hide()
  });

}
