import { tabla, crearBotonesCategorias } from "../componentes/componentes/itemElemento/itemelemento.js";

function divtabla() {
    const contenedorPrincipal = document.createElement('div');
    contenedorPrincipal.className = 'sectiondetablas'; // Clase principal para contener tanto botones como tabla

    const contenedorTabla = document.createElement('div');
    contenedorTabla.className = 'contenedor-tabla'; // Contenedor específico para la tabla de elementos

    // Crear y agregar los botones de categorías al contenedor principal
    crearBotonesCategorias(contenedorPrincipal, contenedorTabla);

    // Mostrar la tabla por defecto (inicia con 'todo' para mostrar todos los elementos)
    contenedorTabla.appendChild(tabla('todo'));

    // Agregar el contenedor de la tabla al contenedor principal
    contenedorPrincipal.appendChild(contenedorTabla);

    return contenedorPrincipal;
}

export { divtabla };
