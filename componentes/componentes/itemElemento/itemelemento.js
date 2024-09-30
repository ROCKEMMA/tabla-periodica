import { listatablaperiodica } from "../../../assets/listElemetos.js";

export function tabla() {
    const tablabase = document.createElement("div");
    tablabase.className = 'tablabase';

    listatablaperiodica.forEach((elemento) => {
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

        // Agrega la tarjeta a la tabla
        tablabase.appendChild(tajet_element);
    });

    return tablabase;
}

