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

