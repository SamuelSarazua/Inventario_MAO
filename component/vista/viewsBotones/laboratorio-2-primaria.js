import { vista } from "../vista.js";

function laboPrima() {
    const datosCompras = [
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069274", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069267", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFNAHA069056", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFNAHA069269", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QCFN4HA069088", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HAO69268", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068962", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068931", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068933", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068950", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068949", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068941", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA065939", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA061015", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069280", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA062945", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069082", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068023", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069295", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068506", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068029", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068018", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA063040", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068026", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069084", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068939", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC P.", codigo: "QVFN4HA068942", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Monitor HP P.", codigo: "CNC022QKR2", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Cámara GO PRO", codigo: "/", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Proyector EPSON", codigo: "/", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "Par de Bocinas", codigo: "/", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 27, producto: "Teclado Microsoft", codigo: "/", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 27, producto: "Mouse Microsoft", codigo: "/", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 27, producto: "HERSET HP ", codigo: "/", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL(R) CORE (TM) ¡5-10400 CPU@ 2.90GHz 2.90GHz RAM 8.00GB", codigo: "/", departamento: "LOBORATORIO 2 PRIMARIA ", responsable: "" },
    ];

    const section = document.createElement('section');
    section.className = "lab-primaria-section";
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Laboratorio de Primaria";
    section.appendChild(titulo);
    
    const table = document.createElement('table');
    table.className = "lab-primaria-table";
    
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
    contVolver.className = "lab-primaria-volver-container";
    section.appendChild(contVolver);
    
    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "lab-primaria-btn-volver";
    contVolver.appendChild(botonVolver);
    
    section.appendChild(contVolver);
    
    botonVolver.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(vista()); 
    });

    return section;
}

export { laboPrima };
