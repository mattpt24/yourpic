"use strict";

var navbar = document.querySelector("#navbar");
var openDropdownBtn = document.querySelector(".burger__icon__container");
var dropdownNavbar = document.querySelector(".dropdown__navbar__container");
var burgerLine1 = document.querySelector(".line1");
var burgerLine2 = document.querySelector(".line2");
var burgerLine3 = document.querySelector(".line3");
window.addEventListener("scroll", change);

function change() {
  var topOfPage = window.scrollY;

  if (topOfPage >= 50) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
} // DROPDOWN NAVBAR


openDropdownBtn.addEventListener("click", function () {
  dropdownNavbar.classList.toggle("open--dropdown--navbar");
});
openDropdownBtn.addEventListener("click", function () {
  burgerLine1.classList.toggle("rotate1");
  burgerLine2.classList.toggle("hidden");
  burgerLine3.classList.toggle("rotate2");
});
var dropdownNavLinks = document.querySelectorAll(".dropdown__nav__link");
var dropdownNavLinksArray = Array.from(dropdownNavLinks);

for (var i = 0; i <= dropdownNavLinksArray.length; i++) {
  dropdownNavLinksArray[i].addEventListener("click", function () {
    dropdownNavbar.classList.toggle("open--dropdown--navbar");
    burgerLine1.classList.remove("rotate1");
    burgerLine2.classList.remove("hidden");
    burgerLine3.classList.remove("rotate2");
  });
}

console.log(dropdownNavLinksArray);