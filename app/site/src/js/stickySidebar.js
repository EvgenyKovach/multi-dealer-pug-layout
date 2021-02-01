import stickySidebar from 'sticky-sidebar';

export default () => {
  const sidebar = new StickySidebar('#filter', {
    topSpacing: 20,
    bottomSpacing: 80,
    containerSelector: '.autoList',
    innerWrapperSelector: '.inner-wrapper-sticky',
  });
}
