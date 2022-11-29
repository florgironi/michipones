const sectionSeleccionarAtaque = document.getElementById ("Seleccionar-ataque")
const sectionReinicio = document.getElementById ("reinicio")
const botonMascotaJugador = document.getElementById("boton-mascotas");
const botonAgua = document.getElementById("boton-agua");
const botonFuego = document.getElementById("boton-fuego");
const botonTierra = document.getElementById("boton-tierra");
const botonReiniciar = document.getElementById("boton-reinicio")


const sectionSeleccionarMascota = document.getElementById ("Seleccionar-mascota")

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
let ataquejugador;
let ataqueEnemigo;
let inputSerpentina;
let inputTeddy;
let inputKira;
let inputAmigodelhombre ;
let inputTiguronsin ;
let inputArdillita;
let mascotaJugador ;
let vidasJugador = 3
let vidasEnemigo = 3

class michipon{
  constructor(nombre,id,foto,vida){
    this.nombre = nombre
    this.id = id
    this.foto = foto
    this.vida = vida
    this.ataques = []
  }
}

let serpentina = new michipon('Serpentina','Serpentina','./asses/pinteres12.jpg',15)
let teddy = new michipon('Teddy','Teddy','./asses/pinteres9.jpg',5)
let kira = new michipon('Kira','Kira','./asses/pinteres6.jpg',5)
let amigodelhombre = new michipon('Amigo del Hombre','AmigoDelHombre','./asses/pinteres13.jpg',5)
let tiguronsin = new michipon('Tiguronsin','Tiguronsin','./asses/pinteres8.jpg',5)
let ardillita = new michipon('Ardillita','Ardillita','./asses/ardillitamichipon.jpg',15)

// la sig expresion sirve para agregar ataques a nuestros mokepones que viven dentro de una classe 
serpentina.ataques.push(
  {nombre:'💧', id:'boton-agua'},
  {nombre:'💧', id:'boton-agua'},
  {nombre:'💧', id:'boton-agua'},
  {nombre:'🌱', id:'boton-tierra'},
  {nombre:'🔥', id:'boton-fuego'},
  )

teddy.ataques.push(
  {nombre:'🔥', id:'boton-fuego'},
  {nombre:'🔥', id:'boton-fuego'},
  {nombre:'🔥', id:'boton-fuego'},
  {nombre:'💧', id:'boton-agua'},
  {nombre:'🌱', id:'boton-tierra'},
  )

kira.ataques.push(
  {nombre:'🌱', id:'boton-tierra'},
  {nombre:'🌱', id:'boton-tierra'},
  {nombre:'🌱', id:'boton-tierra'},
  {nombre:'💧', id:'boton-agua'},
  {nombre:'🔥', id:'boton-fuego'},
  )
amigodelhombre.ataques.push(
  {nombre:'🔥', id:'boton-fuego'},
  {nombre:'🔥', id:'boton-fuego'},
  {nombre:'💧', id:'boton-agua'},
  {nombre:'💧', id:'boton-agua'},
  {nombre:'🌱', id:'boton-tierra'},
  )

tiguronsin.ataques.push(
  {nombre:'🌱', id:'boton-tierra'},
  {nombre:'🌱', id:'boton-tierra'},
  {nombre:'💧', id:'boton-agua'},
  {nombre:'💧', id:'boton-agua'},
  {nombre:'🔥', id:'boton-fuego'},
  )

ardillita.ataques.push(
  {nombre:'💧', id:'boton-agua'},
  {nombre:'💧', id:'boton-agua'},
  {nombre:'🔥', id:'boton-fuego'},
  {nombre:'🔥', id:'boton-fuego'},
  {nombre:'🌱', id:'boton-tierra'},
  )

// con la funcion de abajo, empujo los mokepones dentro de un array que cree antes

michipones.push(serpentina, teddy, kira, amigodelhombre, tiguronsin, ardillita)

function iniciarjuego() {
  sectionSeleccionarAtaque.style.display ='none'

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
    inputAmigodelhombre = document.getElementById("AmigoDelHombre");
    inputTiguronsin = document.getElementById("Tiguronsin");
    inputArdillita = document.getElementById("Ardillita");
  });

  sectionReinicio.style.display ='none'
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
  botonAgua.addEventListener("click", ataqueagua);
  botonFuego.addEventListener("click", ataquefuego);
  botonTierra.addEventListener("click", ataquetierra);
  botonReiniciar.addEventListener("click", reiniciarJuego);
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function seleccionarMascotaJugador() {
  sectionSeleccionarMascota.style.display ='none'
  sectionSeleccionarAtaque.style.display ='block'

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

function extraerAtaques(){
  let ataques
  for (let i = 0; i < michipones.length;i++){
    if(mascotaJugador === michipones[i].nombre){
      ataques = michipones[i].ataques
    }

  }
  console.log(ataques)
}


function seleccionarMascotaEnemigo() {
  let mascotaleatoria = aleatorio(0, michipones.length - 1);
  spanMascotaEnemigo.innerHTML = michipones[mascotaleatoria].nombre

}

function ataquefuego(){
    ataquejugador = 'FUEGO'
    funcionataqueenemigo()
}
function ataqueagua(){
    ataquejugador = 'AGUA'
    funcionataqueenemigo()
}
function ataquetierra(){
    ataquejugador = 'TIERRA'
    funcionataqueenemigo()
}

function funcionataqueenemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    
    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    } else{
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}
// FUNCION QUE VAMOS A MODIFICAR !!!!
function crearMensajes(resultado){
  let nuevoAtaqueDelJugador = document.createElement('p')
  let nuevoAtaqueDelEnemigo = document.createElement('p')

  sectionMensajes.innerHTML = resultado
  nuevoAtaqueDelJugador.innerHTML = ataquejugador
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

      
  ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
  ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
  sectionMensajes.innerHTML = resultadoFinal
  botonAgua.disabled = true
  botonFuego.disabled = true
  botonTierra.disabled = true
      
  sectionReinicio.style.display ='block'
}

function combate(){
  if(ataquejugador == ataqueEnemigo){
      crearMensajes("EMPATE")
  } else if(ataquejugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
      crearMensajes("GANASTE")
      vidasEnemigo--
      spanVidasEnemigo.innerHTML = vidasEnemigo
  } else if(ataquejugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
      crearMensajes("GANASTE")
      vidasEnemigo--
      spanVidasEnemigo.innerHTML = vidasEnemigo
  } else if(ataquejugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
      crearMensajes("GANASTE")
      vidasEnemigo--
      spanVidasEnemigo.innerHTML = vidasEnemigo
  } else{
      crearMensajes('PERDISTE')
      vidasJugador--
      spanVidasJugador.innerHTML = vidasJugador
  }

  // revisar las vidas
    revisarVidas()
}
function revisarVidas(){
  if(vidasEnemigo == 0 )
  crearMensajeFinal("FELICITACIONES! GANASTE :)")
  else if (vidasJugador == 0)
  crearMensajeFinal("Lo siento, Perdiste")
}

function reiniciarJuego(){
  location.reload()
}



window.addEventListener("load", iniciarjuego);
