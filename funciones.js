// condicionales    
const verdad = true;
const mentira = false;  
const edad = prompt(`Ingrese su edad: `);
//const validacion = edad >= 18;

//console.log(`la validacion es: ${validacion}`);
if(isNaN(edad)) {
    alert(`Ingreso un valor que no es numero`);
    
}


 else {
    if(edad >= 18){
        console.log(`Es mayor de edad, puedes ingresar. Tienes ${edad} años, puedes ingresar` );
    } else {
        console.log(`No es mayor de edad, no puedes ingresar,  porque tienes ${edad} años  `);
    }   
}

console.log(`Su edad es: ${edad}`);



    
