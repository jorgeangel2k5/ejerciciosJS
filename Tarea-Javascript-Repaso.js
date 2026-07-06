// #### 1. El Buscador de Valores Únicos (for)

// Tienes un array con números repetidos. Crea un nuevo array llamado
//  `unicos` que contenga cada número del original, pero **sin repeticiones**.

// ```javascript

// const numeros = [1, 2, 2, 3, 4, 4, 5, 1, 6];
// const unicos=[]

// for (let index = 0; index <numeros.length; index++) {
   
//     if (!unicos.includes(numeros[index])) {
//         unicos.push(numeros[index]);
//     }
    
// }
// console.log(unicos);

// #### 2. El Separador de Tipos (for)

// Tienes un array mixto. Recorre el array y separa los elementos
//  en dos arrays distintos: `soloNumeros` y `soloStrings`.


// const mixto = ["Hola", 10, "Mundo", 25, 40, "Javascript", true];
// const soloNumeros=[];
// const soloStrings=[];

// for (let index = 0; index < mixto.length; index++) {
//  if (typeof mixto[index] === "string") {
//     soloStrings.push(mixto[index]);
//  }
 
// if (typeof mixto[index] === "number") {
//     soloNumeros.push(mixto[index]);
// }
// }

// console.log(soloNumeros);
// console.log(soloStrings);


// #### 3. El Transformador de Textos (for)

// Dado un array de palabras, crea un nuevo array donde todas las palabras 
// tengan su primera letra en mayúscula y el resto en minúscula.
// array de palabras capitalizadas


// const palabras = ["jAvAsCrIpT", "pRoGrAmAcIoN", "eJeRcIcIo"];
// const palabraCapitalizada= [];

// for (let index = 0; index < palabras.length; index++) {
// let palabraoriginal= palabras[index];
//     let palabracorregida= palabraoriginal.charAt(0).toUpperCase()+ palabraoriginal.slice(1). toLowerCase();
//     palabraCapitalizada.push(palabracorregida);
// }
    
// console.log(palabraCapitalizada);


// #### 4. Análisis de Temperaturas (for)

// Dado un array que representa las temperaturas de la semana, encuentra la **temperatura máxima** 
// y la **temperatura mínima**.

// const temperaturas = [18, 22, 15, 28, 12, 25, 19];

// let tempMax= temperaturas[0];
// let tempMin= temperaturas[0];

// for (let index = 0; index < temperaturas.length; index++) {
//     if (temperaturas[index] >tempMax) {
//      tempMax=(temperaturas[index]);
//     }
//    if (temperaturas[index] <tempMin) {
//      tempMin=(temperaturas[index]);
//     }
//  }
//   console.log("La temperatura 🥶 Minima de la semana es:"  + tempMin + "°" );
//   console.log("La temperatura 🥵 Maxima de la semana es:"  + tempMax + "°" );

// #### 5. El Codificador Simple (for)

// Crea un programa que recorra un array de números y 
// genere un nuevo array donde cada número sea multiplicado por sí mismo (el cuadrado), 
// pero **solo si es un número par**. Si es impar, el valor debe permanecer igual.

// const datos = [1, 2, 3, 4, 5, 6, 7, 8];
// const nuevoArray=[]

// for (let index = 0; index < datos.length; index++) {
//   let numeroindex= datos[index]
//   if (numeroindex % 2 === 0) {
//  let par= numeroindex * numeroindex;
//     nuevoArray.push(par);
//   } else{
//     nuevoArray.push(numeroindex);
//     }
// }
//       console.log(nuevoArray);


// #### 6. El Buscador de "La Frase Secreta" (while)

// Tienes un array de strings. Debes recorrerlo y detenerte apenas encuentres
//  la palabra "objetivo". Cuando la encuentres, imprime su índice y rompe el ciclo inmediatamente.


// const palabras = ["manzana", "perro", "objetivo", "casa", "sol"];
// let index=0

// while (index < palabras.length) {

//   let palabraoculta = palabras[index];
//     if (palabraoculta==="objetivo") {
//        console.log(`se encontrola palabra en el indice:${index}`);
//     break;
//     }
    
//       index++

//   }

// #### 7. La Batería del Robot (while)

// Imagina que un robot tiene una batería inicial de 100%. 
// Cada tarea que realiza consume una cantidad aleatoria de energía (entre 5 y 20).

// - **Reto:** Cuenta cuántas tareas logró realizar antes de apagarse.


// let bateria = 100;
// let tareasRealizadas = 0;

// while (bateria>0) {
// let cantidadAletoria= Math.floor(Math.random () *(20-5+1)) + 5;
// bateria = bateria - cantidadAletoria

// tareasRealizadas++;

// }
// console.log(`🤖Logré realizar ${tareasRealizadas} tareas`);

// #### 8. La Calculadora de Conversión (function)

// Crea una función llamada `convertirAMinutos` que reciba un número de horas
//  y retorne la cantidad equivalente en minutos.

// - **Reto:** Invoca la función con diferentes valores y muestra el resultado en consola.
// - **Pista:** `minutos = horas * 60`.

// function convertirAMinutos(horas) {
//   let minutos= horas * 60;
//   return minutos
// }
// console.log("2 horas son: " + convertirAMinutos(2) + " minutos");
// console.log("5 horas son: " + convertirAMinutos(5) + " minutos");  

// #### 9. El Comparador de Edad (function)

// Crea una función llamada `puedeVotar` que reciba una edad (número) 
// y retorne `true` si la persona tiene 18 años o más, y `false` en caso contrario.

// function puedeVotar(edad) {
  

// if (isNaN (edad)) {
//   return "Por favor ingrese su edad";
// }
// if (edad>=18) {
//   return true;
// } else {
//   return false;
// }
// }
// console.log(puedeVotar(20));
// console.log(puedeVotar(15));


// #### 10. El Calculador de Descuentos (function)

// Crea una función llamada `calcularPrecioFinal` que reciba 
// dos parámetros: `precioOriginal` y `porcentajeDescuento`. La función debe retornar
//  el precio final después de aplicar el descuento.

function calcularPrecioFinal(precioOriginal, porcentajeDescuento) {

  if (isNaN (precioOriginal) || isNaN(porcentajeDescuento)) {
    return "por faavor ingrese un precio valido"
  }

  let descuento = (precioOriginal * porcentajeDescuento) / 100;
  let precioFinal = precioOriginal - descuento;
  return precioFinal;

}

console.log("Precio final: $" + calcularPrecioFinal(1000, 15));
console.log("Precio final: $" + calcularPrecioFinal(500, 50));   