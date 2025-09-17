import { vista } from "../vista.js";

function direTecnica2() {
    const datosCompras = [
        { cantidad: 1, producto: "Core i5-11/ 8 Ram / 476GB almacenamiento / HP", codigo: "/", departamento: "DIRECCIÓN TÉCNICA", responsable: "Miss Jessica Manzia" },
        { cantidad: 1, producto: "Teléfono Extensión", codigo: "112", departamento: "DIRECCIÓN TÉCNICA", responsable: "Adriana Mazariegos " },
        { cantidad: 1, producto: "Radio", codigo: "112", departamento: "DIRECCIÓN TÉCNICA", responsable: "Adriana Mazariegos " },
    ];

    const section = document.createElement('section');
    section.className = "direccion-tecnica2-section";
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Dirección Técnica 2";
    section.appendChild(titulo);
    
    const table = document.createElement('table');
    table.className = "direccion-tecnica2-table";
    
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
    contVolver.className = "direccion-tecnica2-volver-container";
    section.appendChild(contVolver);
    
    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "direccion-tecnica2-btn-volver";
    contVolver.appendChild(botonVolver);
    
    section.appendChild(contVolver);
    
    botonVolver.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(vista()); 
    });

    return section;
}

export { direTecnica2 };
