const header = document.querySelector("header");
const searchIcon = document.getElementById("searchIcon");
const deleteBoxSearch = document.getElementById("closeSearchBox");
const openCloseBtn = document.getElementById("openCloseBtn");
const nav = document.querySelector("nav");

let swiperCards = new Swiper('.slide-content', {
  // Optional parameters
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable : true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  breakpoints:{
    
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

const btn_properties = document.querySelector('.btn_properties');
btn_properties.onmousemove = function (e) {
    const x = e.pageX - btn_properties.offsetLeft;
    const y = e.pageY - btn_properties.offsetTop;
    btn_properties.style.setProperty('--x', x + 'px');
    btn_properties.style.setProperty('--y', y + 'px');
};

let statisticsValue = document.querySelectorAll(".numbers");
let interval = 3800;
statisticsValue.forEach((statisticValue) => {
    let startValue = 0;
    let endValue = parseInt(statisticValue.getAttribute("data-val"));
    let  duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        statisticValue.textContent = startValue;
        if( startValue == endValue){
            clearInterval(counter);
        }
    }, duration)
});




searchIcon.addEventListener("click", ()=>{
    header.classList.toggle("openSearch");
});

deleteBoxSearch.addEventListener("click", ()=>{
    header.classList.remove("openSearch");
});


openCloseBtn.addEventListener("click", ()=>{
    if (nav.classList.contains("closeUl")) {
        nav.classList.replace("closeUl","openUl");
        openCloseBtn.classList.replace("uil-bars","uil-times");
    } else if (nav.classList.contains("openUl")) {
        nav.classList.replace("openUl","closeUl");
        openCloseBtn.classList.replace("uil-times","uil-bars");
    }
});


