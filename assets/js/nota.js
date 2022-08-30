const refButton = document.querySelector("#saveTitle");
const refInputTitle = document.querySelector("#inputTitle");
const refNotaTitle = document.querySelector("h1");
const refNotaImagen = document.querySelector(".content-nota picture img");
const refUserAvatar = document.querySelector(".user-avatar");
const refNotasGuardadas = document.querySelector(".notasGuardadas");
const refFrenteInput = document.querySelector("#frenteInput");
const refNombresPadron = document.querySelector(".nombresPadron");

refButton.addEventListener("click", function () {
  refNotaTitle.innerText = refInputTitle.value;
});

const saveNota = () => {
  refUserAvatar.classList.toggle("active");
  const nota = {
    titulo: refNotaTitle.innerText,
    imagen: refNotaImagen.src,
  };
  console.log({ nota });
  refNotasGuardadas.innerHTML = `
    <article>
      <img src="${nota.imagen}" alt="imagen de la nota">
      <p>${nota.titulo}</p>
    </article>
  `;
};

const openSaveNotaDiv = () => {
  refNotasGuardadas.classList.toggle("hidden");
};

const miPadron = [
  {
    nombre: "Juan",
    edad: 25,
    frente: "Universidad",
    suscripto: true,
    expo: false,
    trabaja: true,
    cotiz: 3000,
  },
  {
    nombre: "Tito",
    edad: 45,
    frente: "Polo Obrero",
    suscripto: true,
    expo: false,
    trabaja: true,
    cotiz: 3500,
  },
  {
    nombre: "Xime",
    edad: 15,
    frente: "Polo Obrero",
    suscripto: false,
    expo: true,
    trabaja: true,
    cotiz: 1000,
  },
  {
    nombre: "Belen",
    edad: 75,
    frente: "Artista",
    suscripto: true,
    expo: false,
    trabaja: false,
    cotiz: 300,
  },
];

const autoresDestacados = [
  {
    nombre: "Eduardo Salas",
    facebook: "https://www.facebook.com/eduardosalas",
    twitter: "https://twitter.com/eduardosalas",
    instagram: "https://www.instagram.com/eduardosalas",
    imagen:
      "https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2Feffbd8fe-2387-4db2-91b7-f9f119fab385.jpg&w=1920&q=75",
  },
  {
    nombre: "Gustavo Montenegro",
    facebook: "https://www.facebook.com/gustavo.montenegro.399",
    twitter: "https://twitter.com/gustavomonten",
    instagram: "",
    imagen:
      "https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2FGustavo-Montenegro-e1621526313705.jpg&w=1920&q=75",
  },
  {
    nombre: "Ivan Hirsch",
    twitter: "https://twitter.com/ivanhirsch",
    instagram: "https://www.instagram.com/ivanhirsch/",
    imagen:
      "https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2FHirsch-1-1.jpeg&w=1920&q=75",
  },
  {
    nombre: "Marcelo Masche",
    twitter: "https://twitter.com/marcelomasche",
    imagen:
      "https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2FMarcelo-Mache-e1621527498204.jpg&w=1920&q=75",
  },
  {
    nombre: "Guillermo Kane",
    twitter: "https://twitter.com/guillermokane",
    instagram: "https://www.instagram.com/guillermokane/",
    imagen:
      "https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2FGuillermo-Kane.jpeg&w=1920&q=75",
  },
  {
    nombre: "Vanina Biasi",
    twitter: "https://twitter.com/vaninabiasi",
    instagram: "https://www.instagram.com/vaninabiasi/",
    facebook: "https://www.facebook.com/vaninabiasi",
    imagen:
      "https://prensaobrera.com/_next/image?url=https%3A%2F%2Fadmin.prensaobrera.com%2Fwp-content%2Fuploads%2Fvanina-biasi-e1632177916321.jpg&w=1920&q=75",
  },
];

// Metodo map()
const nombresPadron = miPadron.map((persona) => {
  return `${persona.nombre} - ${persona.frente}`;
});

// Metodo filter()
const padronSegunFrente = miPadron.filter((persona) => {
  return persona.frente === "Polo Obrero" && persona.suscripto === true;
});

// Metodo reduce()
const promedioDeEdad = miPadron.reduce((acc, persona) => {
  return acc + persona.edad / miPadron.length;
}, 0);

const sumarCotizaciones = miPadron.reduce((acc, persona) => {
  return acc + persona.cotiz;
}, 0);

// console.log({
//   miPadron,
//   nombresPadron,
//   padronSegunFrente,
//   promedioDeEdad,
//   sumarCotizaciones,
// });

const filtrarPorAutorNombre = (nombre = refFrenteInput.value.toLowerCase()) => {
  const filtrados = autoresDestacados.filter((item) =>
    item.nombre.toLowerCase().includes(nombre)
  );
  refNombresPadron.innerHTML = `
    <ul>
      ${
        filtrados && filtrados.length > 0
          ? filtrados
              .map(
                ({ imagen, nombre, facebook, twitter, instagram }) => `
          <li>
            <img src="${imagen}" alt="${nombre}">
            <p>${nombre}</p>
            <div class="redes">
              ${
                facebook &&
                `<a href="${facebook}">
                      <img width="20" height="20" src="data:image/png;base64,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" />
                    </a>`
              }
              ${
                instagram &&
                `<a href="${instagram}">
                        <img width="20" height="20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzJvpxrn6367Cx2xrZkyDzkxefg9gyB0Xmh-3ffaQcfFF90jFlW1K80Uuj6bP0L-_U3o&usqp=CAU" />
                      </a>`
              }
              ${
                twitter &&
                `<a href="${twitter}">
                        <img width="20" height="20" src="https://i.pinimg.com/564x/5b/62/96/5b62968b0fef17abf9144fed2f73b6d9.jpg" />
                      </a>`
              }
            </div>
          </li>
          `
              )
              .join("")
          : "No hay resultados"
      }
    </ul>
  `;
  console.log(filtrados);
};

const filtrar = () => {
  filtrarPorAutorNombre(refFrenteInput.value.toLowerCase());
};
