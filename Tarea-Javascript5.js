// Ejercicio 1: El Transformador de Datos (map)
// Tienes una lista de temperaturas en grados Celsius. 
// Crea una función llamada convertirAFahrenheit que reciba este array 
// y devuelva un nuevo array con las temperaturas convertidas a Fahrenheit.
// Fórmula: (celsius * 9/5) + 32

// const tempCelsius= [0, 10, 20, 30, 40]

// const convFahrenheit = tempCelsius.map(grado=> (grado* 9/5)+32);
// console.log (convFahrenheit);


// Ejercicio 2: El Filtro de Seguridad (filter)
// Tienes un array de números que representan edades de personas.
// Crea una función llamada obtenerMayoresDeEdad que use .filter()
// para devolver un array solo con las edades que sean 18 o más.

// const listaEdades= [12, 18, 25, 10, 30, 15];
// const obtenerMayoresDeEdad= listaEdades.filter(edades => edades>=18);

// console.log (obtenerMayoresDeEdad);

// Ejercicio 3: El Buscador de Códigos (find)
// Tienes un array de strings que representan códigos de productos.
//  Crea una función llamada buscarProducto que reciba el array y un código específico. 
//  La función debe usar .find() para retornar el código si existe, o "No encontrado" si no está.

// const CodProductos= ["A10", "B20", "C30", "D40"];

// const buscarProducto = CodProductos.find(codigo =>codigo==="D40");
// console.log (buscarProducto);

// Ejercicio 4: El Acumulador Maestro (reduce)
// Tienes un array de números que representan las ventas del día.
// Crea una función llamada calcularTotalVentas 
// que use .reduce() para sumar todas las ventas y devolver el total.

// const ventaDeldia= [100, 250, 50, 300, 120];
// let calcularTotalVentas = ventaDeldia.reduce((suma, ventas)=>suma+ventas,0);

// console.log(calcularTotalVentas);



// Ejercicio 5: Gestión de Objetos (El "Inventario Simple")
// Crea un array llamado inventario que contenga 3 objetos. 
// Cada objeto debe representar un producto con las propiedades: nombre (string) y precio (number).

// Crea una función llamada listarPrecios que recorra el array
//  y retorne un nuevo array solo con los precios usando .map().

// Tip: Accede a la propiedad mediante producto.precio.

// const inventario=[
// {nombre:"lapiz",precio:10},
// {nombre:"corrector",precio:50},
// {nombre:"lapicera",precio:100}];
// const listarPrecios = inventario.map(producto =>(producto.precio));

// console.log (listarPrecios);


// Ejercicio 6: El Desafío Combinado (Integración)
// Tienes un array de objetos llamado estudiantes donde cada uno tiene nombre y nota.
// Usa .filter() para obtener solo los estudiantes que aprobaron (nota >= 6).
// A esos estudiantes aprobados, usa .map() para obtener solo sus nombres en un nuevo array.
// Imprime el resultado final.

const estudiantes = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Beto", nota: 4 },
  { nombre: "Carla", nota: 10 },
  { nombre: "David", nota: 5 }
];

const estudiantesAprobados= estudiantes.filter(aprobados =>(aprobados.nota>=6));
let listado= estudiantesAprobados.map(estudiantes => estudiantes.nombre);
console.log(listado)

