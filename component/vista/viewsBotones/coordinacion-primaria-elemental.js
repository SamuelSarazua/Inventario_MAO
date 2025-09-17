import { vista } from "../vista.js";

function coordiElemen() {
    const datosCompras = [
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ ¡5-10400 CPU @ 3.00GHz 3.00GHz RAM 8.00GB", codigo: "/", departamento: "COOORDINACION PREPRIMARIA ELEMTAL", responsable: "MISS TITA" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA000462", departamento: "COOORDINACION PREPRIMARIA ELEMTAL", responsable: "MISS TITA" },
        { cantidad: 1, producto: "Monitor Brocs", codigo: "BR173D", departamento: "COOORDINACION PREPRIMARIA ELEMTAL", responsable: "MISS TITA" },
        { cantidad: 1, producto: "Teclado ARGOM", codigo: "/", departamento: "COOORDINACION PREPRIMARIA ELEMTAL", responsable: "MISS TITA" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "COOORDINACION PREPRIMARIA ELEMTAL", responsable: "MISS TITA" },
        { cantidad: 1, producto: "Ups", codigo: "/", departamento: "COOORDINACION PREPRIMARIA ELEMTAL", responsable: "MISS TITA" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ ¡5-8400 CPU @ 3.00GHz 3.00GHz RAM 8.00GB", codigo: "/", departamento: "COOORDINACION PREPRIMARIA ELEMTAL", responsable: "MISS NOEMI" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC93013ZS", departamento: "COOORDINACION PREPRIMARIA ELEMTAL", responsable: "MISS NOEMI" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC92203GC", departamento: "COOORDINACION PREPRIMARIA ELEMTAL", responsable: "MISS NOEMI" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "COOORDINACION PREPRIMARIA ELEMTAL", responsable: "MISS NOEMI" },
        { cantidad: 1, producto: "Par de Audifonos", codigo: "/", departamento: "COOORDINACION PREPRIMARIA ELEMTAL", responsable: "MISS NOEMI" },
        { cantidad: 1, producto: "Impresora EPSON", codigo: "/", departamento: "COOORDINACION PREPRIMARIA ELEMTAL", responsable: "MISS NOEMI" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA002191", departamento: "COOORDINACION PREPRIMARIA ELEMTAL", responsable: "MISS NOEMI" },
        { cantidad: 1, producto: "Cámara de Vigilancia", codigo: "/", departamento: "COOORDINACION PREPRIMARIA ELEMTAL", responsable: "MISS NOEMI" },
        { cantidad: 1, producto: "Teclado Logitech", codigo: "/", departamento: "COOORDINACION PREPRIMARIA ELEMTAL", responsable: "MISS NOEMI" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "COOORDINACION PREPRIMARIA ELEMTAL", responsable: "MISS NOEMI" },
        { cantidad: 1, producto: "Mouse SWANN", codigo: "/", departamento: "COOORDINACION PREPRIMARIA ELEMTAL", responsable: "MISS NOEMI" },
        { cantidad: 1, producto: "Bocina CHOISE", codigo: "/", departamento: "COOORDINACION PREPRIMARIA ELEMTAL", responsable: "MISS NOEMI" },
        { cantidad: 1, producto: "Cámara", codigo: "/", departamento: "COOORDINACION PREPRIMARIA ELEMTAL", responsable: "MISS NOEMI" },
        { cantidad: 1, producto: "Extensión Telefónica / Radio", codigo: "115", departamento: "COOORDINACION PREPRIMARIA ELEMTAL", responsable: "" },
    ];

    const section = document.createElement('section');
    section.className = "coordinacion-primaria-section";
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Coordinación de Primaria Elemental";
    section.appendChild(titulo);
    
    const table = document.createElement('table');
    table.className = "coordinacion-primaria-table";
    
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
    contVolver.className = "coordinacion-volver-container";
    section.appendChild(contVolver);
    
    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "coordinacion-btn-volver";
    contVolver.appendChild(botonVolver);
    
    section.appendChild(contVolver);
    
    botonVolver.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(vista()); 
    });

    return section;
}

export { coordiElemen };
