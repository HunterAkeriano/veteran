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

  const loadPdf = async () => {
    const pdfUrl = '/js/info.pdf';
    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    const pdf = await loadingTask.promise;
    const pagesCount = pdf.numPages;

    const container = document.getElementById('pdf-container');

    for (let pageNum = 1; pageNum <= pagesCount; ++pageNum) {
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({scale: 1});
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const renderTask = page.render({canvasContext: context, viewport: viewport}).promise;
      await renderTask;
      container.appendChild(canvas);
    }

    const settingsPanel = document.createElement('div');
    settingsPanel.id = 'pdf-settings';
    const zoomInButton = document.createElement('button');
    zoomInButton.innerText = '+';
    zoomInButton.addEventListener('click', () => {
      container.style.zoom = parseFloat(container.style.zoom || 1) + 0.1;
    });
    const zoomOutButton = document.createElement('button');
    zoomOutButton.innerText = '-';
    zoomOutButton.addEventListener('click', () => {
      container.style.zoom = parseFloat(container.style.zoom || 1) - 0.1;
    });
    const printButton = document.createElement('button');
    printButton.innerText = 'Print';
    printButton.addEventListener('click', () => {
      window.print();
    });
    settingsPanel.appendChild(zoomInButton);
    settingsPanel.appendChild(zoomOutButton);
    settingsPanel.appendChild(printButton);
    // container.appendChild(settingsPanel);
  };
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';
  document.addEventListener('DOMContentLoaded', loadPdf);