// promesa

//const obtenerMascotas = new Promise((resolve, reject) => {
  //  const exito = true; // Simulación de si la operación sale bien

    //setTimeout(() => {
 //       if (exito) {
 //           resolve("Lista de mascotas cargada con éxito.");
 //       } else {
 //           reject("Error: No se pudo conectar con la base de datos.");
 //       }
 //   }, 2000); // Espera 2 segundos
//});

// Cómo usarla
//obtenerMascotas
//    .then((mensaje) => console.log(mensaje)) // Se ejecuta si es exitosa
//    .catch((error) => console.error(error));  // Se ejecuta si falla


// ---------------------------------------------
// uso fetch

// Pedimos información a una API pública
//fetch('https://jsonplaceholder.typicode.com/users/1')
//    .then(response => {
//        if (!response.ok) {
//            throw new Error("No se pudo obtener la información");
//        }
//        return response.json(); // Esto también devuelve una promesa
//    })
//    .then(usuario => {
//        console.log(`El usuario se llama: ${usuario.name}`);
//    })
//    .catch(error => {
//        console.log("Hubo un problema con la petición:", error.message);
//    });





