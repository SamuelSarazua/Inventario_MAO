import { vista } from "../vista.js";

function coordiSecu() {
    const datosCompras = [
        { cantidad: 1, producto: "CPU INTEL ®  I5-3330PU @ 3.00GHZ 3.00GHZ RAM 4.00GB", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "CHINCHILLA" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "A97C6BA003906", departamento: "COORDINACIÓN SECUNDARIA", responsable: "CHINCHILLA" },
        { cantidad: 1, producto: "Teclado DELL Inalámbrico", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "CHINCHILLA" },
        { cantidad: 1, producto: "Mouse DELL Inalámbrico", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "CHINCHILLA" },
        { cantidad: 1, producto: "Par de Audífonos", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "CHINCHILLA" },
        { cantidad: 1, producto: "Cámara", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "CHINCHILLA" },
        { cantidad: 1, producto: "Bocinas", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "CHINCHILLA" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I5-3330CPU @ 3.00GHZ 3.60GHZ RAM 6.00GB", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MISS FERNANDA" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA000463", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MISS FERNANDA" },
        { cantidad: 1, producto: "Teclado DELL Inalámbrico", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MISS FERNANDA" },
        { cantidad: 1, producto: "Mouse DELL Inalámbrico", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MISS FERNANDA" },
        { cantidad: 1, producto: "Cámara", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MISS FERNANDA" },
        { cantidad: 1, producto: "CPU INTEL ®  I5-3330PU @ 3.00GHZ 3.00GHZ RAM 6.00GB", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MISS SARAI" },
        { cantidad: 1, producto: "Cámara", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MISS SARAI" },
        { cantidad: 1, producto: "Bocinas Brocs", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MISS SARAI" },
        { cantidad: 1, producto: "Teclado Logitech", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MISS SARAI" },
        { cantidad: 1, producto: "Mouse ARGOM", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MISS SARAI" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MISS SARAI" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA00480", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MISS SARAI" },
        { cantidad: 1, producto: "CPU INTEL ®  I5-3330PU @ 3.00GHZ 3.00GHZ RAM 4.00GB", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MIS NUVIA" },
        { cantidad: 1, producto: "Teclado Manhattan", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MIS NUVIA" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MIS NUVIA" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MIS NUVIA" }, 
        { cantidad: 1, producto: "Bocinas Brocs", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MIS NUVIA" },
        { cantidad: 1, producto: "Monitor LG", codigo: "W1742ST", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MIS NUVIA" },
        { cantidad: 1, producto: "Kit de Cámaras", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MISS VICTORIA" },
        { cantidad: 1, producto: "Monitor SAMSUNG", codigo: "100532", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MISS VICTORIA" },
        { cantidad: 1, producto: "Monitor SAMSUNG", codigo: "100531", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MISS VICTORIA" },
        { cantidad: 1, producto: "Monitor LG", codigo: "100526", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MISS VICTORIA" },
        { cantidad: 3, producto: "Mouse", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MISS VICTORIA" },
        { cantidad: 2, producto: "UPS", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MISS VICTORIA" },
        { cantidad: 2, producto: "iPad", codigo: "/", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MISS VICTORIA" },
        { cantidad: 1, producto: "LAPTOP HP CPU  11th Intel® core ™ ¡3-1125G4 @ 2.00GHz 2.00GHz Ram 8.00GB", codigo: "5CD1417D5G", departamento: "COORDINACIÓN SECUNDARIA", responsable: "MISS VICTORIA" },
        { cantidad: 1, producto: "Extensión Telefónica", codigo: "123", departamento: "COORDINACIÓN SECUNDARIA", responsable: "" },
    ];

    const section = document.createElement('section');
    section.className = "inventario-secundaria-section";
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Coordinación de Secundaria";
    section.appendChild(titulo);
    
    const table = document.createElement('table');
    table.className = "inventario-secundaria-table";
    
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
    contVolver.className = "secundaria-volver-container";
    section.appendChild(contVolver);
    
    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "secundaria-btn-volver";
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

export { coordiSecu };
