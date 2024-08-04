let toggle = document.querySelector(".toggle");
let clicked = false;

toggle.addEventListener('click', () => {
  let top = document.querySelector('.top-bar');
  let middle = document.querySelector('.middle-bar');
  let bottom = document.querySelector('.bottom-bar');
  let slide_nav = document.querySelector('.main-nav');

  if (!clicked) {
    top.style.transform = 'rotate(45deg) translateY(12px) translateX(10px)';
    middle.style.transform = "translateX(-100%)";
    middle.style.opacity = "0";
    bottom.style.transform = 'rotate(-45deg) translateY(-15px) translateX(10px)';
    slide_nav.style.transform = 'translateX(0%)';
    //sfx
    let slideInSfx = document.querySelector('#slideIn');
    slideInSfx.play();
  } else {
    top.style.transform = '';
    middle.style.transform = "";
    middle.style.opacity = "";
    bottom.style.transform = '';
    slide_nav.style.transform = 'translateX(-100%)';
    //sfx
    let slideInSfx = document.querySelector('#slideIn');
    slideInSfx.play();
  }

  clicked = !clicked;




});

//active
const nav = document.querySelector(".nav-tabs");
const navLinks = nav.querySelectorAll(".nav-active");
const currentURL = window.location.href;
navLinks.forEach((link) => {
  if (link.href === currentURL) {
    link.classList.add("common");
  }
});



//onScroll Nav
window.addEventListener("scroll", function () {
  var navHolder = document.querySelector(".toggle-wrapper");
  navHolder.classList.toggle("sticky", window.scrollY > 0);
});

//onScroll NavBase
window.addEventListener("scroll", function () {
  var navHolderBase = document.querySelector(".main-nav");
  navHolderBase.classList.toggle("sticky2", window.scrollY > 0);
});











var typed2 = new Typed(".logo-auto-type", {
  strings: [
    "~ Manas Caterers ~",
    "~ Manav Decorators ~",
    "~ Shri Sai Prasad Hall ~"
  ],
  typeSpeed: 80,
  backSpeed: 25,
  loop: true
});

var typed3 = new Typed(".logo-auto-type3", {
  strings: [
    "~ Manas Caterers ~",
    "~ Manav Decorators ~",
    "~ Shri Sai Prasad Hall ~"
  ],
  typeSpeed: 80,
  backSpeed: 25,
  loop: true
});




