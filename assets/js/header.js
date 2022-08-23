const hamb = document.querySelector(".hamb");
const navMenu = document.querySelector(".nav-menu");
const userAvatar = document.querySelector(".user-avatar");
hamb.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
});

userAvatar.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});

let tarjeta = document.querySelector(".notas-4-sin-foto .politicas");
let tituloTarjeta = document.querySelector(".notas-4-sin-foto .politicas h3");

tarjeta.addEventListener("click", () => {
  tarjeta.classList.toggle("fondoRojo");
  if (tituloTarjeta.innerText === "Hola") {
    tituloTarjeta.innerText = "Chau";
  } else {
    tituloTarjeta.innerText = "Hola";
  }
});

document.querySelector("#hola").addEventListener("click", () => {
  alert("Adios");
});

// const headerRef = document.querySelector("section.header");
// window.addEventListener("scroll", function () {
//   if (window.scrollY > 95) {
//     headerRef.classList.add("scrolled");
//   } else {
//     headerRef.classList.remove("scrolled");
//   }
// });
