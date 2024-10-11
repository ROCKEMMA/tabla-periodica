export function elementinfo(contenedor, contenedorTabla) {
    
    // Crear el div principal que contendrá los botones de categorías
    const divContenedorBotones = document.createElement("div");
    divContenedorBotones.className = 'contenedor-botones'; // Añadimos una clase para darle estilos

    // Crear el contenedor de botones
    const divBotones = document.createElement("div");
    divBotones.className = 'div-botones-categorias';

    // Crear botón para 'todo' que muestra todos los elementos
    const botonTodo = document.createElement("button");
    botonTodo.innerText = 'Todo';
    botonTodo.className = 'boton-categoria activo'; // Estilo para el botón 'Todo',
    botonTodo.addEventListener('click', () => {
        contenedorTabla.innerHTML = ''; // Limpiar la tabla
        contenedorTabla.appendChild(tabla('todo')); // Mostrar todos los elementos
        marcarBotonActivo(botonTodo); // Actualizar el botón activo
    });
    divBotones.appendChild(botonTodo);

    // Crear un botón para cada categoría
    const categorias = [...new Set(listatablaperiodica.map(e => e.categoria))];
    categorias.forEach(categoria => {
        const boton = document.createElement("button");
        boton.innerText = categoria;
        boton.className = 'boton-categoria';
        
        // Filtrar al hacer clic en el botón
        boton.addEventListener('click', () => {
            contenedorTabla.innerHTML = ''; // Limpiar la tabla
            contenedorTabla.appendChild(tabla(categoria.replace(/\s+/g, '-').toLowerCase())); // Mostrar todos los elementos con los que no coinciden en gris
            marcarBotonActivo(boton); // Actualizar el botón activo
        });
        divBotones.appendChild(boton);
    });

    // Agregar el contenedor de botones al div principal
    divContenedorBotones.appendChild(divBotones);

    // Finalmente, añadir el contenedor de botones al contenedor principal
    contenedor.appendChild(divContenedorBotones);
}
