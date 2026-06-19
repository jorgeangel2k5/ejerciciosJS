
/*
let numero1 = parseInt(prompt("Ingrese el primer numero:"));
let numero2 = parseInt(prompt("Ingrese el segundo numero:"));

if(numero1>numero2){
    console.log("El primer numero es mayor que el segundo")
}else if(numero2>numero1){
    console.log("El segundo numero es mayor que el primero")
}else{
   console.log("ambos numeros son iguales") 
}

*/
/*
let nota1 = parseFloat(prompt("Ingrese la primer nota:"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
let nota3 = parseFloat(prompt("Ingrese la tercer nota:"));

let promedio= (nota1+nota2+nota3)/3

console.log ("su promedio es:"+ promedio);

if (promedio>=6) {
  console.log("Su promedio es mayor a 6, aprobó la materia")
} else { console.log("Su promedio no llega a 6, debe recuperar")
}

*/

let numero1 = parseFloat(prompt("Ingrese el primer numero:"));
let numero2 = parseFloat(prompt("Ingrese el segundo numero:"));
let operacion= prompt("ingrese el tipo de operacion a realizar: suma, resta, division, multiplicacion");


if (operacion==="suma") { 
    console.log(numero1+numero2)
} else if (operacion==="resta") {
    console.log(numero1-numero2)
} else if (operacion==="division") {
    console.log(numero1/numero2)
} else if (operacion==="multiplicacion") {
    console.log(numero1*numero2)
} else {
    console.log("operacion no valida")
}
