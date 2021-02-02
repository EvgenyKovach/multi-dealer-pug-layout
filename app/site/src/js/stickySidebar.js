import stickySidebar from 'sticky-sidebar-v2';

export default () => {
  let scrollPosition;
  const filterHeight = document.querySelector('.js-filterHeight-check')
  const parentFilterBlock = document.querySelector('.js-filterPage-block')

  parentFilterBlock.style.minHeight = filterHeight.offsetHeight + 'px';

  const sidebar = new StickySidebar('#filter', {
    topSpacing: 10,
    bottomSpacing: 25,
    containerSelector: '.filters-wrapper',
  });

}
