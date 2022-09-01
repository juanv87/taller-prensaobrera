// Las funciones asincronas siempre retornan una promesa.
// Por lo tanto, podemos usar el método then() para obtener el resultado de la promesa.
// O podemos usar el método await para obtener el resultado de la promesa. Para ello, la función debe ser declarada como async.

const refListaNotas = document.querySelector(".listaNotas");

const probandoFetch = async (nroNotas) => {
  const response = await fetch(
    `https://admin.prensaobrera.com/wp-json/wp/v2/posts?&per_page=${nroNotas}&_embed`
  );
  const data = await response.json();
  console.log(data);

  refListaNotas.innerHTML = `
  ${data
    .map(({ title, excerpt, link, _embedded }) => {
      return `
        <article>
          <img width="150" src="${_embedded["wp:featuredmedia"][0].source_url}" />
          <p>${_embedded["wp:term"][2][0].name}</p>
          <h2>
            <a href=${link}>
              ${title.rendered}
            </a>
          </h2>
          ${excerpt.rendered}
        </article>
        `;
    })
    .join("")} 
  `;
};

probandoFetch(1);

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

// document.querySelector("#getNotas").addEventListener("click", () => {
//   const nroNotas = document.querySelector("#nroNotas").value;
//   getEdmPosts(nroNotas);
// });
