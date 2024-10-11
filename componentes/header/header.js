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

// Función para crear un elemento de lista (li) con su enlace (a)
function createListItem(text, href) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = href;
    a.textContent = text;
    li.appendChild(a);
    return li;
}

// Crear los elementos de la lista (li) y sus enlaces (a)
const li1 = createListItem('Compuestos Artificiales', '#');
const li2 = createListItem('Compuestos Naturales', '#');
const li3 = createListItem('Discord', '#');

// Agregar los elementos li a la ul
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

// Crear el enlace de GitHub y asignarle la clase
const githubLink = document.createElement('a');
githubLink.href = 'https://github.com/ROCKEMMA/tabla-periodica-estuardo';
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

// Exportar el header
export { header };
