export default () => {

    let togglebtn = document.querySelector('.mobileMenuBtn');
    let toggleBtnIco = document.querySelector('.mobileMenuBtn__toggle');
    let toggleBtnMenu = document.querySelector('.mobileMenu');

    togglebtn.onclick = function () {
        togglebtn.classList.toggle('active');
        toggleBtnIco.classList.toggle('active');
        toggleBtnMenu.classList.toggle('active');
    };

};
