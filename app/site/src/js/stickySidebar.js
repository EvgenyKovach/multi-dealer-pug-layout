import stickySidebar from 'sticky-sidebar-v2';

export default () => {

  if (window.innerWidth > 1085 && document.querySelector('#filter')) {

    const sidebar = new StickySidebar('#filter', {
      topSpacing: 25,
      bottomSpacing: 25,
      containerSelector: '.filters-wrapper',
    });

  }


}
