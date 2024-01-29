const searchBox = document.querySelector(".search-box");
const searchIcon = document.getElementById("searchIcon");
const deleteBoxSearch = document.getElementById("closeSearchBox");
const openCloseBtn = document.getElementById("openCloseBtn");
const nav = document.querySelector("nav");
const navlink = document.querySelectorAll('.navLink');
const btn_properties = document.querySelector('.btn_properties');



navlink.forEach(link =>  link.addEventListener('click',activeLink));

function activeLink() {
  navlink.forEach(link =>  link.style.color = 'white');
  this.style.color = '#ffd17e';
  navDisplay();
}


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
    searchBox.classList.toggle("openSearch");
});

deleteBoxSearch.addEventListener("click", ()=>{
    searchBox.classList.remove("openSearch");
});


openCloseBtn.addEventListener("click", navDisplay);
function navDisplay () {
  if (nav.classList.contains("closeUl")) {
      nav.classList.replace("closeUl","openUl");
      openCloseBtn.classList.replace("uil-bars","uil-times");
  } else if (nav.classList.contains("openUl")) {
      nav.classList.replace("openUl","closeUl");
      openCloseBtn.classList.replace("uil-times","uil-bars");
  }
}

