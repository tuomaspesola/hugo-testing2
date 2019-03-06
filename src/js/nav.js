// For toggling mobile navigation links
const burger = document.querySelector('.navbar-burger')
const menu = document.querySelector('.navbar-menu')

const handleMenuClick = () => {
    burger.classList.toggle('is-active')
    menu.classList.toggle('is-active')
}

burger.addEventListener('click', handleMenuClick)