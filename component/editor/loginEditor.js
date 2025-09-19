import { seleccion } from "../seleccion/seleccion.js";
import { verificarLogin } from "../auth.js";
import { vista } from "../vista/vista.js";

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
    inputUsuario.required = true;
    formulario.appendChild(inputUsuario);

    let inputContrasena = document.createElement('input');
    inputContrasena.type = "password";
    inputContrasena.placeholder = "Contraseña";
    inputContrasena.className = "input-contrasena3";
    inputContrasena.required = true;
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

    // Mensaje de error
    let mensajeError = document.createElement('p');
    mensajeError.className = "mensaje-error";
    mensajeError.style.color = "red";
    mensajeError.style.display = "none";
    cajaLogin.appendChild(mensajeError);

    contenedorLogin.appendChild(cajaLogin);

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = inputUsuario.value.trim();
        const password = inputContrasena.value.trim();
        
        const usuario = verificarLogin(username, password);
        
        if (usuario && usuario.rol === "editor") {
            sessionStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
            const root = document.getElementById('root');
            root.innerHTML = ""; 
            root.appendChild(vista());
        } else {
            mensajeError.textContent = "Credenciales incorrectas o no tiene permisos de editor";
            mensajeError.style.display = "block";
        }
    });

    botonVolver.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(seleccion()); 
    });

    return contenedorLogin;
}

export { loginEditor };