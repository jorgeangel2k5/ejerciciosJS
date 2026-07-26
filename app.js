const contador= document.querySelector("#contador");
const btonIniciar= document.querySelector("#btnIniciar")
let numero = 10

 btonIniciar.addEventListener("click", function(){
    const cuentaRegresiva = setInterval(function() {
    numero --;
    contador.innerText = numero;
    if (numero === 0) {
        clearInterval(cuentaRegresiva);
        contador.innerText="🚀Despegue🚀";
    }
},1000);
btonIniciar.setAttribute("disabled", "");
})




// Ejercicio 2: "El Semáforo Inteligente" (setTimeout encadenado)
// Consigna: Simula el comportamiento de un semáforo en la pantalla.
//  Crea un círculo (o un cuadro) que cambie de color automáticamente al hacer clic
//  en un botón "Encender Semáforo":

// Empieza en Rojo (durante 3 segundos).

// Pasa automáticamente a Amarillo (durante 2 segundos).

// Pasa automáticamente a Verde (durante 3 segundos).

// Tips para resolverlo:

// Puedes modificar los estilos usando elemento.style.backgroundColor = "red".

// Para lograr la secuencia, puedes usar setTimeout anidados o funciones estructuradas con tiempos acumulados,
//  asegurándote de cambiar la clase o el estilo del elemento del DOM en cada paso.

const btonSemaforo = document.querySelector("#btnSemaforo");
const semaforo = document.querySelector ("#semaforo");

 btonSemaforo.addEventListener("click", function(){
 setTimeout(function(){
    semaforo.style.backgroundColor = "red"
 }, 0);
 setTimeout(function(){
    semaforo.style.backgroundColor = "yellow"
 },3000);
 setTimeout(function(){
    semaforo.style.backgroundColor = "green"
},5000);
 });

//  Ejercicio 3: "El Mensaje Flash" (setTimeout y clases de Bootstrap)
// Consigna: Crea un botón que diga "Guardar Cambios" 
// y un contenedor de alerta oculto (con la clase d-none de Bootstrap). Al hacer clic en el botón:
// La alerta debe aparecer mostrando el mensaje "¡Datos guardados con éxito!".
// Pasados 3 segundos, la alerta debe desaparecer automáticamente volviendo a ocultarse.
// Tips para resolverlo:
// Para mostrar y ocultar la alerta, utiliza classList.remove('d-none') y classList.add('d-none').
// El setTimeout será el encargado de ejecutar la línea
//  que vuelve a agregar la clase d-none tras los 3000 milisegundos.


const btnGuardar = document.querySelector ("#btnGuardar");
const alerta = document.querySelector("#alerta")

;
btnGuardar.addEventListener("click", function(){
   alerta.classList.remove('d-none')

   setTimeout(function(){
   alerta.classList.add('d-none');
 }, 3000);

});