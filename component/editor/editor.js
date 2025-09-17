import { seleccion } from "../seleccion/seleccion.js";

function editor() {
    const section = document.createElement('section');
    section.className = "editor-section";
    
    const titulo = document.createElement('h1');
    titulo.textContent = "Panel de Editor";
    section.appendChild(titulo);
    
    const mensaje = document.createElement('p');
    mensaje.textContent = "Bienvenido al panel de editor. Aquí puedes editar y gestionar contenido del sistema.";
    section.appendChild(mensaje);
    
    const botonVolver = document.createElement('button');
    botonVolver.textContent = "Cerrar Sesión";
    botonVolver.className = "boton-volver-editor";
    botonVolver.addEventListener('click', () => {
        sessionStorage.removeItem('usuarioLogueado');
        const root = document.getElementById('root');
        root.innerHTML = "";
        root.appendChild(seleccion());
    });
    section.appendChild(botonVolver);
    
    return section;
}

// Asegúrate de exportar la función como 'editor'
export { editor };