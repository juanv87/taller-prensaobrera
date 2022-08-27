const cros = [
  {
    nombre: "Juan",
    salario: 150000,
    cotizacion: 7500,
    suscrito: true,
    interno: true,
  },
  {
    nombre: "Tito",
    salario: 235000,
    cotizacion: 11750,
    suscrito: false,
    interno: false,
  },
  {
    nombre: "Xime",
    salario: 345000,
    cotizacion: 17250,
    suscrito: true,
    interno: false,
  },
];

// La funcion reduce() recibe 2 parametros: un callback y un valor inicial (opcional)
// El callback recibe 2 parametros: el acumulador y el item actual
// El acumulador es el valor que se va acumulando en cada iteración
// El item actual es el item que se está iterando en cada iteración
// El valor inicial es el valor que se le asigna al acumulador en la primera iteración
// Si no se le asigna un valor inicial, el acumulador toma el valor del primer item del array
// y el item actual toma el valor del segundo item del array

// Queremos saber cuanto suma la cotización de todos los cros utilizando reduce()
const handleAportes = (cros) => {
  const sumaCotizaciones = cros.reduce(
    (acumulador, item) => acumulador + item.cotizacion,
    0
  );
  console.log(sumaCotizaciones);
  // return sumaCotizaciones;
};
handleAportes(cros);
