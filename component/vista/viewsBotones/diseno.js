import { vista } from "../vista.js";

function diseño() {
    const datosCompras = [
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ ¡5-440 CPU @ 3.00GHz 3.00GHz RAM 12.00GB  ", codigo: "/", departamento: "DISEÑO", responsable: "Adriana Mazariegos " },
        { cantidad: 1, producto: "Monitor DELL", codigo: "/", departamento: "DISEÑO", responsable: "Adriana Mazariegos " },
        { cantidad: 1, producto: "Monitor DELL", codigo: "/", departamento: "DISEÑO", responsable: "Adriana Mazariegos " },
        { cantidad: 1, producto: "Mouse Inalambrico Logitech", codigo: "/", departamento: "DISEÑO", responsable: "Adriana Mazariegos " },
        { cantidad: 1, producto: "Boofer Genius", codigo: "/", departamento: "DISEÑO", responsable: "Adriana Mazariegos " },
        { cantidad: 1, producto: "Laptop Asus icore i7-1165/ Ram 16Gb / 475 GB Almacenamiento ", codigo: "/", departamento: "DISEÑO", responsable: "Adriana Mazariegos " },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "DISEÑO", responsable: "Adriana Mazariegos " },
        { cantidad: 1, producto: "Teclado Inalambrico", codigo: "/", departamento: "DISEÑO", responsable: "Ana Perez" },
    ];

    const section = document.createElement('section');
    section.className = "diseno-section";
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Diseño";
    section.appendChild(titulo);
    
    const table = document.createElement('table');
    table.className = "diseno-table";
    
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
    contVolver.className = "diseno-volver-container";
    section.appendChild(contVolver);
    
    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "diseno-btn-volver";
    contVolver.appendChild(botonVolver);
    
    section.appendChild(contVolver);
    
    botonVolver.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(vista()); 
    });

    return section;
}

export { diseño };
