export default () => {
    const btnScroll = document.querySelector('.js-scroll-top');

    window.onscroll = () => {
        if (window.scrollY > 499) {
            btnScroll.classList.remove('notActive');
        } else {
            btnScroll.classList.add('notActive');
        }
    };

    btnScroll.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
};
