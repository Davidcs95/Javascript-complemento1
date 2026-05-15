const contenedor2 = document.getElementById("contenedor2");

const obteneruserId = async () => {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await respuesta.json();
        data.forEach(user => {
            console.log(user.userId);
            contenedor2.innerHTML += `
            <div class="col-md-4 col-lg-3">
                <h2>${user.userId}</h2>
                <p>${user.title}</p>
            </div>
            ;`
        });
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
    }
};
        obteneruserId();