const refButton = document.querySelector("#saveTitle");
const refInputTitle = document.querySelector("#inputTitle");
const refNotaTitle = document.querySelector("h1");
const nuevaNota = document.querySelector("#nuevaNota");

refButton.addEventListener("click", function () {
  console.log(refNotaTitle.innerText);
  const nota = {
    titulo: refNotaTitle.innerText,
  };
  console.log({ nota });
  nuevaNota.innerHTML = `
    <p> ${nota.titulo} </p>
  `;
});
