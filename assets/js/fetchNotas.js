const getEdmPosts = async (cantidad) => {
  const response = await fetch(
    `https://admin.prensaobrera.com/wp-json/wp/v2/posts?&per_page=${cantidad}`
  );
  const data = await response.json();
  console.log(data);
  const refDivNotas = document.querySelector(".notasPrensaObrera");
  const listaNotas = data.map(({ title }) => {
    return `<h2>${title.rendered}</h2>`;
  });

  refDivNotas.innerHTML = listaNotas.join("");
};

document.querySelector("#getNotas").addEventListener("click", () => {
  const nroNotas = document.querySelector("#nroNotas").value;
  getEdmPosts(nroNotas);
});
