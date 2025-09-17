import { vista } from "../vista.js";

function administrativo() {
    const datosCompras = [
        { cantidad: 1, producto: "Radio", codigo: "/", departamento: "ASISTENTE ADMINISTRATITVO", responsable: "Javier Estrada" },
        { cantidad: 1, producto: "Televisión", codigo: "/", departamento: "ORIENTACION ADMINISTRATIVO", responsable: "" },
    ];

    const section = document.createElement('section');
    section.className = "asistente-admin-section";
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Asistente Administrativo";
    section.appendChild(titulo);
    
    const table = document.createElement('table');
    table.className = "asistente-admin-table";
    
    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');
    ["Cantidad", "Producto", "Código", "Departamento", "Responsable"].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        trHead.appendChild(th);
    });
    thead.appendChild(trHead);
    table.appendChild(thead);
    
    const tbody = document.createElement('tbody');
    datosCompras.forEach(item => {
        const tr = document.createElement('tr');
    
        const tdCantidad = document.createElement('td');
        tdCantidad.textContent = item.cantidad;
        tr.appendChild(tdCantidad);
    
        const tdProducto = document.createElement('td');
        tdProducto.textContent = item.producto;
        tr.appendChild(tdProducto);
    
        const tdCodigo = document.createElement('td');
        tdCodigo.textContent = item.codigo;
        tr.appendChild(tdCodigo);
    
        const tdDepartamento = document.createElement('td');
        tdDepartamento.textContent = item.departamento;
        tr.appendChild(tdDepartamento);
    
        const tdResponsable = document.createElement('td');
        tdResponsable.textContent = item.responsable;
        tr.appendChild(tdResponsable);
    
        tbody.appendChild(tr);
    });
    
    table.appendChild(tbody);
    section.appendChild(table);
    
    let contVolver = document.createElement('div');
    contVolver.className = "asistente-admin-volver-container";
    section.appendChild(contVolver);
    
    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "asistente-admin-btn-volver";
    contVolver.appendChild(botonVolver);
    
    section.appendChild(contVolver);
    
    botonVolver.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(vista()); 
    });

    return section;
}

export { administrativo };
