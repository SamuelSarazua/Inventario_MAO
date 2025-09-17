import { seleccion } from "../seleccion/seleccion.js";

function admin() {
    const section = document.createElement('section');
    section.className = "admin-section";
    
    const titulo = document.createElement('h1');
    titulo.textContent = "Panel de Administración";
    section.appendChild(titulo);
    
    const mensaje = document.createElement('p');
    mensaje.textContent = "Bienvenido al panel de administración. Aquí puedes gestionar usuarios, permisos y configuraciones del sistema.";
    section.appendChild(mensaje);
    
    const botonVolver = document.createElement('button');
    botonVolver.textContent = "Cerrar Sesión";
    botonVolver.className = "boton-volver-admin";
    botonVolver.addEventListener('click', () => {
        sessionStorage.removeItem('usuarioLogueado');
        const root = document.getElementById('root');
        root.innerHTML = "";
        root.appendChild(seleccion());
    });
    section.appendChild(botonVolver);
    
    return section;
}

// Asegúrate de exportar la función como 'admin'
export { admin };