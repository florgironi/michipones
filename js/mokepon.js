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
const imgMichiponJugador = document.getElementById("imagen-mascota-jugador");
const imgMichiponEnemigo = document.getElementById("imagen-mascota-enemigo");

const sectionVerMapa = document.getElementById("ver-mapa");
const mapa = document.getElementById("mapa");

let lienzo = mapa.getContext("2d");
let imagenJugadorElegido;
let imagenEnemigoElegido;
let mascotaJugadorObjeto;
let michipones = [];
let ataqueEnemigo = [];
let opcionDeMichipones;
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
let mapaBackground = new Image();
mapaBackground.src = "./asses/fondoCanvas1.jpg";
let alturaQueBuscamos;
let anchoDelMapa = window.innerWidth - 20;
const anchoMaximoDelMapa = 1000;

if (anchoDelMapa > anchoMaximoDelMapa) {
  anchoDelMapa = anchoMaximoDelMapa - 20;
}
alturaQueBuscamos = (anchoDelMapa * 600) / 900;
mapa.width = anchoDelMapa;
mapa.height = alturaQueBuscamos;

class michipon {
  constructor(nombre, id, foto, mapaFoto, x = 30, y = 30) {
    this.nombre = nombre;
    this.id = id;
    this.foto = foto;
    this.ataques = [];
    this.x = x;
    this.y = y;
    this.ancho = 60;
    this.alto = 120;
    this.mapaFoto = new Image();
    this.mapaFoto.src = mapaFoto;
    this.mapaFoto.style.borderRadius = 50;
    this.velocidadX = 0;
    this.velocidadY = 0;
  }

  pintarMichiponCanvas() {
    lienzo.drawImage(this.mapaFoto, this.x, this.y, this.ancho, this.alto);
  }
}
let serpentina = new michipon(
  "Serpentina",
  "Serpentina",
  "./asses/pinteres12.jpg",
  "./asses/pinteres12.jpg",
);
let teddy = new michipon(
  "Teddy",
  "Teddy",
  "./asses/pinteres9.jpg",
  "./asses/pinteres9.jpg"
);
let kira = new michipon(
  "Kira",
  "Kira",
  "./asses/pinteres6.jpg",
  "./asses/pinteres6.jpg"
);
let amigodelhombre = new michipon(
  "Amigo del Hombre",
  "Amigodelhombre",
  "./asses/pinteres13.jpg",
  "./asses/pinteres13.jpg"
);
let tiguronsin = new michipon(
  "Tiguronsin",
  "Tiguronsin",
  "./asses/pinteres8.jpg",
  "./asses/pinteres8.jpg"
);
let ardillita = new michipon(
  "Ardillita",
  "Ardillita",
  "./asses/ardillitamichipon.jpg",
  "./asses/ardillitamichipon.jpg"
);
let serpentinaEnemigo = new michipon(
  "Serpentina",
  "Serpentina",
  "./asses/pinteres12.jpg",
  "./asses/pinteres12.jpg",
  150,
  300
);
let teddyEnemigo = new michipon(
  "Teddy",
  "Teddy",
  "./asses/pinteres9.jpg",
  "./asses/pinteres9.jpg",
  500,
  400
);
let kiraEnemigo = new michipon(
  "Kira",
  "Kira",
  "./asses/pinteres6.jpg",
  "./asses/pinteres6.jpg",
  340,
  120
);
let amigodelhombreEnemigo = new michipon(
  "Amigo del Hombre",
  "Amigodelhombre",
  "./asses/pinteres13.jpg",
  "./asses/pinteres13.jpg",
  600,
  60
);
let tiguronsinEnemigo = new michipon(
  "Tiguronsin",
  "Tiguronsin",
  "./asses/pinteres8.jpg",
  "./asses/pinteres8.jpg",
  710,
  180
);
let ardillitaEnemigo = new michipon(
  "Ardillita",
  "Ardillita",
  "./asses/ardillitamichipon.jpg",
  "./asses/ardillitamichipon.jpg",
  200,
  40,

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

serpentinaEnemigo.ataques.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🔥", id: "boton-fuego" }
);
teddyEnemigo.ataques.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🌱", id: "boton-tierra" }
);
kiraEnemigo.ataques.push(
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" }
);
amigodelhombreEnemigo.ataques.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🌱", id: "boton-tierra" }
);
tiguronsinEnemigo.ataques.push(
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" }
);
ardillitaEnemigo.ataques.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🌱", id: "boton-tierra" }
);

// con la funcion de abajo, empujo los mokepones dentro de un array que cree antes
michipones.push(serpentina, teddy, kira, amigodelhombre, tiguronsin, ardillita);

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function iniciarjuego() {
  sectionSeleccionarAtaque.style.display = "none";
  sectionVerMapa.style.display = "none";

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

function seleccionarMascotaJugador() {
  sectionSeleccionarMascota.style.display = "none";
  
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
  sectionVerMapa.style.display = "flex";
  iniciarMapa();
}

function extraerAtaques(mascotaJugador) {
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

function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      if (e.target.textContent === "🔥") {
        ataqueJugador.push("FUEGO");
        boton.disabled = true;
        boton.style.background = "#EEEEEE";
      } else if (e.target.textContent === "🌱") {
        ataqueJugador.push("TIERRA");
        boton.disabled = true;
        boton.style.background = "#EEEEEE";
      } else {
        ataqueJugador.push("AGUA");
        boton.disabled = true;
        boton.style.background = "#EEEEEE";
      }
      funcionAtaqueEnemigo();
    });
  });
}

function seleccionarMascotaEnemigo(enemigo) {
  spanMascotaEnemigo.innerHTML = enemigo.nombre
  ataqueMichiponEnemigo = enemigo.ataques
  secuenciaAtaque()
  
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
    }  else {
      indexAmbosOponentes(index, index);
      crearMensajes("PERDISTE");
      victoriasEnemigo++;
      spanVictoriasEnemigo.innerHTML = victoriasEnemigo;
    }
  }
  revisarVictorias();
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

function pintarCanvas() {
  mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX;
  mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY;
  lienzo.clearRect(0, 0, mapa.width, mapa.height);
  lienzo.drawImage(
    mapaBackground, 
    0, 
    0, 
    mapa.width,
    mapa.height);
  mascotaJugadorObjeto.pintarMichiponCanvas();
  serpentinaEnemigo.pintarMichiponCanvas();
  teddyEnemigo.pintarMichiponCanvas();
  kiraEnemigo.pintarMichiponCanvas();
  amigodelhombreEnemigo.pintarMichiponCanvas();
  tiguronsinEnemigo.pintarMichiponCanvas();
  ardillitaEnemigo.pintarMichiponCanvas();

  if (
    mascotaJugadorObjeto.velocidadX !== 0 ||
    mascotaJugadorObjeto.velocidadY !== 0
  ) {
    revisarColision(serpentinaEnemigo);
    revisarColision(teddyEnemigo);
    revisarColision(kiraEnemigo);
    revisarColision(amigodelhombreEnemigo);
    revisarColision(tiguronsinEnemigo);
    revisarColision(ardillitaEnemigo);
  }
}

function moverDerecha() {
  mascotaJugadorObjeto.velocidadX = 5;
}
function moverIzquierda() {
  mascotaJugadorObjeto.velocidadX = -5;
}
function moverArriba() {
  mascotaJugadorObjeto.velocidadY = -5;
}
function moverAbajo() {
  mascotaJugadorObjeto.velocidadY = 5;
}

function detenerMovimiento() {
  mascotaJugadorObjeto.velocidadX = 0;
  mascotaJugadorObjeto.velocidadY = 0;
}

function sePresionoUnaTecla(event) {
  switch (event.key) {
    case "ArrowUp":
      moverArriba();
      break;
    case "ArrowDown":
      moverAbajo();
      break;
    case "ArrowLeft":
      moverIzquierda();
      break;
    case "ArrowRight":
      moverDerecha();
      break;
    default:
      break;
  }
}
// http://127.0.0.1:5500/
function iniciarMapa() {
  mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador);
  console.log(mascotaJugadorObjeto, mascotaJugador);
  intervalo = setInterval(pintarCanvas, 50);

  window.addEventListener("keydown", sePresionoUnaTecla);

  window.addEventListener("keyup", detenerMovimiento);
}

function obtenerObjetoMascota() {
  for (let i = 0; i < michipones.length; i++) {
    if (mascotaJugador === michipones[i].id) {
      return michipones[i];
    }
  }
}

function revisarColision(enemigo) {
  const arribaEnemigo = enemigo.y;
  const abajoEnemigo = enemigo.y + enemigo.alto;
  const derechaEnemigo = enemigo.x + enemigo.ancho;
  const izquierdaEnemigo = enemigo.x;
  const arribaMascota = mascotaJugadorObjeto.y;
  const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto;
  const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
  const izquierdaMascota = mascotaJugadorObjeto.x;
  if (
    abajoMascota < arribaEnemigo ||
    arribaMascota > abajoEnemigo ||
    derechaMascota < izquierdaEnemigo ||
    izquierdaMascota > derechaEnemigo
  ) {
    return;
  }
  detenerMovimiento();
  clearInterval(intervalo);
  console.log("se detecto una colision");
  sectionSeleccionarAtaque.style.display = "flex";
  sectionVerMapa.style.display = "none";
  seleccionarMascotaEnemigo(enemigo);
}

function UnirseAlJuego(){
  fetch('http://localhost:8080/unirse')
    .then(function (res) {
      if(res.ok){
        res.text()
          .then(function(respuesta){
            console.log({respuesta})
        })
    }
  });
}

window.addEventListener("load", iniciarjuego);
