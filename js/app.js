const burgerMenu = document.querySelector('.menu');
const menuInfo = document.querySelector('.menu-info');

function openMenu(){
    let nav = burgerMenu.classList.toggle('active')
    menuInfo.classList.toggle('active');
     if(nav){
        document.body.style.overflow = 'hidden';
    }
    if(!nav){
        document.body.style.overflowY = 'overlay';
    }
   
    console.log(burgerMenu)
   
}


burgerMenu.addEventListener('click', openMenu);


function closeMenu(){
    burgerMenu.classList.remove('active')
    menuInfo.classList.remove('active');
}
// закрытие
const linkA = document.querySelectorAll('.link');
linkA.forEach(item =>{
    item.addEventListener('click', closeMenu)
})

// топ сладйер
let swiper = new Swiper(".swiper1",{
    spaceBetween: 10,
 
    centerSlides: 'true',
    fade: 'true',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1061: {
            slidesPerView: 5,
        },
    }
  });