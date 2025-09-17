import { vista } from "../vista.js";

function coordiPrepi() {
    const datosCompras = [
        { cantidad: 1, producto: "Cpu INTEL ® CELERON ® G 6900 3.40 GHZ 3.40GHZ RAM 8.00GB", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "MARILYN GOMEZ" },
        { cantidad: 1, producto: "Teclado Logitech", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "MARILYN GOMEZ" },
        { cantidad: 1, producto: "Mouse Logitech", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "MARILYN GOMEZ" },
        { cantidad: 1, producto: "Monitor Brocs", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "MARILYN GOMEZ" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "MARILYN GOMEZ" },
        { cantidad: 1, producto: "Bofer Logitech", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "MARILYN GOMEZ" },
        { cantidad: 1, producto: "Par de Bocinas", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "MARILYN GOMEZ" },
        { cantidad: 1, producto: "Radio", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "MARILYN GOMEZ" },
        { cantidad: 1, producto: "Cámara GO PRO", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "MARILYN GOMEZ" },
        { cantidad: 1, producto: "Trípode", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "MARILYN GOMEZ" },
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I7C-7700 CPU@3.60GHZ 3.60GHZ RAM 8.00GB", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "YAZMIN DE BOCALETTI" },
        { cantidad: 1, producto: "Teclado DELL", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "YAZMIN DE BOCALETTI" },
        { cantidad: 1, producto: "Mouse Logitech", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "YAZMIN DE BOCALETTI" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "YAZMIN DE BOCALETTI" },
        { cantidad: 1, producto: "Bofer Genius", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "YAZMIN DE BOCALETTI" },
        { cantidad: 1, producto: "Par de Bocinas Genius", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "YAZMIN DE BOCALETTI" },
        { cantidad: 1, producto: "Cámara GO PRO", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "YAZMIN DE BOCALETTI" },
        { cantidad: 1, producto: "Trípode", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "YAZMIN DE BOCALETTI" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "YAZMIN DE BOCALETTI" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "YAZMIN DE BOCALETTI" },
        { cantidad: 1, producto: "Mouse Optical", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "YAZMIN DE BOCALETTI" },
        { cantidad: 1, producto: "Extensión de Radio", codigo: "/", departamento: "COORDINACIÓN DE PRIMARIA ", responsable: "" },
    ];

    const section = document.createElement('section');
    section.className = "prepri-section";
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Coordinación de Preprimaria";
    section.appendChild(titulo);
    
    const table = document.createElement('table');
    table.className = "prepri-table";
    
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
    contVolver.className = "prepri-cont-volver";
    section.appendChild(contVolver);
    
    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "prepri-boton-volver";
    contVolver.appendChild(botonVolver);
    
    section.appendChild(contVolver);
    
    // Evento del botón volver
    botonVolver.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(vista()); 
    });


    return section;
}

export { coordiPrepi };
