import { loginAdmin } from "../admin/loginAdmin.js";
import { loginEditor } from "../editor/loginEditor.js";
import { loginVista } from "../vista/loginVista.js";

function seleccion(){
    let seccionSele = document.createElement('section');
    seccionSele.className = "section-sele";

    let headerSele = document.createElement('header');
    headerSele.className = "header-sele";

    let titulo = document.createElement('h1');
    titulo.textContent = "Colegio Manos a la Obra";

    let logo = document.createElement('img');
    logo.src = "./img/logo.avif"

    headerSele.appendChild(titulo);
    headerSele.appendChild(logo)
    seccionSele.appendChild(headerSele);

    let divBotones = document.createElement('div')
    divBotones.className = "div-botones-main"

    let buttonAdmin = document.createElement('button');
    buttonAdmin.className = "admin"
    buttonAdmin.textContent = "Administracion"
    divBotones.appendChild(buttonAdmin);

    const root = document.getElementById('root');
    root.appendChild(divBotones);

    // Evento click en Administracion
    buttonAdmin.addEventListener('click', () => {
        root.innerHTML = ""; 
        root.appendChild(loginAdmin()); 
    });

    let buttonEditor = document.createElement('button');
    buttonEditor.className = "editor"
    buttonEditor.textContent = "Editor"
    divBotones.appendChild(buttonEditor);

    buttonEditor.addEventListener('click', () => {
        root.innerHTML = ""; 
        root.appendChild(loginEditor()); 
    });

    let buttonView = document.createElement('button');
    buttonView.className = "view"
    buttonView.textContent = "Vista"
    divBotones.appendChild(buttonView);

    buttonView.addEventListener('click', () => {
        root.innerHTML = ""; 
        root.appendChild(loginVista()); 
    });

    seccionSele.appendChild(divBotones)

    return seccionSele;
}

export { seleccion }