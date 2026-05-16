const container = document.getElementById('contenedorR');

const obtenerId = async () => {
    try {
        const respuesta = await fetch('https://fakestoreapi.com/products');
        const data = await respuesta.json();
        console.log(data);
        container.innerHTML = '';

        data.forEach(Id => {
            console.log(Id.id);
            container.innerHTML += `
            <div class="col-md-4 col-lg-3">
                <h2>${Id.id}</h2>
                <div class="card h-50">
                <img
                alt="${Id.title}"
                class="card-img-top"
                src="${Id.image}"
                /> <div/>
            </div>
            `;
        });

    } catch (error) {
        console.error('Error al obtener los personajes:', error);
    }
};

obtenerId();