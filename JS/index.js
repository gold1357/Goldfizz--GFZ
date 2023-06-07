// var loader = document.getElementById('preloader');

// window.addEventListener("load", function(){
//     loader.style.display = "none";
// })

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-item");
const navLogo = document.querySelector(".logo");


///for nav scroll effect
const nav = document.querySelector(".navbar");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
    console.log("we are going down");
  } else {
    console.log("we are going up");
    nav.classList.remove("nav--hidden");
    menu.classList.remove("is-active");
    menuLinks.classList.remove("active");
  }
  lastScrollY = window.scrollY;
});

const navMobile = document.querySelector(".navbar");
let lastScrollYY = window.scrollY;
window.addEventListener("scroll", () => {
  if (lastScrollYY < window.scrollY) {
    navMobile.classList.add("nav--hidden2");
    console.log("we are going down");
  } else {
    console.log("we are going up");
    navMobile.classList.remove("nav--hidden2");
  }
  lastScrollYY = window.scrollY;
});



const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};
const mobileMenuLogo = () => {
  menu.classList.remove("is-active");
  menuLinks.classList.remove("active");
};

menu.addEventListener("click", mobileMenu);
navLogo.addEventListener("click", mobileMenuLogo);


