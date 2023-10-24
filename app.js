"use strict"
// Declarar variables en JS
// var variable global
// let variable 
// const constante
// let y const nacen porque son variables alcance o scope, se delimita con {}

// let edad = prompt('Dame tu edad');
// Number(edad);
// let edadmenos = edad - 5;
// console.log(edad + 5);
// console.log(typeof(edad +5))
// document.write(nombre);

// Tipos de datos

// let texto = 'Mi nombre es evelyn "otro texto"';
// let numero = 4;

// Tipos de datos primitivos
// String(numero);
// Number(numero) (float o integer) entero o decimal
// Boolean (true or false);
// Fecha

// let suma = true;

// let menor = (10==='10');
// console.log(menor);

// let fecha = new Date()

// Operadores aritmeticos

// let suma = 1+2;
// let resta = 1-2;
// let multiplicacion = 1*2;
// let division = 1/2;
// let mod = 10 % 5; //Residuo

// let uno = 1;
// uno ++;
// console.log(uno); //incremento en uno

// let dos = 2;
// dos --;
// console.log(dos); //decremento en uno

// // Operadores relacionales

// let mayor = 5>3;
// let menor = 3<5;
// let mayorigualque = 20>=10;
// let menorigualque = 20<=10;
// let igual = 10=='10';
// let exactamenteigual = 10===10;
// let diferente = 10 != 30;
// console.log(diferente);

// Tipos de datos especiales o compuestos

// Array - vectores o conjunto de datos y pueden ser diferente tipo, 
let frutas = ['pera', 'manzana', 'platano',null];
let numeros = ['cinco', 6, 23, 'veinte'];


// Objetos
let persona = {nombre: 'evelyn', edad: 18, correo: "epulido3@ucol.mx"};

// objeto JSON(JavaScript Object Notation): Formato de intercambio de datos ligero y descriptivo 

let personas = [
    {nombre: 'evelyn', edad: 18, correo: "epulido3"},
    {nombre: 'luis', edad: 20, correo: "ramirez_luis"},
    {nombre: 'heriberto', edad: 22, correo: "ochoa_herberto"},
    persona,
]

// Destructuración: descompner el objeto en piezas y sacar los datos que necesitamos
// API servicio de backend que da información de un tipo 
// fetch api

// Operadores lógicos o booleans (true or false)

let numero1 = 10;
let numero2 = 14;

// AND o Y
// Para que un AND tenga resultado true, todas las condiciones se deben cumplir o ser verdaderas, si una es falsa el resultado será false
let and = (numero1 >10 && numero2 >10);

// OR o O
// Se debe de cumplir una sola condición para que aparezca true, si todas son falsas será false
let or = (numero1 >10 || numero2 >10);

// Not o Negación
let negacion = !(numero1 > 10);




