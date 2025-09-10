import { seleccion } from "../seleccion/seleccion.js";

function loginEditor() {
    let contenedorLogin = document.createElement('div');
    contenedorLogin.className = "pantalla-login3";

    let cajaLogin = document.createElement('div');
    cajaLogin.className = "contenedor-login3";

    let tituloLogin = document.createElement('h2');
    tituloLogin.textContent = "Login Editor";
    cajaLogin.appendChild(tituloLogin);

    let formulario = document.createElement('form');
    formulario.className = "formulario-login3";

    let inputUsuario = document.createElement('input');
    inputUsuario.type = "text";
    inputUsuario.placeholder = "Usuario";
    inputUsuario.className = "input-usuario3";
    formulario.appendChild(inputUsuario);

    let inputContrasena = document.createElement('input');
    inputContrasena.type = "password";
    inputContrasena.placeholder = "Contraseña";
    inputContrasena.className = "input-contrasena3";
    formulario.appendChild(inputContrasena);

    let botonIngresar = document.createElement('button');
    botonIngresar.type = "submit";
    botonIngresar.textContent = "Ingresar";
    botonIngresar.className = "boton-ingresar3";
    formulario.appendChild(botonIngresar);

    cajaLogin.appendChild(formulario);

    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "boton-volver3";
    cajaLogin.appendChild(botonVolver);

    contenedorLogin.appendChild(cajaLogin);


    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("Usuario:", inputUsuario.value, "Contraseña:", inputContrasena.value);
    });

    // Evento del botón volver
    botonVolver.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(seleccion()); 
    });

    return contenedorLogin;
}

export { loginEditor };
