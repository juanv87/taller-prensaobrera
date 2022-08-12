const hamb = document.querySelector(".hamb");
const navMenu = document.querySelector(".nav-menu");

hamb.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
});
