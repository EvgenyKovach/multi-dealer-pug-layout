import Choices from "choices.js";

export default () => {
  const selectElements = document.querySelectorAll('.js-sort-init');

  selectElements.forEach(select => {
    new Choices(select, {
      searchEnabled: false,
      itemSelectText: '',
    })
  })

}
