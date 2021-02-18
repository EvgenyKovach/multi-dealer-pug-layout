export default () => {
  const lockAllbtn = document.querySelector('.js-lock-all-btn')
  const hiddenText = document.querySelector('.js-hidden-text')

  if (hiddenText !== null) {
    lockAllbtn.onclick = () => {

      hiddenText.classList.toggle('showText')
      if (hiddenText.classList.contains('showText')) lockAllbtn.textContent = 'скрыть'
      else lockAllbtn.textContent = 'открыть текст'

    }
  }

}
