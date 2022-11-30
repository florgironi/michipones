const sectionSeleccionarAtaque = document.getElementById("Seleccionar-ataque")
const sectionReinicio = document.getElementById("reinicio")
const botonMascotaJugador = document.getElementById("boton-mascotas");

const botonReiniciar = document.getElementById("boton-reinicio")
const contenedorAtaques = document.getElementById("contenedor-botones")

const sectionSeleccionarMascota = document.getElementById("Seleccionar-mascota")

const spanMascotaJugador = document.getElementById("mascota-jugador");

const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

const sectionMensajes = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataque-jugador')
const ataqueDelEnemigo = document.getElementById('ataque-enemigo')

const spanVidasJugador = document.getElementById('vidasJugador')
const spanVidasEnemigo = document.getElementById('vidasEnemigo')

const spanAtaquejugador = document.getElementById("ataque-jugador")
const spanAtaqueEnemigo = document.getElementById("ataque-enemigo")


const contenedorTarjetas = document.getElementById("contenedor-tarjetas")

let michipones = []
let opcionDeMichipones;
let ataqueEnemigo =[]
let ataqueMichipon;
let ataqueMichiponEnemigo;
let inputSerpentina;
let inputTeddy;
let inputKira;
let inputAmigodelhombre;
let inputTiguronsin;
let inputArdillita;
let mascotaJugador;
let botonAgua 
let botonFuego
let botonTierra 
let botones = []
let ataqueJugador=[]
let vidasJugador = 3
let vidasEnemigo = 3

class michipon {
  constructor(nombre, id, foto, vida) {
    this.nombre = nombre
    this.id = id
    this.foto = foto
    this.vida = vida
    this.ataques = []
  }
}

let serpentina = new michipon('Serpentina', 'Serpentina', './asses/pinteres12.jpg', 15)
let teddy = new michipon('Teddy', 'Teddy', './asses/pinteres9.jpg', 5)
let kira = new michipon('Kira', 'Kira', './asses/pinteres6.jpg', 5)
let amigodelhombre = new michipon('Amigo del Hombre', 'Amigodelhombre', './asses/pinteres13.jpg', 5)
let tiguronsin = new michipon('Tiguronsin', 'Tiguronsin', './asses/pinteres8.jpg', 5)
let ardillita = new michipon('Ardillita', 'Ardillita', './asses/ardillitamichipon.jpg', 15)

// la sig expresion sirve para agregar ataques a nuestros mokepones que viven dentro de una classe 
serpentina.ataques.push(
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '🔥', id: 'boton-fuego' },
)

teddy.ataques.push(
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🌱', id: 'boton-tierra' },
)

kira.ataques.push(
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' },
)
amigodelhombre.ataques.push(
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🌱', id: 'boton-tierra' },
)

tiguronsin.ataques.push(
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' },
)

ardillita.ataques.push(
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🌱', id: 'boton-tierra' },
)

// con la funcion de abajo, empujo los mokepones dentro de un array que cree antes
michipones.push(serpentina, teddy, kira, amigodelhombre, tiguronsin, ardillita)

function iniciarjuego() {
  sectionSeleccionarAtaque.style.display = 'none'

  // este metodo nos ayuda a iterar o recorrer cada uno de nuestros objetos dentro de nuestro array "para cada elemento dentro del arrray, generame esto en el html"
  michipones.forEach(michipon => {
    opcionDeMichipones =
      `<input type="radio" name="mascota" id=${michipon.id}>
    <label for=${michipon.id} class="cajaMascota">
      <p class="nombre-mascota"> ${michipon.nombre}</p>
      <img src=${michipon.foto} alt=${michipon.nombre}>
    </label>`

    contenedorTarjetas.innerHTML += opcionDeMichipones

    inputSerpentina = document.getElementById("Serpentina");
    inputTeddy = document.getElementById("Teddy");
    inputKira = document.getElementById("Kira");
    inputAmigodelhombre = document.getElementById("Amigodelhombre");
    inputTiguronsin = document.getElementById("Tiguronsin");
    inputArdillita = document.getElementById("Ardillita");
  });

  sectionReinicio.style.display = 'none'
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
  
  botonReiniciar.addEventListener("click", reiniciarJuego);
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function seleccionarMascotaJugador() {
  sectionSeleccionarMascota.style.display = 'none'
  sectionSeleccionarAtaque.style.display = 'block'

  if (inputSerpentina.checked) {
    spanMascotaJugador.innerHTML = inputSerpentina.id
    mascotaJugador = inputSerpentina.id
  } else if (inputTeddy.checked) {
    spanMascotaJugador.innerHTML = inputTeddy.id;
    mascotaJugador = inputTeddy.id
  } else if (inputKira.checked) {
    spanMascotaJugador.innerHTML = inputKira.id;
    mascotaJugador = inputKira.id
  } else if (inputAmigodelhombre.checked) {
    spanMascotaJugador.innerHTML = inputAmigodelhombre.id
    mascotaJugador = inputAmigodelhombre.id;
  } else if (inputTiguronsin.checked) {
    spanMascotaJugador.innerHTML = inputTiguronsin.id
    mascotaJugador = inputTiguronsin.id;
  } else if (inputArdillita.checked) {
    spanMascotaJugador.innerHTML = inputArdillita.id
    mascotaJugador = inputArdillita.id

  } else {
    alert("tienes que seleccionar una opcion");
  }
  extraerAtaques(mascotaJugador)
  seleccionarMascotaEnemigo();
}

function extraerAtaques() {
  let ataques
  for (let i = 0; i < michipones.length; i++) {
    if (mascotaJugador === michipones[i].id) {
      ataques = michipones[i].ataques
    }

  }
  mostrarAtaques(ataques)
}


function mostrarAtaques(ataques) {
  ataques.forEach((ataques) => {
    ataqueMichipon =
    `<button id=${ataques.id} class="boton-de-ataque BAtaque">${ataques.nombre}</button>`
    contenedorAtaques.innerHTML += ataqueMichipon
  })

  botonAgua = document.getElementById("boton-agua");
  botonFuego = document.getElementById("boton-fuego");
  botonTierra = document.getElementById("boton-tierra");
  botones = document.querySelectorAll('.BAtaque')
  
  
}

function secuenciaAtaque(){
  botones.forEach((boton)=>{
    boton.addEventListener('click',(e)=>{
      if(e.target.textContent ==='🔥'){
        ataqueJugador.push('Fuego')
        console.log(ataqueJugador)
        boton.disabled = true
        boton.style.background = '#112F58'
      }
      else if(e.target.textContent ==='🌱'){
        ataqueJugador.push('Tierra')
        console.log(ataqueJugador)
        boton.disabled = true
        boton.style.background = '#112F58'
      }
      else{
        ataqueJugador.push('Agua')
        console.log(ataqueJugador)
        boton.disabled = true
        boton.style.background = '#112F58'
      }
      funcionAtaqueEnemigo()
    })
  })
}



function seleccionarMascotaEnemigo() {
  let mascotaleatoria = aleatorio(0, michipones.length - 1);
  spanMascotaEnemigo.innerHTML = michipones[mascotaleatoria].nombre
  ataqueMichiponEnemigo = michipones[mascotaleatoria].nombre
  secuenciaAtaque()
}

function funcionAtaqueEnemigo() {
  let ataqueAleatorio = aleatorio(0, ataqueMichiponEnemigo.length-1)

  if (ataqueAleatorio == 0 ||ataqueAleatorio == 1 ) {
    ataqueEnemigo.push('FUEGO')
  } else if (ataqueAleatorio == 2||ataqueAleatorio == 3) {
    ataqueEnemigo.push('AGUA')
  } else {
    ataqueEnemigo.push('TIERRA') 
  }
  console.log('arrayEnemigo:', ataqueEnemigo)
  combate()
}


function crearMensajes(resultado) {
  let nuevoAtaqueDelJugador = document.createElement('p')
  let nuevoAtaqueDelEnemigo = document.createElement('p')

  sectionMensajes.innerHTML = resultado
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo


  ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
  ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}


function crearMensajeFinal(resultadoFinal) {
  sectionMensajes.innerHTML = resultadoFinal
  botonAgua.disabled = true
  botonFuego.disabled = true
  botonTierra.disabled = true

  sectionReinicio.style.display = 'block'
}


function combate() {
  if (ataqueJugador == ataqueEnemigo) {
    crearMensajes("EMPATE")
  } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
    crearMensajes("GANASTE")
    vidasJugador--
    spanVidasEnemigo.innerHTML = vidasEnemigo
  } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
    crearMensajes("GANASTE")
    vidasJugador--
    spanVidasEnemigo.innerHTML = vidasEnemigo
  } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
    crearMensajes("GANASTE")
    vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo
  } else {
    crearMensajes('PERDISTE')
    vidasJugador--
    spanVidasJugador.innerHTML = vidasJugador
  }

  // revisar las vidas
  revisarVidas()
}


function revisarVidas() {
  if (vidasEnemigo == 0)
    crearMensajeFinal("FELICITACIONES! GANASTE :)")
  else if (vidasJugador == 0)
    crearMensajeFinal("Lo siento, Perdiste")
}


function reiniciarJuego() {
  location.reload()
}



window.addEventListener("load", iniciarjuego);
