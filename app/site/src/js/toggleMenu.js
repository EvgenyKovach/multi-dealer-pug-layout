export default () => {

    let togglebtn = document.querySelector('.mobile-menu-btn');
    let toggleBtnIco = document.querySelector('.mobile-menu-btn__toggle');
    let toggleBtnMenu = document.querySelector('.mobile-menu');

    if (!togglebtn    ||
        !toggleBtnIco ||
        !toggleBtnMenu) return

    togglebtn.onclick = function () {
        togglebtn.classList.toggle('active');
        toggleBtnIco.classList.toggle('active');
        toggleBtnMenu.classList.toggle('active');
    };

};
