import { header } from "./componentes/header/header.js";
import { divtabla } from "./controller/cargarelemento.js";
import { informacion } from "./componet/informacion.js";

const vinculo = document.querySelector(".root");

vinculo.appendChild(header)

vinculo.appendChild(divtabla())

vinculo.appendChild(informacion())

