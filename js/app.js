const burgerMenu = document.querySelector('.menu');
const menuInfo = document.querySelector('.menu-info')
function openMenu(){
    burgerMenu.classList.toggle('active')
    menuInfo.classList.toggle('active');
    if(burgerMenu){
        document.body.style.overflow = 'hidden';
    }
    if(!burgerMenu){
        document.body.style.overflow = 'scroll';
    }
}

burgerMenu.addEventListener('click', openMenu);