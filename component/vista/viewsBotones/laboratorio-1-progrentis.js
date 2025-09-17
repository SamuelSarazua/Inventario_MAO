import { vista } from "../vista.js";

function laboPro() {
    const datosCompras = [
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069083", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068504", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069058", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069061", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068947", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068031", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069276", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069059", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068258", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069085", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069297", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068943", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069270", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068935", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068981", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068024", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068934", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068948", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068937", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068993", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068932", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069273", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068930", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068928", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068953", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069073", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068336", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068020", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFM8HA010667", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 29, producto: "Teclado Microsoft", codigo: "/", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 29, producto: "Mouse Microsoft", codigo: "/", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },
        { cantidad: 29, producto: "CPU INTEL ® CORE ™ I5-10400 CPU @2.90GHZ 2.90GHZ RAM 8.00GB", codigo: "/", departamento: "LABORATORIO 1 PROGRENTIS", responsable: "" },

    ];

    const section = document.createElement('section');
    section.className = "inventario-laboratorio-section"; // Clase única
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Laboratorio de Progrentis";
    section.appendChild(titulo);
    
    const table = document.createElement('table');
    table.className = "inventario-laboratorio-table"; // Clase única
    
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
    contVolver.className = "laboratorio-volver-container"; // Clase única
    section.appendChild(contVolver);
    
    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "laboratorio-btn-volver"; // Clase única
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

export { laboPro };
