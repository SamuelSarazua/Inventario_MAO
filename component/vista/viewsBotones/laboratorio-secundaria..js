import { vista } from "../vista.js";

function laboSecu() {
    const datosCompras = [
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000619", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000682", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000716", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000673", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000710", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000694", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000668", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000675", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000551", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000670", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000594", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000542", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000692", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000549", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000547", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000715", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000693", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000667", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000615", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000671", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000721", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000690", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000728", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000703", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000700", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000658", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000593", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000565", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000704", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000676", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000720", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "VBLP8HA000661", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC P.", codigo: "VBLP8HA000550", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC P.", codigo: "DYOC9JA000446", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor LG", codigo: "908TPBF2A317", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 33, producto: "Teclados Klip Xtreme", codigo: "/", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 33, producto: "Mouse Klip Xtreme", codigo: "/", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "iPad", codigo: "/", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Proyector EPSON", codigo: "/", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Camara GO PRO", codigo: "/", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 33, producto: "CPU INTEL ® CORE ™ I5-10400CPU @ 2.90GHZ 2.90GHZ RAM 8.00GB", codigo: "/", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "LABORATORIO DE SECUNDARIA ", responsable: "" },

    ];

    const section = document.createElement('section');
    section.className = "inventario-compras-section";
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Compras";
    section.appendChild(titulo);
    
    const table = document.createElement('table');
    table.className = "inventario-compras-table";
    
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
    contVolver.className = "compras-volver-container";
    section.appendChild(contVolver);
    
    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "compras-btn-volver";
    contVolver.appendChild(botonVolver);
    
    section.appendChild(contVolver);
    
    botonVolver.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(vista()); 
    });

    return section;
}

export { laboSecu };
