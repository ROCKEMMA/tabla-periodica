import { tabla } from "../componentes/componentes/itemElemento/itemelemento.js";

function divtabla() {
    const tablabase = document.createElement('div');
    tablabase.className = `sectiondetablas`; 

    tablabase.appendChild(tabla());

    return tablabase;
}

export { divtabla };
