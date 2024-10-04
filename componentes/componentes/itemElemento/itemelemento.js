import { listatablaperiodica } from "../../../assets/listElemetos.js";

export function tabla(categoriaSeleccionada = 'todo') {
    const tablabase = document.createElement("div");
    tablabase.className = 'tablabase';

    // Filtrar los elementos de la tabla periódica según la categoría seleccionada
    const elementosFiltrados = categoriaSeleccionada === 'todo'
        ? listatablaperiodica // Mostrar todos si la categoría es 'todo'
        : listatablaperiodica.filter(elemento => 
            elemento.categoria.replace(/\s+/g, '-').toLowerCase() === categoriaSeleccionada
        );

    // Crear y agregar tarjetas a la tabla base
    elementosFiltrados.forEach((elemento) => {
        const tajet_element = document.createElement("div");
        
        // Asigna la clase según la categoría
        tajet_element.className = `tarjeta ${elemento.categoria.replace(/\s+/g, '-').toLowerCase()}`; // Remplaza espacios por guiones y convierte a minúsculas

        // Inserta el contenido HTML
        tajet_element.innerHTML = `
            <div class="info-div-tarjet">
                <div class="numero-atómico">${elemento.numeroAtomico}</div>
                <div class="simbolo-quimico">${elemento.simboloQuimico}</div>
                <div class="nombre-elemento">${elemento.nombre}</div>
                <div class="masa-atomica">${elemento.masaAtomica}</div>
            </div>
        `;

        // Crea el separador o espacio entre tarjetas
        const espaciob = document.createElement("div");
        espaciob.className = `espaciob1`;

        const espaciob2 = document.createElement("div");
        espaciob2.className = `espaciob2`;

        // Agrega la tarjeta y el separador a la tabla
        tablabase.appendChild(tajet_element);
        tablabase.appendChild(espaciob);      
        tablabase.appendChild(espaciob2); 
    });

    return tablabase;
}

// Menu Filtro
export function crearBotonesCategorias(contenedor, contenedorTabla) {
    
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
            contenedorTabla.appendChild(tabla(categoria.replace(/\s+/g, '-').toLowerCase())); // Mostrar solo los elementos de la categoría seleccionada
            marcarBotonActivo(boton); // Actualizar el botón activo
        });
        divBotones.appendChild(boton);
    });

    // Agregar el contenedor de botones al div principal
    divContenedorBotones.appendChild(divBotones);

    // Finalmente, añadir el contenedor de botones al contenedor principal
    contenedor.appendChild(divContenedorBotones);
}

// Función para actualizar el botón activo visualmente
function marcarBotonActivo(boton) {
    const botones = document.querySelectorAll('.boton-categoria');
    botones.forEach(btn => btn.classList.remove('activo')); // Remover la clase 'activo' de todos los botones
    boton.classList.add('activo'); // Añadir la clase 'activo' al botón clicado
}