/*Trabajemos con String
Se necesita un script que solicite al usuario escribir una frase o texto
 y luego ingresar una palabra que quiera buscar. En cualquier caso (sea que encuentre la palabra o no)
  el programa debe devolver un mensaje informando el resultado (Usar emojis también).


let ingresarFrase= prompt('⌨️ Ingrese una frase ');
let palabraBuscada= prompt('🔎 ¿Que palabra quiere buscar?');

let fraseEnMinusculas = ingresarFrase.trim().toLowerCase();
let palabraEnMinusculas = palabraBuscada.trim().toLowerCase();


if (fraseEnMinusculas.includes(palabraEnMinusculas)) {
   
    alert(`🎉 ¡Buenas noticias! La palabra "${palabraBuscada}" SÍ se encuentra en el texto.`);
    console.log(`✅ Resultado: Palabra encontrada.`);

} else {
    
  
    alert(`😒 Lo siento. No pudimos encontrar la palabra "${palabraBuscada}" en el texto.`);
    console.log(`❌ Resultado: Palabra NO encontrada.`);}


/*Usando Math:Crear un script que simule el juego de Adivina el número.Primero se genera un número aleatorio entre 1 y 10 que el usuario no debe saber, 
Luego el usuario ingresa un número entre 1 y 10 tratando de adivinar.Devolver un mensaje si ganó o perdió.

let numeroSecreto = Math.ceil(Math.random() * 10);

let miNumero = Number(prompt("🎲 Adivina el número del 1 al 10:"));

if (miNumero === numeroSecreto) {
    alert("🎉 ¡Ganaste! Adivinaste el número. ⭐");
} else {
    alert("👎 ¡Perdiste! El número era el " + numeroSecreto);
}
*/

//Juguemos con Switch:En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua.Si no elige el menú de la lista aparecerá la frase elija carne, pescado o verdura.

alert("🧐 Bienvenid@, te voy a sugerir la bebida que acompañará tu menú.");


let opcion = prompt("🧐 ¿Qué menú deseas hoy?\nCarne | Pescado | Verdura");


switch (opcion.toLowerCase().trim()) {
    case "carne":
        alert("🍷 Te sugerimos acompañar tu carne con Vino Tinto.");
        break;

    case "pescado":
        alert("🥂 Te sugerimos acompañar tu pescado con Vino Blanco.");
        break;

    case "verdura":
        alert("💧 Te sugerimos acompañar tu verdura con Agua.");
        break;

    default:
    
        alert("❌ Elija carne, pescado o verdura.");
        break;
        }