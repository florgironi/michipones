const sectionSeleccionarAtaque = document.getElementById("Seleccionar-ataque");
const sectionReinicio = document.getElementById("reinicio");
const botonMascotaJugador = document.getElementById("boton-mascotas");

const botonReiniciar = document.getElementById("boton-reinicio");
const contenedorAtaques = document.getElementById("contenedor-botones");

const sectionSeleccionarMascota = document.getElementById(
  "Seleccionar-mascota"
);

const spanMascotaJugador = document.getElementById("mascota-jugador");

const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

const sectionMensajes = document.getElementById("resultado");
const ataqueDelJugador = document.getElementById("ataque-jugador");
const ataqueDelEnemigo = document.getElementById("ataque-enemigo");

const spanVictoriasJugador = document.getElementById("victoriasJugador");
const spanVictoriasEnemigo = document.getElementById("victoriasEnemigo");

const spanAtaquejugador = document.getElementById("ataque-jugador");
const spanAtaqueEnemigo = document.getElementById("ataque-enemigo");

const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
const imgMichiponJugador = document.getElementById("imagen-mascota-jugador")
const imgMichiponEnemigo = document.getElementById("imagen-mascota-enemigo")

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

// ver de nuevo la clase IMAGENES Y PERSONAJES DE FONDO//

let lienzo = mapa.getContext('2d')
let imagenJugadorElegido
let imagenEnemigoElegido
let michipones = [];
let opcionDeMichipones;
let ataqueEnemigo = [];
let ataqueMichipon;
let ataqueMichiponEnemigo;
let inputSerpentina;
let inputTeddy;
let inputKira;
let inputAmigodelhombre;
let inputTiguronsin;
let inputArdillita;
let mascotaJugador;
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let botonAgua;
let botonFuego;
let botonTierra;
let botones = [];
let ataqueJugador = [];
let victoriasEnemigo = 0;
let victoriasJugador = 0;
let intervalo;
let mapaBackground = new Image()
mapaBackground.src = './asses/fondoCanvas1.jpg'


class michipon {
  constructor(nombre, id, foto, mapaFoto,x = 10,y = 10) {
    this.nombre = nombre;
    this.id = id;
    this.foto = foto;
    this.ataques = [];
    this.x = 20
    this.y = 20
    this.ancho = 60
    this.alto = 120
    this.mapaFoto = new Image()
    this.mapaFoto.src = mapaFoto
    this.velocidadX = 0
    this.velocidadY = 0
  }


  pintarMichiponCanvas(){
    lienzo.drawImage(
      this.mapaFoto,
      this.x,
      this.y,
      this.ancho,
      this.alto
    )
  }
}


let serpentina = new michipon(
  "Serpentina",
  "Serpentina",
  "./asses/pinteres12.jpg",
  "./asses/pinteres12.jpg",
  // "aca tiene que ir la imagen de la cara del michipon"
);
let teddy = new michipon(
  "Teddy", 
  "Teddy",
  "./asses/pinteres9.jpg",
  "./asses/pinteres9.jpg",
  // "aca tiene que ir la imagen de la cara del michipon"
  );
let kira = new michipon(
  "Kira", 
  "Kira", 
  "./asses/pinteres6.jpg",
  "./asses/pinteres6.jpg",

  // "aca tiene que ir la imagen de la cara del michipon"
  );
let amigodelhombre = new michipon(
  "Amigo del Hombre",
  "Amigodelhombre",
  "./asses/pinteres13.jpg",
  "./asses/pinteres13.jpg",
  // "aca tiene que ir la imagen de la cara del michipon"
);
let tiguronsin = new michipon(
  "Tiguronsin",
  "Tiguronsin",
  "./asses/pinteres8.jpg",
  "./asses/pinteres8.jpg",
  // "aca tiene que ir la imagen de la cara del michipon"

);
let ardillita = new michipon(
  "Ardillita",
  "Ardillita",
  "./asses/ardillitamichipon.jpg",
  "./asses/ardillitamichipon.jpg",
  // "aca tiene que ir la imagen de la cara del michipon"

);

let serpentinaEnemigo = new michipon(
  "Serpentina",
  "Serpentina",
  "./asses/pinteres12.jpg",
  "./asses/pinteres12.jpg",
  // "aca tiene que ir la imagen de la cara del michipon"
);
let teddyEnemigo = new michipon(
  "Teddy", 
  "Teddy",
  "./asses/pinteres9.jpg",
  "./asses/pinteres9.jpg",
  // "aca tiene que ir la imagen de la cara del michipon"
  );
let kiraEnemigo = new michipon(
  "Kira", 
  "Kira", 
  "./asses/pinteres6.jpg",
  "./asses/pinteres6.jpg",

  // "aca tiene que ir la imagen de la cara del michipon"
  );
let amigodelhombreEnemigo = new michipon(
  "Amigo del Hombre",
  "Amigodelhombre",
  "./asses/pinteres13.jpg",
  "./asses/pinteres13.jpg",
  // "aca tiene que ir la imagen de la cara del michipon"
);
let tiguronsinEnemigo = new michipon(
  "Tiguronsin",
  "Tiguronsin",
  "./asses/pinteres8.jpg",
  "./asses/pinteres8.jpg",
  // "aca tiene que ir la imagen de la cara del michipon"

);
let ardillitaEnemigo = new michipon(
  "Ardillita",
  "Ardillita",
  "./asses/ardillitamichipon.jpg",
  "./asses/ardillitamichipon.jpg",
  // "aca tiene que ir la imagen de la cara del michipon"

);


// la sig expresion sirve para agregar ataques a nuestros mokepones que viven dentro de una classe
serpentina.ataques.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🔥", id: "boton-fuego" }
);
teddy.ataques.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🌱", id: "boton-tierra" }
);
kira.ataques.push(
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" }
);
amigodelhombre.ataques.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🌱", id: "boton-tierra" }
);
tiguronsin.ataques.push(
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" }
);
ardillita.ataques.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🌱", id: "boton-tierra" }
);

// con la funcion de abajo, empujo los mokepones dentro de un array que cree antes
michipones.push(serpentina, teddy, kira, amigodelhombre, tiguronsin, ardillita);

function iniciarjuego() {
  sectionSeleccionarAtaque.style.display = "none";
  sectionVerMapa.style.display = 'none'



  // este metodo nos ayuda a iterar o recorrer cada uno de nuestros objetos dentro de nuestro array "para cada elemento dentro del arrray, generame esto en el html"
  michipones.forEach((michipon) => {
    opcionDeMichipones = `<input type="radio" name="mascota" id=${michipon.id}>
    <label for=${michipon.id} class="cajaMascota">
      <p class="nombre-mascota"> ${michipon.nombre}</p>
      <img src=${michipon.foto} alt=${michipon.nombre}>
    </label>`;

    contenedorTarjetas.innerHTML += opcionDeMichipones;

    inputSerpentina = document.getElementById("Serpentina");
    inputTeddy = document.getElementById("Teddy");
    inputKira = document.getElementById("Kira");
    inputAmigodelhombre = document.getElementById("Amigodelhombre");
    inputTiguronsin = document.getElementById("Tiguronsin");
    inputArdillita = document.getElementById("Ardillita");
  });

  sectionReinicio.style.display = "none";
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  botonReiniciar.addEventListener("click", reiniciarJuego);
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function seleccionarMascotaJugador() {
  sectionSeleccionarMascota.style.display = "none";
  // sectionSeleccionarAtaque.style.display = "flex";
  sectionVerMapa.style.display = "flex"
  
  
  if (inputSerpentina.checked) {
    spanMascotaJugador.innerHTML = inputSerpentina.id;
    mascotaJugador = inputSerpentina.id;
  } else if (inputTeddy.checked) {
    spanMascotaJugador.innerHTML = inputTeddy.id;
    mascotaJugador = inputTeddy.id;
  } else if (inputKira.checked) {
    spanMascotaJugador.innerHTML = inputKira.id;
    mascotaJugador = inputKira.id;
  } else if (inputAmigodelhombre.checked) {
    spanMascotaJugador.innerHTML = inputAmigodelhombre.id;
    mascotaJugador = inputAmigodelhombre.id;
  } else if (inputTiguronsin.checked) {
    spanMascotaJugador.innerHTML = inputTiguronsin.id;
    mascotaJugador = inputTiguronsin.id;
  } else if (inputArdillita.checked) {
    spanMascotaJugador.innerHTML = inputArdillita.id;
    mascotaJugador = inputArdillita.id;
  } else {
    alert("tienes que seleccionar una opcion");
  }
  extraerAtaques(mascotaJugador);
  seleccionarMascotaEnemigo();
  iniciarMapa()
}

function extraerAtaques() {
  let ataques;
  for (let i = 0; i < michipones.length; i++) {
    if (mascotaJugador === michipones[i].id) {
      ataques = michipones[i].ataques;
    }
  }
  mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataques) => {
    ataqueMichipon = `<button id=${ataques.id} class="boton-de-ataque BAtaque">${ataques.nombre}</button>`;
    contenedorAtaques.innerHTML += ataqueMichipon;
  });

  botonAgua = document.getElementById("boton-agua");
  botonFuego = document.getElementById("boton-fuego");
  botonTierra = document.getElementById("boton-tierra");
  botones = document.querySelectorAll(".BAtaque");  
}

// function mostrarImgMascotas(){
//   imagenJugadorElegido = `<img src="${michipon.foto}" alt="${michipon.nombre}">`
//   imagenEnemigoElegido = `<img src="${michipon.foto}" alt="${michipon.nombre}">`

//   imgMichiponJugador.innerHTML = imagenJugadorElegido
//   imgMichiponEnemigo.innerHTML = imagenEnemigoElegido

// }

function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      if (e.target.textContent === "🔥") {
        ataqueJugador.push("FUEGO");
        console.log(ataqueJugador);
        boton.disabled = true;
        boton.style.background = "#112F58";
      } else if (e.target.textContent === "🌱") {
        ataqueJugador.push("TIERRA");
        console.log(ataqueJugador);
        boton.disabled = true;
        boton.style.background = "#112F58";
      } else {
        ataqueJugador.push("AGUA");
        console.log(ataqueJugador);
        boton.disabled = true;
        boton.style.background = "#112F58";
      }
      funcionAtaqueEnemigo();
    });
  });
}

function seleccionarMascotaEnemigo() {
  let mascotaleatoria = aleatorio(0, michipones.length - 1);
  spanMascotaEnemigo.innerHTML = michipones[mascotaleatoria].nombre;
  ataqueMichiponEnemigo = michipones[mascotaleatoria].nombre;
  secuenciaAtaque();
}

function funcionAtaqueEnemigo() {
  let ataqueAleatorio = aleatorio(0, ataqueMichiponEnemigo.length - 1);

  if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
    ataqueEnemigo.push("FUEGO");
  } else if (ataqueAleatorio == 2 || ataqueAleatorio == 3) {
    ataqueEnemigo.push("AGUA");
  } else {
    ataqueEnemigo.push("TIERRA");
  }
  console.log("arrayEnemigo:", ataqueEnemigo);
  iniciarCombate();
}

function iniciarCombate() {
  if (ataqueJugador.length === 5) {
    combate();
  }
}
function indexAmbosOponentes(jugador, enemigo) {
  indexAtaqueJugador = ataqueJugador[jugador];
  indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}

function combate() {
  // Recorre el array de la cantidad de ataques tanto del jugador como del enemigo, y cuando lo valida, empieza el combate
  for (let index = 0; index < ataqueJugador.length; index++) {
    console.log(ataqueJugador[index]);
    if (ataqueJugador[index] == ataqueEnemigo[index]) {
      indexAmbosOponentes(index, index);
      crearMensajes("EMPATE");
    } else if (
      ataqueJugador[index] === "FUEGO" &&
      ataqueEnemigo[index] === "TIERRA"
    ) {
      indexAmbosOponentes(index, index);
      crearMensajes("GANASTE");
      victoriasJugador++;
      spanVictoriasJugador.innerHTML = victoriasJugador;
    } else if (
      ataqueJugador[index] === "AGUA" &&
      ataqueEnemigo[index] === "FUEGO"
    ) {
      indexAmbosOponentes(index, index);
      crearMensajes("GANASTE");
      victoriasJugador++;
      spanVictoriasJugador.innerHTML = victoriasJugador;
    } else if (
      ataqueJugador[index] === "TIERRA" &&
      ataqueEnemigo[index] === "AGUA"
    ) {
      indexAmbosOponentes(index, index);
      crearMensajes("GANASTE");
      victoriasJugador++;
      spanVictoriasJugador.innerHTML = victoriasJugador;
    } else {
      indexAmbosOponentes(index, index);
      crearMensajes("PERDISTE");
      victoriasEnemigo++;
      spanVictoriasEnemigo.innerHTML = victoriasEnemigo;
    }
    revisarVictorias();
  }
}
function revisarVictorias() {
  if (victoriasEnemigo == victoriasJugador) {
    crearMensajeFinal("Esto fue un empate!!");
  } else if (victoriasEnemigo > victoriasJugador) {
    crearMensajeFinal("Lo siento, Perdiste");
  } else {
    crearMensajeFinal("FELICITACIONES! GANASTE :)");
  }
}

function crearMensajes(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;

  ataqueDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}
function crearMensajeFinal(resultadoFinal) {
  sectionMensajes.innerHTML = resultadoFinal;
  sectionReinicio.style.display = "block";
}
function reiniciarJuego() {
  location.reload();
}

function pintarCanvas(){
  console.log(mascotaJugadorObjeto)
  mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
  mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
  mascotaJugadorObjeto.pintarMichiponCanvas()
}

function moverDerecha(){
  mascotaJugadorObjeto.velocidadX = 5
}
function moverIzquierda(){
  mascotaJugadorObjeto.velocidadX = -5
}
function moverArriba(){
  mascotaJugadorObjeto.velocidadY = -5
}
function moverAbajo(){
  mascotaJugadorObjeto.velocidadY = 5
}

function detenerMovimiento(){
  mascotaJugadorObjeto.velocidadX = 0
  mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event){
  switch (event.key) {
    case 'ArrowUp':
        moverArriba()
        break
    case 'ArrowDown':
        moverAbajo()
        break
    case 'ArrowLeft':
        moverIzquierda()
        break
    case 'ArrowRight':
        moverDerecha()
        break
    default:
        break
}
}
// http://127.0.0.1:5500/
function iniciarMapa() {
  mapa.width = 800
  mapa.height = 500
  mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
  console.log(mascotaJugadorObjeto, mascotaJugador);
  intervalo = setInterval(pintarCanvas, 50)
  
  window.addEventListener('keydown', sePresionoUnaTecla)

  window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota() {
  for (let i = 0; i < michipones.length; i++) {
      if (mascotaJugador === michipones[i].nombre) {
          return michipones[i]
      }
  }
}
window.addEventListener("load", iniciarjuego);
