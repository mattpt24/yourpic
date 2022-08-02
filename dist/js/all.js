"use strict";

var navbar = document.querySelector("#navbar");
window.addEventListener("scroll", change);

function change() {
  var topOfPage = window.scrollY;

  if (topOfPage >= 50) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
}