export default (button, container) => {

  default_position();
  button.onclick = () => {
    const box_height = container.scrollHeight
    if (!container.classList.contains('active')) {
      container.classList.add('active')
      button.classList.add('active')
      container.style.height = box_height + 'px'
    }
    else {
      container.classList.remove('active')
      button.classList.remove('active')
      container.style.height = '0px'
    }

  }

  function default_position() {
    const box_height = container.scrollHeight
    container.style.transition = 'height 0.25s';
    container.style.overflow = 'hidden';

    if (container.classList.contains('active')) {
      button.classList.add('active')
      container.style.height = box_height + 'px'
    }
    else {
      button.classList.remove('active')
      container.style.height = '0px'
    }

  }

}
