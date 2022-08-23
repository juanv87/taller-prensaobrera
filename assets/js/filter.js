/*
 * Array.filter() es un método que itera sobre los elementos de un array
 * aplicando una condición para luego devolver un nuevo array con los elementos que cumplieron dicha condicion
 */

const cros = [
  {
    nombre: "Juan",
    salario: 150000,
    suscrito: true,
    interno: true,
  },
  {
    nombre: "Tito",
    salario: 235000,
    suscrito: false,
    interno: false,
  },
  {
    nombre: "Xime",
    salario: 345000,
    suscrito: true,
    interno: false,
  },
];

// Queremos filtrar los cros que no tienen la suscripción al día.

const noSuscriptos = cros.filter((item) => item.suscrito === false);

console.log(noSuscriptos);

// Todo: Filtrar los cros que sean internos y tengan un salario menor a $230.000

// También podemos utilizar el 2do parámetro
// que recibe filter() para eliminar elementos repetidos en un array

const nombres = ["juan", "belen", "roberto", "belen"];
const nombresRepetidos = nombres.filter((nombre, posicion, nombres) => {
  return posicion === nombres.indexOf(nombre);
});
console.log(nombresRepetidos);
