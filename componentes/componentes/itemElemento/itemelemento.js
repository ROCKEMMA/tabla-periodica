import { listatablaperiodica } from "../../../assets/listElemetos.js";
import { compuestosArtificiales } from "../../../assets/listArtificiales.js";
import { compuestosNaturales } from "../../../assets/listNaturales.js";
export function tabla(categoriaSeleccionada = 'todo') {
    const tablabase = document.createElement("div");
    tablabase.className = 'tablabase';

    // Crear un div para mostrar los detalles del elemento seleccionado
    const elementDetails = document.createElement("div");
    elementDetails.className = 'element-details';
    elementDetails.style.marginTop = '20px';
    tablabase.appendChild(elementDetails); // Añadir el div de detalles a la tabla

    // Mostrar todos los elementos de la tabla periódica
    listatablaperiodica.forEach((elemento) => {
        const tajet_element = document.createElement("div");
        
        // Asigna la clase según la categoría
        tajet_element.className = `tarjeta ${elemento.categoria.replace(/\s+/g, '-').toLowerCase()}`; // Remplaza espacios por guiones y convierte a minúsculas
        
        // Si la categoría del elemento no es la seleccionada, aplicar clase 'gris'
        if (categoriaSeleccionada !== 'todo' && elemento.categoria.replace(/\s+/g, '-').toLowerCase() !== categoriaSeleccionada) {
            tajet_element.classList.add('gris'); // Clase para dar estilo gris a los elementos no seleccionados
        }

        // Inserta el contenido HTML
        tajet_element.innerHTML = `
            <div class="info-div-tarjet">
                <div class="numero-atómico">${elemento.numeroAtomico}</div>
                <div class="simbolo-quimico">${elemento.simboloQuimico}</div>
                <div class="nombre-elemento">${elemento.nombre}</div>
                <div class="masa-atomica">${elemento.masaAtomica}</div>
            </div>
        `;

        // Agregar el evento de clic a la tarjeta
        tajet_element.addEventListener('click', () => {
            // Limpiar el contenido anterior y añadir la nueva información
            elementDetails.innerHTML = ''; // Limpiar contenido anterior
            const infoDiv = divinfoelement(elemento); // Llamar a la función para crear el div con información
            elementDetails.appendChild(infoDiv); // Añadir el div de información al div de detalles
        });

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

// Función para mostrar compuestos artificiales
function mostrarCompuestosArtificiales(contenedorTabla) {
    // Limpiar el contenedor de la tabla
    contenedorTabla.innerHTML = '';

    // Iterar sobre cada compuesto artificial y crear su tarjeta
    compuestosArtificiales.forEach((compuesto) => {
        const tarjetaCompuesto = document.createElement("div");
        tarjetaCompuesto.className = `tarjeta-compuesto ${compuesto.categoria.replace(/\s+/g, '-').toLowerCase()}`;

        // Añadir el contenido de la tarjeta
        tarjetaCompuesto.innerHTML = `
            <div class="info-div-compuesto">
                <div class="nombre-compuesto"><strong>Nombre:</strong> ${compuesto.nombre} (${compuesto.simbolo})</div>
                <div class="formula-quimica"><strong>Fórmula Química:</strong> ${compuesto.formulaQuimica}</div>
            </div>
        `;

        // Agregar la tarjeta al contenedor
        contenedorTabla.appendChild(tarjetaCompuesto);
    });
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

// Función para actualizar el botón activo visualmente
function marcarBotonActivo(boton) {
    const botones = document.querySelectorAll('.boton-categoria');
    botones.forEach(btn => btn.classList.remove('activo')); // Remover la clase 'activo' de todos los botones
    boton.classList.add('activo'); // Añadir la clase 'activo' al botón clicado
}

// Evento de clic en el enlace de "Compuestos Artificiales"
const li1 = document.querySelector('.logo + nav ul li:nth-child(1) a'); // Ajusta el selector si es necesario

li1.addEventListener('click', (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

    const contenedorTabla = document.querySelector('.tablabase'); // Asegúrate de seleccionar el contenedor correcto
    mostrarCompuestosArtificiales(contenedorTabla); // Llamar a la función para mostrar los compuestos artificiales
});

/* Mostrar información al presionar elemento */
export function divinfoelement(element) {
    // Crear el div principal elementInfo
    const elementInfo = document.createElement("div");
    elementInfo.className = 'elementinfo'; // Asignar clase

    // Crear la mini tarjeta
    const miniTarjeta = document.createElement("div");
    miniTarjeta.className = 'mini-tarjeta'; // Asignar clase para la mini tarjeta

    // Añadir contenido a la mini tarjeta
    miniTarjeta.innerHTML = `
        <div class="info-div-tarjeta">
            <div class="simbolo-quimico">${element.simboloQuimico}</div>
        </div>
    `;

    // Añadir contenido con la información del elemento
    elementInfo.innerHTML = `
        <h3 class="detalleselemento">Detalles del Elemento</h3>
        <p class="nombreelemento" ><strong>Nombre:</strong> ${element.nombre} (${element.simboloQuimico})</p>
        <p class="nombreatomico"><strong>Número Atómico:</strong> ${element.numeroAtomico}</p>
        <p class="nombremasa"><strong>Masa Atómica:</strong> ${element.masaAtomica}</p>
        <p class="nombreconfiguracion"><strong>Configuración Electrónica:</strong> ${element.configuracionElectronica}</p>
        <p class="nombrevalencia"><strong>Número de Valencia:</strong> ${element.numerodevalencia.length > 0 ? element.numerodevalencia.join(", ") : "N/A"}</p>
        <p class="nombrecategoria"><strong>Categoría:</strong> ${element.categoria}</p>
    `;

    // Agregar la mini tarjeta al div de información
    elementInfo.appendChild(miniTarjeta);

    return elementInfo;
}

function mostrarCompuestosNaturales(contenedorTabla) {
    // Limpiar el contenedor de la tabla
    contenedorTabla.innerHTML = ''; 

    // Iterar sobre cada compuesto natural y crear su tarjeta
    compuestosNaturales.forEach((compuesto) => {
        const tarjetaCompuesto = document.createElement("div");
        tarjetaCompuesto.className = `tarjeta-compuesto ${compuesto.categoria.replace(/\s+/g, '-').toLowerCase()}`;

        // Añadir el contenido de la tarjeta
        tarjetaCompuesto.innerHTML = `
            <div class="info-div-compuesto">
                <div class="nombre-compuesto"><strong>Nombre:</strong> ${compuesto.nombre} (${compuesto.simbolo})</div>
                <div class="formula-quimica"><strong>Fórmula Química:</strong> ${compuesto.formulaQuimica}</div>
            </div>
        `;

        // Agregar la tarjeta al contenedor
        contenedorTabla.appendChild(tarjetaCompuesto);
    });
}

// Evento de clic en el enlace de "Compuestos Naturales"
const li2 = document.querySelector('.logo + nav ul li:nth-child(2) a'); // Ajusta el selector si es necesario

li2.addEventListener('click', (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

    const contenedorTabla = document.querySelector('.tablabase'); // Asegúrate de seleccionar el contenedor correcto
    mostrarCompuestosNaturales(contenedorTabla); // Llamar a la función para mostrar los compuestos naturales
});
