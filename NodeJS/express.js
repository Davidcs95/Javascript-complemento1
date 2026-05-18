// Express.js es una librería/framework de Node.js que sirve para crear servidores web y APIs de manera mucho más fácil.
//Sin Express, crear un servidor en Node.js puro es más complicado y largo. Express simplifica muchísimo el trabajo.
// Para instalar Express, primero debes tener Node.js y npm instalados. Luego, puedes usar el siguiente comando en tu terminal:
// npm install express

// ¿Para qué sirve Express?
// Express sirve para crear aplicaciones web y APIs de manera rápida y sencilla, gracias a su enfoque minimalista y flexible. Sistemas de login. Servidores HTTP
const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("Hola mundo");
    });
    app.listen(3000, () => {
         console.log("Servidor iniciado");
});