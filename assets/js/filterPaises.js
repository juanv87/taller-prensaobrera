const autores = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    nacionalidad: "Argentina",
  },
  {
    id: 2,
    nombre: "Laura",
    apellido: "Rodriguez",
    nacionalidad: "Peru",
  },
  {
    id: 3,
    nombre: "Roberto",
    apellido: "Gomez",
    nacionalidad: "Paraguay",
  },
];

const pais = "Argentina";

const filtrarPorPais = (pais) => {
  return autores.filter((autor) => autor.nacionalidad === pais);
};

document
  .querySelector("#autores")
  .append(autores.map((autor) => autor.nombre + " " + autor.apellido));
document
  .querySelector("#autoresFiltrados")
  .append(
    filtrarPorPais(pais).map((autor) => autor.nombre + " " + autor.apellido)
  );
