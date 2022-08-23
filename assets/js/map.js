/*
 * Array.map() Es un metodo que transforma los elementos de un array,
 * aplicandoles a cada uno una función transformadora en base al elemento en cuestion y su posición en el array generando un nuevo array.
 * Recibe como 1er parámetro la función a aplicar a cada elemento del array
 */

// 📣 EJ: Tenemos un listado de numeros y queremos crear un nuevo array pero que cada elemento sea el doble.
const numeros = [1, 2, 3, 4, 5];
const numerosDobles = numeros.map((numero) => numero * 2);
console.log("Array original", numeros, "Nuevo array modificado", numerosDobles);

// 👉 Tambien podemos usar map() para agregar una propiedad a cada elemento del array aplicando una función transformadora.
// 📣 Ej. Tenemos un listado de personas y queremos agregarle la cotizacion como una propiedad más del objeto
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

// ⚡ La funcion transformadora será multiplicar el salario por 0,05.
// 👉 Tambien estamos retornando un nuevo objeto donde vamos a traer las propiedades del objeto original y vamos a pisarle o agregarle la propiedad cotizacion
const crosCotiz = cros.map((cro) => {
  return {
    ...cro,
    cotizacion: cro.salario * 0.05,
  };
});
console.log("Array original", cros, "Nuevo Array con cotización", crosCotiz);

// 👉 Podemos exceptuar la función usando un condicional que escape de la funcion.
// 📣 Ej. Agregar la propiedad cotización solamente a los internos.
const crosCotizInternos = cros.map((cro) => {
  if (cro.interno === false) return cro;
  return {
    ...cro,
    cotizacion: cro.salario * 0.05,
  };
});
console.log("Exceptuar los no internos", crosCotizInternos);

// 👉 Tambien podemos usarlo para extraer una propiedad de cada elemento del array.
// 📣 Ej. Queremos extraer solo el nombre de cada una.
const crosNombres = cros.map((cro) => cro.nombre);

// ⚡ Podemos optimizar la función usando el operador destructuring para extraer la propiedad nombre de cada elemento del array.
const crosNombresOptimizado = cros.map(({ nombre }) => nombre);

// Todo: Agregar propiedad "Descripcion" a cada elemento del array que contenga: "Recordarle que se suscriba" si el cro no lo está.
