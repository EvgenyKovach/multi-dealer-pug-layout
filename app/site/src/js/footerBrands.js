export default () => {
  const brandsList = document.querySelector('.js-brands-list')

  if (!brandsList) return; // проверка на существование

  if (brandsList.childElementCount > 28)
    brandsList.classList.add('fiveCol')
  else if (brandsList.childElementCount > 14)
    brandsList.classList.add('threeCol')

}
