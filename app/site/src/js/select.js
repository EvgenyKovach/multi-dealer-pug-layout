import Choices from "choices.js";

export default () => {
  const selectElements = document.querySelectorAll('.filterResult__sort-el-select');

  selectElements.forEach(select => {
    new Choices(select, {
      searchEnabled: false,
      itemSelectText: '',
    })
  })

}
