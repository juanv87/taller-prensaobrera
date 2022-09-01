// Las funciones asincronas siempre retornan una promesa.
// Por lo tanto, podemos usar el método then() para obtener el resultado de la promesa.
// O podemos usar el método await para obtener el resultado de la promesa. Para ello, la función debe ser declarada como async.

// Ejemplo con await
const getEdmPosts = async (cantidad) => {
  const refDivNotas = document.querySelector(".notasPrensaObrera");
  try {
    const urlFetch = `https://admin.prensaobrera.com/wp-json/wp/v2/posts?&per_page=${cantidad}`;
    const response = await fetch(urlFetch);
    const data = await response.json();
    const listaNotas = data.map(({ title }) => {
      return `<h2>${title.rendered}</h2>`;
    });
    refDivNotas.innerHTML = listaNotas.join("");
  } catch (error) {
    console.log(error);
    refDivNotas.innerHTML = "Error al cargar las notas";
  }
};

// Ejemplo con .then()
const getEdmWithThen = (cantidad) => {
  const urlFetch = `https://admin.prensaobrera.com/wp-json/wp/v2/posts?&per_page=${cantidad}`;
  const refDivNotas = document.querySelector(".notasPrensaObrera");
  fetch(urlFetch)
    .then((response) => response.json())
    .then((data) => {
      const listaNotas = data.map(({ title }) => {
        return `<h2>${title.rendered}</h2>`;
      });
      refDivNotas.innerHTML = listaNotas.join("");
    });
};

document.querySelector("#getNotas").addEventListener("click", () => {
  const nroNotas = document.querySelector("#nroNotas").value;
  getEdmPosts(nroNotas);
});
