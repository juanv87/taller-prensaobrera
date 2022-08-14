const hamb = document.querySelector(".hamb");
const navMenu = document.querySelector(".nav-menu");

hamb.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
});

const headerRef = document.querySelector("section.header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 95) {
    headerRef.classList.add("scrolled");
  } else {
    headerRef.classList.remove("scrolled");
  }
});
