const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', transformHamburger)

function transformHamburger() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}