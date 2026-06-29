// 1-Consigna: Imagina que quieres ahorrar para un objetivo de $1000. El programa debe pedir al usuario que ingrese montos de ahorro diarios (en un prompt o variable) y los vaya sumando. El ciclo while debe ejecutarse mientras la suma total sea menor a $1000. Al llegar o superar el objetivo, imprime "¡Objetivo alcanzado!".

// Desafío lógico: ¿Qué pasa si el usuario ingresa un número negativo? Añade una validación para que no sume montos inválidos.

// Objetivo: Manejo de acumuladores con condiciones de salida basadas en metas.

// let ahorrodiario=0;
// const objetivo=1000;
// while (ahorrodiario<=objetivo) {
//     let ingreso= parseFloat( prompt(`lleva ahorrado 💰$${ahorrodiario}, Ingrese un monto para ahorrar`));
// if (isNaN (ingreso) || ingreso <=0 ){
//     alert ("ingresa un monto mayor a 0 ");
// } else {
//     ahorrodiario += ingreso;
// }
// }


// 2-El "Triángulo de Asteriscos" (Ciclo for anidado)
// Consigna: Utiliza dos bucles for (uno dentro de otro) para imprimir un triángulo de asteriscos en la consola con una altura de 5 líneas:

// Desafío lógico: El bucle externo controla las filas y el interno controla cuántos asteriscos imprimir en cada fila. 

// Objetivo: Dominar la complejidad de los bucles anidados, fundamental para entender estructuras de datos complejas en el futuro. 

// const altura=5;

// for (let fila=1; fila <= altura ; fila++ ) {
//  let   asteriscos="";

//  for (let columna = 1; columna <= fila; columna++){
//     asteriscos +="*";
//  }

//  console.log(asteriscos);
// }

// const password=5555;
// let intentos=1;
// let maxIntentos=3;

// let passUser= parseInt(prompt(`❗ Intentos:${intentos}/${maxIntentos}, 🔐 Ingrese su Token:`));


// while (passUser !== password && intentos < maxIntentos) {
//     alert("❌ Token incorrecto, intente de nuevo");
//     intentos++;  
//     passUser = parseInt(prompt(`❗ Intentos ${intentos}/${maxIntentos}, 🔐 Ingrese su Token:`));
// }
// if (passUser === password) {
//     alert("🔓 Acceso valido");
// } else {
//     alert("🚨 Cuenta bloqueada por seguridad.");
// }

// 4. Gestor de "Horas de Estudio" (Ciclo for)
// Contexto: Los estudiantes suelen organizar su semana para cumplir con el curso Fullstack.

// Consigna: Crea un programa donde el usuario ingrese cuántas horas dedicará a estudiar cada día de la semana (7 días). El programa debe usar un ciclo for para solicitar el dato 7 veces, ir sumando las horas en un acumulador y, al final, mostrar el promedio de horas diarias dedicadas al estudio.

// Desafío lógico: ¿Qué pasa si el usuario ingresa un valor negativo? El programa debe ignorar ese dato y pedir que ingrese un número mayor a 0.

// let totalHoras=0;
// let diaSemana=7;

// for (let dia= 1; dia <= diaSemana; dia++) {
//    let horas= parseFloat (prompt(`⏰Horas que llevas estudiando:${totalHoras},📅 Ingresá las horas de estudio para el dia${dia}:`));
   
//    while (isNaN(horas) || horas < 0) {
//       alert("❗ingresar un número mayor o igual a 0");
//       horas = parseFloat(prompt(`📅 Ingresá las horas para el Día ${dia}:`));
//    }
//    totalHoras += horas;
// }
// let promedio= totalHoras / diaSemana;
// alert(`Tiempor que estudiaste en la semana 👨‍🎓!\nTotal estudiado: ${totalHoras} hs.\nPromedio diario: ${promedio.toFixed(1)} hs.`);

// 5. Simulador de "Carrito de Descuentos Progresivos" (Ciclo while)
// Contexto: Muchas tiendas online aplican descuentos que dependen de la cantidad de productos en el carrito.

// Consigna: El usuario comienza con un producto. El programa debe preguntar el precio de cada producto y sumarlo. El ciclo while continuará pidiendo productos mientras el usuario escriba "si" para agregar otro. Si el total supera los $5000, el sistema debe imprimir: "¡Has obtenido un 10% de descuento!".

// Desafío lógico: Debes llevar un control del total acumulado en cada iteración y aplicar el descuento solo una vez al final, antes de imprimir el resultado.

let total=0;
let respuesta="si";

while (respuesta == "si") {
    let precio= parseFloat(prompt("💲Ingrese el precio del producto:"));

         total = total + precio;
    
    respuesta = prompt("🤖¿quiere agregar otro producto? (si / no)");
}

if (total > 5000) {
    let descuento=total * 0.10; 
    let totalConDescuento=total - descuento;
    alert("👌tenes un 10% de descuento!");
    alert("💸total final a pagar: $" + totalConDescuento);
} else {
    alert("💸total a pagar: $" + total);
}