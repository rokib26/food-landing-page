const nave = document.querySelector(".nave");

window.addEventListener("scroll", function(){
  if(window.scrollY > 0) {
    nave.classList.add('scroll')
  } else {
    nave.classList.remove('scroll')
  }
})

const swiper = new Swiper('.swiper', {
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  },

loop: true,


pagination: {
el: '.swiper-pagination',
clickable: true,
},


navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},


});