import { divinfoelement } from "../componentes/componentes/itemElemento/itemelemento.js";

// Función que solo retorna el contenedor de información
function informacion() {
    const contenedorinformacion = document.createElement('div');
    contenedorinformacion.className = 'continformacion'; // Clase principal para contener la información

    // Llamar a la función divinfoelement para crear el div elementinfo y agregarlo al contenedor
    const elementInfoDiv = divinfoelement();

    // Agregar el div de información al contenedor principal
    contenedorinformacion.appendChild(elementInfoDiv);

    return contenedorinformacion; // Retornar solo el contenedor de información
}

export { informacion };
