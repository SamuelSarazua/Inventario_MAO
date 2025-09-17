import { vista } from "../vista.js";

function pae() {
    const datosCompras = [
        { cantidad: 1, producto: "CPU iCore 5, 6 Gb Ram / 223GB", codigo: "/", departamento: "PAE", responsable: "Julissa Maldonado" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "CDKB6HA007668", departamento: "PAE", responsable: "Julissa Maldonado" },
        { cantidad: 1, producto: "Teclado Logitech", codigo: "/", departamento: "PAE", responsable: "Julissa Maldonado" },
        { cantidad: 1, producto: "Mouse Logitech", codigo: "/", departamento: "PAE", responsable: "Julissa Maldonado" },
        { cantidad: 1, producto: "Radio", codigo: "/", departamento: "PAE", responsable: "Julissa Maldonado" },
        { cantidad: 1, producto: "Boofer / Bocinas Klip", codigo: "/", departamento: "PAE", responsable: "Julissa Maldonado" },
    ];

    const section = document.createElement('section');
    section.className = "pae-section";
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de PAE";
    section.appendChild(titulo);
    
    const table = document.createElement('table');
    table.className = "pae-table";
    
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
    contVolver.className = "pae-volver-container";
    section.appendChild(contVolver);
    
    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "pae-btn-volver";
    contVolver.appendChild(botonVolver);
    
    section.appendChild(contVolver);
    
    botonVolver.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(vista()); 
    });

    return section;
}

export { pae };
