import { vista } from "../vista.js";

function recepcion() {
    const datosCompras = [
        { cantidad: 1, producto: "Bocinas Genius", codigo: "/", departamento: "RECEPCIÓN", responsable: "SUSANA ROLDAN" },
        { cantidad: 1, producto: "Teclado Inalambrico", codigo: "18475c10fjq8", departamento: "RECEPCIÓN", responsable: "SUSANA ROLDAN" },
        { cantidad: 1, producto: "Cpu 11TH GEN INTEL ® CORE ™ I5 -11600K @3.90 GHZ 3.91GHZ RAM 4.00GB", codigo: "/", departamento: "RECEPCIÓN", responsable: "SUSANA ROLDAN" },
        { cantidad: 1, producto: "Monitor", codigo: "100721", departamento: "RECEPCIÓN", responsable: "SUSANA ROLDAN" },
        { cantidad: 1, producto: "Radio", codigo: "/", departamento: "RECEPCIÓN", responsable: "SUSANA ROLDAN" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "RECEPCIÓN", responsable: "SUSANA ROLDAN" },
        { cantidad: 1, producto: "Televisor RCA", codigo: "/", departamento: "RECEPCIÓN", responsable: "SUSANA ROLDAN" },
        { cantidad: 1, producto: "Mouse Brocs", codigo: "/", departamento: "RECEPCIÓN", responsable: "RECEPCIÓN 2" },
        { cantidad: 1, producto: "Teclado Microsoft", codigo: "/", departamento: "RECEPCIÓN", responsable: "RECEPCIÓN 2" },
        { cantidad: 1, producto: "Monitor HP", codigo: "/", departamento: "RECEPCIÓN", responsable: "RECEPCIÓN 2" },
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I -3330 CPU@ 3.00GHZ 3.00GHZ RAM 6.00GB ", codigo: "/", departamento: "RECEPCIÓN", responsable: "RECEPCIÓN 2" },
        { cantidad: 16, producto: "CamarasEpcom", codigo: "/", departamento: "RECEPCIÓN", responsable: "RECEPCIÓN 2" },
        { cantidad: 1, producto: "Monitor lg", codigo: "/", departamento: "RECEPCIÓN", responsable: "RECEPCIÓN 2" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "RECEPCIÓN", responsable: "RECEPCIÓN 2" },
        { cantidad: 1, producto: "Extensión Telefónica", codigo: "100 / 101 / 102", departamento: "RECEPCIÓN", responsable: "" },
    ];

    const section = document.createElement('section');
    section.className = "inventario-recepcion-section";
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Recepción";
    section.appendChild(titulo);
    
    const table = document.createElement('table');
    table.className = "inventario-recepcion-table";
    
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
    contVolver.className = "recepcion-volver-container";
    section.appendChild(contVolver);
    
    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "recepcion-btn-volver";
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

export { recepcion };
