
// ejemplo de push ()
const mascotas = ["gato", "perro", "ave"]
mascotas.push ("pez");
console.log(mascotas)


// ejemplo de pop ()
const adoptado = mascotas.pop();
console.log(`Se adoptó el: ${adoptado}`); // "Se adoptó el: Pez"
console.log(mascotas); // ["Perro", "Gato", "Ave"]


const buscarMascota = "hamster"

if (mascotas.includes(buscarMascota)) {
    console.log(`si,tenemos ${buscarMascota} disponible`);
    } else {
        console.log(`lo sentimos, no hay ${buscarMascota} en stock`);
    }
