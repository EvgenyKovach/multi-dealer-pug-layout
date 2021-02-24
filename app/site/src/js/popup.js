import overlay from "./overlay";

export default () => {

  const open_btn = document.querySelectorAll('.js-open-popup')
  const closed_btn = document.querySelector('.js-close-popup')
  const popup = document.querySelector('.js-popup')

  if (!open_btn ||
    !closed_btn ||
    !popup) return

  const closed_popup = () => {
    popup.classList.remove('is-active')
  }

  open_btn.forEach(item => {

    item.onclick = () => {

      overlay(true, closed_popup)
      popup.classList.add('is-active')

    }

  })

  closed_btn.onclick = () => {

    popup.classList.remove('is-active')
    overlay(false)

  }

}
