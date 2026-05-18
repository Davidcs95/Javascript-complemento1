const contenedor = document.getElementById('contenedor');
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');


let pagina = 1;

const obtenerPersonajes = async () => {

  
    try {
        // funcion fetch trae una promesa y la esperamos con await
           const respuesta = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);
           const data = await respuesta.json();
          console.log(data.results);
         
          contenedor.innerHTML = '';
        
           
         
         

        
            data.results.forEach(personaje => {
            console.log(personaje.name);
            contenedor.innerHTML +=  `
            <div class="col-md-4 col-lg-3">
                <h2>${personaje.name}</h2>
                
                <div class="card h-50">
                <img
                alt="${personaje.name}"
                class="card-img-top"
                src="${personaje.image}"
                /> <div/>

                <div class="card body">
                    <p class="card-text">Especie: ${personaje.species}</p>
                    <p class="card-text">Genero: ${personaje.gender}</p>
                    <p class="card-text">Estado: ${personaje.status}</p>
                </div>
                    
                </div>
            </div>
            `;  
          });
    } catch (error) {
        console.error('Error al obtener los personajes:', error);
    }
};



siguiente.addEventListener('click', () => {
    if (pagina < 42) {  
    pagina++;
    obtenerPersonajes();
    }
});


anterior.addEventListener('click', () => {
    if (pagina > 1) {
        pagina--;
        obtenerPersonajes();
    }
});


obtenerPersonajes();






