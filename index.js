// Código que le pida al usuario su edad y si es mayor de edad, le pregunte su nombre y apellido y lo salude en el DOM
// si no, le ponga en el DOM, "¡Lo siento, no eres mayor de edad!"

let edadUsuario = prompt("Por favor, ingrese su edad");
Number(edadUsuario);

if (edadUsuario >= 18) {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    document.write("Hola, " + nombre + " " + apellido)
} else {
    document.write("¡Lo siento, no eres mayor de edad!");
}

// Solicitar al usuario 3 calificaciones con un formulario de 3 input y un botón de enviar y sacar el promedio del usuario, 
// si es mayor a 8 mostrarle en el DOM ¡Felicidades, lo lograste!, si no ¡Sigue estudiando!

// function promedio() {

//     const calificacion1 = parseFloat(document.getElementById('calificacion1').value);
//     const calificacion2 = parseFloat(document.getElementById('calificacion2').value);
//     const calificacion3 = parseFloat(document.getElementById('calificacion3').value);

//     const promedio = (calificacion1 + calificacion2 + calificacion3) / 3;

//     const resultadoContenedor = document.getElementById('resultado');
//     if (promedio <= 10) {
//         if (promedio >= 8) {
//             resultadoContenedor.textContent += '¡Felicidades, lo lograste!'; 
//         } else {
//             resultadoContenedor.textContent += '¡Lo siento, tienes ordinario!';
//         }
//     } else {
//         resultadoContenedor.textContent = 'Por favor, ingresa calificaciones válidas.';
//     }
// }
    