



// 77 Ejemplo para &&

 const edad1 = prompt("Ingresa tu edad:");
 const tieneEntrada1 =  confirm("¿Tienes entrada?");

if (edad1 >= 18 && tieneEntrada1) {
    console.log(`Cumples con los requisitos, Tu edad es: ${edad1} años y tienes entrada`);
} else {
    console.log(`No cumples con los requisitos, Tu edad es: ${edad1} años  y ${tieneEntrada1 ? "tienes entrada" : "no tienes entrada"}  `);
}

