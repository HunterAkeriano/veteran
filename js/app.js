const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

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
    let nav = burgerMenu.classList.remove('active')
    menuInfo.classList.remove('active');
     if(nav){
        document.body.style.overflow = 'hidden';
    }
    if(!nav){
        document.body.style.overflowY = 'overlay';
    }
   
    console.log(burgerMenu)
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

  let swiper2 = new Swiper(".swiper2",{
    spaceBetween: 10,
 
    centerSlides: 'true',
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

 
  
 
  PDFObject.embed("js/info.pdf", "#pdf-container", { pdfOpenParams: { navpanes: 0 } });