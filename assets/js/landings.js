const buttonTop = document.querySelector("button.backTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    buttonTop.classList.remove("hidden");
  } else {
    buttonTop.classList.add("hidden");
  }
});

// back to top
buttonTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
