import { seleccion } from "../seleccion/seleccion.js";
import { vista } from "./vista.js";

function loginVista() {
    let contenedorLogin = document.createElement('div');
    contenedorLogin.className = "pantalla-login2";

    let cajaLogin = document.createElement('div');
    cajaLogin.className = "contenedor-login2";

    let tituloLogin = document.createElement('h2');
    tituloLogin.textContent = "Login Vista";
    cajaLogin.appendChild(tituloLogin);

    let formulario = document.createElement('form');
    formulario.className = "formulario-login2";

    let inputUsuario = document.createElement('input');
    inputUsuario.type = "text";
    inputUsuario.placeholder = "Usuario";
    inputUsuario.className = "input-usuario2";
    formulario.appendChild(inputUsuario);

    let inputContrasena = document.createElement('input');
    inputContrasena.type = "password";
    inputContrasena.placeholder = "Contraseña";
    inputContrasena.className = "input-contrasena2";
    formulario.appendChild(inputContrasena);

    let botonIngresar = document.createElement('button');
    botonIngresar.type = "submit";
    botonIngresar.textContent = "Ingresar";
    botonIngresar.className = "boton-ingresar2";
    formulario.appendChild(botonIngresar);

    cajaLogin.appendChild(formulario);

    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "boton-volver2";
    cajaLogin.appendChild(botonVolver);

    contenedorLogin.appendChild(cajaLogin);


    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("Usuario:", inputUsuario.value, "Contraseña:", inputContrasena.value);
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(vista());
    });

    // Evento del botón volver
    botonVolver.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(seleccion()); 
    });

    return contenedorLogin;
}

export { loginVista };
