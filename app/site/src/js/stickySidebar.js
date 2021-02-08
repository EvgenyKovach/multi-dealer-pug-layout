import stickySidebar from 'sticky-sidebar-v2';

export default () => {

  if (window.innerWidth > 1085) {
    let scrollPosition;
    const filterHeight = document.querySelector('.js-filterHeight-check')
    const parentFilterBlock = document.querySelector('.js-filterPage-block')

    const sidebar = new StickySidebar('#filter', {
      topSpacing: 25,
      bottomSpacing: 25,
      containerSelector: '.filters-wrapper',
    });

  }

}
