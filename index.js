const nave = document.querySelector(".nave");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    nave.classList.add("scroll");
  } else {
    nave.classList.remove("scroll");
  }
});

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var splide = new Splide(".splide", {
  perPage: 4,
  gap: "2rem",
  perMove: 1,
  padding:"3rem",
  type: "loop",
  drag: "free",
  snap: true,
  arrows: false,
  pagination: true,
  autoplay: true,
  breakpoints: {
    640: {
      perPage: 2,
      gap: ".7rem",
    },
    480: {
      perPage: 2,
      gap: "1rem",
    },
  },
});

splide.mount();
