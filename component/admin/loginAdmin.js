import { seleccion } from "../seleccion/seleccion.js";

function loginAdmin() {
    let contenedorLogin = document.createElement('div');
    contenedorLogin.className = "pantalla-login";

    let cajaLogin = document.createElement('div');
    cajaLogin.className = "contenedor-login";

    let tituloLogin = document.createElement('h2');
    tituloLogin.textContent = "Login Administrador";
    cajaLogin.appendChild(tituloLogin);

    let formulario = document.createElement('form');
    formulario.className = "formulario-login";

    let inputUsuario = document.createElement('input');
    inputUsuario.type = "text";
    inputUsuario.placeholder = "Usuario";
    inputUsuario.className = "input-usuario";
    formulario.appendChild(inputUsuario);

    let inputContrasena = document.createElement('input');
    inputContrasena.type = "password";
    inputContrasena.placeholder = "Contraseña";
    inputContrasena.className = "input-contrasena";
    formulario.appendChild(inputContrasena);

    let botonIngresar = document.createElement('button');
    botonIngresar.type = "submit";
    botonIngresar.textContent = "Ingresar";
    botonIngresar.className = "boton-ingresar";
    formulario.appendChild(botonIngresar);

    cajaLogin.appendChild(formulario);

    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "boton-volver";
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

export { loginAdmin };
