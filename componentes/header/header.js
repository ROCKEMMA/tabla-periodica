// Crear el elemento header
let header = document.createElement('header');

// Crear el contenedor del logo
const logoDiv = document.createElement('div');
logoDiv.className = 'logo';

// Crear el span dentro del logo y agregar el texto
const logoText = document.createElement('span');
logoText.textContent = 'Tabla Periódica 2024';

// Agregar el span al div del logo
logoDiv.appendChild(logoText);

// Crear el elemento nav
const nav = document.createElement('nav');

// Crear la lista desordenada (ul)
const ul = document.createElement('ul');

// Crear los elementos de la lista (li) y sus enlaces (a)
const li1 = document.createElement('li');
const a1 = document.createElement('a');
a1.href = '#';
a1.textContent = 'Repositorio';
li1.appendChild(a1);

const li2 = document.createElement('li');
const a2 = document.createElement('a');
a2.href = '#';
a2.textContent = 'Integrantes';
li2.appendChild(a2);

const li3 = document.createElement('li');
const a3 = document.createElement('a');
a3.href = '#';
a3.textContent = 'Discord';
li3.appendChild(a3);

// Agregar los elementos li a la ul
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

// Crear el enlace de GitHub y asignarle la clase
const githubLink = document.createElement('a');
githubLink.href = '#';
githubLink.className = 'github-btn';
githubLink.textContent = 'GitHub';

// Agregar el enlace de GitHub a la ul
ul.appendChild(githubLink);

// Agregar la ul al nav
nav.appendChild(ul);

// Agregar el logo y el nav al header
header.appendChild(logoDiv);
header.appendChild(nav);

// Agregar el header al body del documento
document.body.appendChild(header);

export{header}