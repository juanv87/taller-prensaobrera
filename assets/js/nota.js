const refButton = document.querySelector("#saveTitle");
const refInputTitle = document.querySelector("#inputTitle");
const refNotaTitle = document.querySelector("h1");

refButton.addEventListener("mouseover", function () {
  refNotaTitle.innerText = refInputTitle.value;
});
