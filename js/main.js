//Site dos efeitos de grid: https://isotope.metafizzy.co/
//Site dos efeitos nos cards: https://micku7zu.github.io/vanilla-tilt.js/
//Site dos efeitos no scroll: https://scrollrevealjs.org/


//PRELOADER
jQuery(window).on('load', function () {
  //loader
  $('.lds-dual-ring').fadeOut(700, function () {
    $(this).remove();
  });
  $(this).scrollTop(0);
});

//----------------------------------------------------------------
//TEMA CLARO/ESCURO

var toggle_btn = document.querySelector(".toggle-btn");
var corpo = document.querySelector("body");

function events() {
  toggle_btn.addEventListener("click", toggle_btn);
  toggle_btn.addEventListener("click", () => {

    if (corpo.classList.contains("dark")) {
      corpo.classList.remove("dark");
      corpo.classList.add("light")
    } else {
      corpo.classList.contains("light")
      corpo.classList.remove("light")
      corpo.classList.add("dark");
    }
  });
}

events();

//----------------------------------------------------------------
// ANIMAÇÃO DOS ITENS
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 100

});
//Itens Home
ScrollReveal().reveal('.home .home__content__title', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.home .social-media .social-link', { delay: 500, origin: 'left', interval: 300 });
ScrollReveal().reveal('.home .home__content__text', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.home .home__content__btn', { delay: 700, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.home .column-two', { delay: 700, origin: 'bottom', interval: 200 });

//Itens Servoços
ScrollReveal().reveal('.services .services__header', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.services .card', { delay: 200, origin: 'bottom', interval: 400 });

//Itens Portfólio
ScrollReveal().reveal('.portfolio .portfolio__header', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.portfolio .portfolio__filter .filter-btn', { delay: 200, origin: 'bottom', interval: 300 });
ScrollReveal().reveal('.portfolio .portfolio__body .grid-item', { delay: 300, origin: 'right', interval: 300 });

//Itens Sobre
ScrollReveal().reveal('.about .about__header', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.about .column-1', { delay: 100, origin: 'left' });
ScrollReveal().reveal('.about .skills .skill__title', { delay: 100, origin: 'left' });
ScrollReveal().reveal('.about .column-2', { delay: 100, origin: 'right' });

//Itens Numeros
ScrollReveal().reveal('.records .wrap', { delay: 200, origin: 'bottom', interval: 100 });

//Itens Contato
ScrollReveal().reveal('.contact .contact-box', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.contact .contact-info', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.contact .contact-form', { delay: 200, origin: 'bottom' });

//Itens Fale Comigo
ScrollReveal().reveal('.hireme .title', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.hireme .text', { delay: 200, origin: 'right' });
ScrollReveal().reveal('.hireme .btn', { delay: 200, origin: 'bottom' });

//Itens Footer
ScrollReveal().reveal('.footer .grid-4-col', { delay: 200, origin: 'right', interval: 200 });
ScrollReveal().reveal('.footer .footer-bottom', { delay: 200, origin: 'bottom', interval: 200 });

//----------------------------------------------------------------
//HEADER  
window.addEventListener("scroll", function () {
  let header = document.querySelector('.header');
  header.classList.toggle("animation", window.scrollY > 0);
});

//----------------------------------------------------------------
//MENU HAMBURGUER 
let hamburguer = document.querySelector('.hamburger-menu');
let navbar = document.querySelector('header .menu');
var links = document.querySelectorAll('.links a');

function closeMenu() {
  navbar.classList.remove('open');
  document.body.classList.remove('stop');
}

hamburguer.addEventListener('click', function () {
  if (!navbar.classList.contains('open')) {
    navbar.classList.add('open');
    // document.body.classList.add('stop');
  } else {
    closeMenu()
  }
});

links.forEach((link) => link.addEventListener('click', () => closeMenu()))



//----------------------------------------------------------------
//EFEITO DOS CARDS
VanillaTilt.init(document.querySelectorAll(".js-card-animation"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": .7,
});

//----------------------------------------------------------------
//PORTFÓLIO

function portfolioEffect() {

  //Parte dos botoẽs do portifólio
  const filters_btns = document.querySelectorAll(".filter-btn");

  filters_btns.forEach(btn => { //Captura o evento de clique
    btn.addEventListener("click", () => {

      filters_btns.forEach((button) => button.classList.remove("active")); //Remove a classe active do primeiro botão ao clicar nos demais
      btn.classList.add('active'); //Adiciona a classe Active no botão clicado

      let filterValue = btn.dataset.filter;
      $(".grid").isotope({ filter: filterValue }); //Filtra as informações
    });
  });

  // Inicializando o JQuery
  $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    transitionDuration: '0.6s'
  });
}

portfolioEffect();

//----------------------------------------------------------------
//SOBRE

function sobreEffect() {

  //Barra de habilidades
  const skills_wrap = document.querySelector(".skills");
  const skills_bars = document.querySelectorAll(".skill__bar__progress");

  window.addEventListener("scroll", () => {
    skillsEffect(); //Sobre
  });

  function checkScroll(el) {
    let rect = el.getBoundingClientRect(); //Verifica a posição da tela
    if (window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
  }

  function skillsEffect() {
    if (!checkScroll(skills_wrap)) return;
    skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
  }

  window.addEventListener("scroll", () => {
    countUp(); //Dados
  });


  //----------------------------------------------------------------
  //NUMEROS

  //Circulos com dados
  const records_wrap = document.querySelector(".records");
  const records_numbers = document.querySelectorAll(".number");

  function countUp() {
    if (!checkScroll(records_wrap)) return;
    records_numbers.forEach((numb) => {
      const updateCount = () => {
        let currentNum = +numb.innerText;
        let maxNum = +numb.dataset.num;
        let speed = 90000;
        const increment = Math.ceil(maxNum / speed);

        if (currentNum < maxNum) {
          numb.innerText = currentNum + increment;
          setTimeout(updateCount, 50);
        } else {
          numb.innerText = maxNum;
        }
      };

      setTimeout(updateCount, 400);
    });
  }
}

sobreEffect();

//----------------------------------------------------------------
//SLICK
$('.js-slick-carousel').slick({
  centerMode: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplaySpeed: 1500,
  autoplay: true,
  infinite: true,
  arrows: false,
  lazyLoad: 'ondemand',
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerMode: false,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 425,
      settings: {
        centerMode: false,
        slidesToShow: 1,
      }
    },
  ]
});


//----------------------------------------------------------------
//COPYRIGHT
let copy = new Date()
let copyDate = copy.getFullYear()

function year() {
  let dateYear = document.querySelector('.copydate')
  dateYear.innerHTML = copyDate
}

year()


//----------------------------------------------------------------
//BOTÃO PARA O TOPO
let Site = {
  Gotop: function () {
    $(".gotop").on("click", function () {
      $('html, body').animate({
        scrollTop: 0
      }, 'slow');
    });
  },
}

jQuery(document).ready(function () {
  //Remove goTop on scroll
  function removeGoTop() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        $('.gotop').fadeIn();
      }
      else {
        $('.gotop').fadeOut();
      }
    });
  }

  //Responsive Scripts

  let windowWidth = $(this).width();

  if (windowWidth > 1023) {
    removeGoTop();
  }
  if (windowWidth <= 1023 && windowWidth >= 769) {
    removeGoTop();
  }
  if (windowWidth <= 768 && windowWidth >= 421) {
    removeGoTop();
  }
  if (windowWidth < 420) {

  }

  Site.Gotop();
});