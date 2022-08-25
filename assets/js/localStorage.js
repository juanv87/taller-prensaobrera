const formRef = document.querySelector("#nota-save");
const tituloRef = document.querySelector("#nota-titulo");
const bajadaRef = document.querySelector("#nota-bajada");
const seccionRef = document.querySelector("#nota-seccion");
const volantaRef = document.querySelector("#nota-volanta");
const imagenRef = document.querySelector("#nota-imagen");

formRef.addEventListener("click", () => {
  if (localStorage.getItem("nota") === null) {
    localStorage.setItem("nota", JSON.stringify([]));
  }
  const nota = [
    {
      titulo: tituloRef.value,
      bajada: bajadaRef.value,
      seccion: seccionRef.value,
      volanta: volantaRef.value,
      imagen: imagenRef.value,
    },
  ];
  const dataActual = JSON.parse(localStorage.getItem("nota"));
  dataActual.push(nota[0]);
  localStorage.setItem("nota", JSON.stringify(dataActual));

  // const notaLS = JSON.parse(localStorage.getItem("nota"));
  // // console.log(notaLS);

  // const notaHTML = `
  //   <article class=${nota.seccion}>
  //     <div class="volanta">
  //       <span>${nota.volanta}</span>
  //     </div>
  //     <picture>
  //       <img src="${nota.imagen}" alt="">
  //     </picture>
  //     <div class="data">
  //       <h3>${nota.titulo}</h3>
  //       <p>${nota.bajada}</p>
  //     </div>
  //   </article>
  // `;
  // document.querySelector(".notas-3-principales").innerHTML += notaHTML;
});

function getFromLocalStorage() {
  if (localStorage.getItem("nota")) {
    const nota = JSON.parse(localStorage.getItem("nota"));
    nota.map(({ seccion, volanta, imagen, titulo, bajada }) => {
      const notaHTML = `
        <article class=${seccion}>
          <div class="volanta">
            <span>${volanta}</span>
          </div>
          <picture>
            <img src="${imagen}" alt="">
          </picture>
          <div class="data">
            <h3>${titulo}</h3>
            <p>${bajada}</p> 
          </div>
        </article>
      `;
      document.querySelector(".notas-3-principales").innerHTML += notaHTML;
    });
  } else {
    console.log("No hay nota");
  }
}
getFromLocalStorage();
