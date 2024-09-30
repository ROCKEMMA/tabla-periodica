import { header } from "./componentes/header/header.js";
import { divtabla } from "./controller/cargarelemento.js";


const vinculo = document.querySelector(".root");

vinculo.appendChild(header)

vinculo.appendChild(divtabla())
