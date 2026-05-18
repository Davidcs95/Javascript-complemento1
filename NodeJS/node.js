//Node.js es un entorno de ejecución de código abierto que permite ejecutar código JavaScript fuera del navegador web entorno de ejecución de código abierto que permite ejecutar código JavaScript fuera del navegador web. Esto significa que puedes usar JavaScript para construir el "backend" (el servidor, las bases de datos y la lógica de la aplicación) en lugar de limitarlo únicamente al diseño visual en el navegador.addEventListenerlk
// ¿Cómo funciona? Motor V8 de Google: Node.js utiliza el mismo motor de JavaScript rápido y potente que usa Google Chrome.
// Asíncrono y no bloqueante: Puede manejar miles de conexiones simultáneas rápidamente sin bloquear el proceso principal.
// NPM npm (Node Package Manager): Es el gestor de paquetes de Node.js, una herramienta que te permite instalar, compartir y administrar fácilmente miles de bibliotecas de código abierto creadas por la comunidad.
// ¿Para qué se utiliza? Servidores web y APIs: Es ideal para crear servidores rápidos y escalables que comuniquen tus aplicaciones web o móviles con bases de datos.
// ¿Dónde se utiliza? Empresas como Netflix, Uber, PayPal y LinkedIn utilizan Node.js para construir sus aplicaciones web y servicios backend debido a su rendimiento y escalabilidad. Crear servidores capaces de procesar millones de peticiones por segundo sin sobrecargar la memoria.


// Idea simple
//HTML/CSS/JavaScript en navegador → interfaz visual.
//Node.js → lógica del servidor y procesos del sistema.
// Backend guardar usuarios
//validar contraseñas
//enviar datos
//hablar con la base de datos

//Ejemplo sencillo

let a = 5;
let b = 10;
let suma = a + b;
console.log("La suma es: " + suma);

let nombre = "David";
console.log("Hola, " + nombre + "! Bienvenido a Node.js.");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const http = require("http");

const servidor = http.createServer((req, res) => {
    res.end("Hola desde mi servidor");
});

servidor.listen(3000);

console.log("Servidor encendido");