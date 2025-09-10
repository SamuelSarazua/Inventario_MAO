import { seleccion } from "../seleccion/seleccion.js";
import { admisiones } from "./viewsBotones/admisiones.js";
import { caja } from "./viewsBotones/caja.js";
import { compras } from "./viewsBotones/compras.js";
import { recepcion } from "./viewsBotones/recepcion.js";
import { recursosHumanos } from "./viewsBotones/recursos-humanos.js";
import { contabilidad } from "./viewsBotones/contabilidad.js";

function vista(){

    let seccionVista = document.createElement('section');
    seccionVista.className = "seccion-vista";
    
    let headerSele = document.createElement('header');
    headerSele.className = "header-sele";

    let titulo = document.createElement('h1');
    titulo.textContent = "Colegio Manos a la Obra";

    let contCerSes = document.createElement('div');
    contCerSes.className = "cont-volver-vista";
    headerSele.appendChild(contCerSes);

    let botonCerSes = document.createElement('button');
    botonCerSes.textContent = "Cerrar Sesión";
    botonCerSes.className = "boton-volver2";
    contCerSes.appendChild(botonCerSes);

    headerSele.appendChild(contCerSes);

    // Evento del botón volver
    botonCerSes.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(seleccion()); 
    });

    let logo = document.createElement('img');
    logo.src = "./img/logo.avif"

    headerSele.appendChild(titulo);
    headerSele.appendChild(logo)
    seccionVista.appendChild(headerSele);

    let divBotones = document.createElement('div')
    divBotones.className = "div-botones"

    let buttonAdmin = document.createElement('button');
    buttonAdmin.className = "admin"
    buttonAdmin.textContent = "Compras"
    divBotones.appendChild(buttonAdmin);
    buttonAdmin.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(compras()); 
    });

    let buttonAdmin2 = document.createElement('button');
    buttonAdmin2.className = "admin"
    buttonAdmin2.textContent = "Recursos Humanos"
    divBotones.appendChild(buttonAdmin2);
    buttonAdmin2.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(recursosHumanos()); 
    });

    let buttonAdmin3 = document.createElement('button');
    buttonAdmin3.className = "admin"
    buttonAdmin3.textContent = "Admisiones"
    divBotones.appendChild(buttonAdmin3);
    buttonAdmin3.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(admisiones()); 
    });

    let buttonAdmin4 = document.createElement('button');
    buttonAdmin4.className = "admin"
    buttonAdmin4.textContent = "Recepción"
    divBotones.appendChild(buttonAdmin4);
    buttonAdmin4.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(recepcion()); 
    });

    let buttonAdmin5 = document.createElement('button');
    buttonAdmin5.className = "admin"
    buttonAdmin5.textContent = "Caja"
    divBotones.appendChild(buttonAdmin5);
    buttonAdmin5.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(caja()); 
    });

    let buttonAdmin6 = document.createElement('button');
    buttonAdmin6.className = "admin"
    buttonAdmin6.textContent = "Contabilidad"
    divBotones.appendChild(buttonAdmin6);
    buttonAdmin6.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(contabilidad()); 
    });

    let buttonAdmin7 = document.createElement('button');
    buttonAdmin7.className = "admin"
    buttonAdmin7.textContent = "Coordinación Preprimaria"
    divBotones.appendChild(buttonAdmin7);

    let buttonAdmin8 = document.createElement('button');
    buttonAdmin8.className = "admin"
    buttonAdmin8.textContent = "Salones Preprimaria"
    divBotones.appendChild(buttonAdmin8);

    let buttonAdmin9 = document.createElement('button');
    buttonAdmin9.className = "admin"
    buttonAdmin9.textContent = "Secundaria 1"
    divBotones.appendChild(buttonAdmin9);

    let buttonAdmin10 = document.createElement('button');
    buttonAdmin10.className = "admin"
    buttonAdmin10.textContent = "Cordinación Secundaria"
    divBotones.appendChild(buttonAdmin10);

    let buttonAdmin11 = document.createElement('button');
    buttonAdmin11.className = "admin"
    buttonAdmin11.textContent = "Laboratorio 1 Progrentis"
    divBotones.appendChild(buttonAdmin11);

    let buttonAdmin12 = document.createElement('button');
    buttonAdmin12.className = "admin"
    buttonAdmin12.textContent = "Primaria Superior"
    divBotones.appendChild(buttonAdmin12);

    let buttonAdmin13 = document.createElement('button');
    buttonAdmin13.className = "admin"
    buttonAdmin13.textContent = "Laboratorio 2 Primaria"
    divBotones.appendChild(buttonAdmin13);

    let buttonAdmin14 = document.createElement('button');
    buttonAdmin14.className = "admin"
    buttonAdmin14.textContent = "Coordinación Primaria Elemental"
    divBotones.appendChild(buttonAdmin14);

    let buttonAdmin15 = document.createElement('button');
    buttonAdmin15.className = "admin"
    buttonAdmin15.textContent = "Salones Primaria Elemental"
    divBotones.appendChild(buttonAdmin15);

    let buttonAdmin16 = document.createElement('button');
    buttonAdmin16.className = "admin"
    buttonAdmin16.textContent = "Laboratorio de Secundaria"
    divBotones.appendChild(buttonAdmin16);

    let buttonAdmin17 = document.createElement('button');
    buttonAdmin17.className = "admin"
    buttonAdmin17.textContent = "Secundaria 2"
    divBotones.appendChild(buttonAdmin17);

    let buttonAdmin18 = document.createElement('button');
    buttonAdmin18.className = "admin"
    buttonAdmin18.textContent = "Carrito de iPad Secundaria"
    divBotones.appendChild(buttonAdmin18);

    let buttonAdmin19 = document.createElement('button');
    buttonAdmin19.className = "admin"
    buttonAdmin19.textContent = "Carrito de iPad Primaria Superior"
    divBotones.appendChild(buttonAdmin19);

    let buttonAdmin20 = document.createElement('button');
    buttonAdmin20.className = "admin"
    buttonAdmin20.textContent = "Carrito de iPad Primaria Elemental"
    divBotones.appendChild(buttonAdmin20);

    let buttonAdmin21 = document.createElement('button');
    buttonAdmin21.className = "admin"
    buttonAdmin21.textContent = "Carrito de iPad de Preprimaria"
    divBotones.appendChild(buttonAdmin21);

    let buttonAdmin22 = document.createElement('button');
    buttonAdmin22.className = "admin"
    buttonAdmin22.textContent = "Home School"
    divBotones.appendChild(buttonAdmin22);

    let buttonAdmin23 = document.createElement('button');
    buttonAdmin23.className = "admin"
    buttonAdmin23.textContent = "Gerencia financiera"
    divBotones.appendChild(buttonAdmin23);

    let buttonAdmin24 = document.createElement('button');
    buttonAdmin24.className = "admin"
    buttonAdmin24.textContent = "Dirección Técnica"
    divBotones.appendChild(buttonAdmin24);

    let buttonAdmin25 = document.createElement('button');
    buttonAdmin25.className = "admin"
    buttonAdmin25.textContent = "Enfermería"
    divBotones.appendChild(buttonAdmin25);

    let buttonAdmin26 = document.createElement('button');
    buttonAdmin26.className = "admin"
    buttonAdmin26.textContent = "PAE"
    divBotones.appendChild(buttonAdmin26);

    let buttonAdmin27 = document.createElement('button');
    buttonAdmin27.className = "admin"
    buttonAdmin27.textContent = "Coordinación Superior"
    divBotones.appendChild(buttonAdmin27);

    let buttonAdmin28 = document.createElement('button');
    buttonAdmin28.className = "admin"
    buttonAdmin28.textContent = "Dirección Técnica"
    divBotones.appendChild(buttonAdmin28);

    let buttonAdmin29 = document.createElement('button');
    buttonAdmin29.className = "admin"
    buttonAdmin29.textContent = "Diseño"
    divBotones.appendChild(buttonAdmin29);

    let buttonAdmin30 = document.createElement('button');
    buttonAdmin30.className = "admin"
    buttonAdmin30.textContent = "Coorinación de Eventos"
    divBotones.appendChild(buttonAdmin30);

    let buttonAdmin31 = document.createElement('button');
    buttonAdmin31.className = "admin"
    buttonAdmin31.textContent = "Asistente Administrativo"
    divBotones.appendChild(buttonAdmin31);

    seccionVista.appendChild(divBotones)

    return seccionVista;
}

export { vista }