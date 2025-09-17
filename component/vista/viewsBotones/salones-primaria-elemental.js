import { vista } from "../vista.js";

function primaElemen() {
    const datosCompras = [
         { cantidad: 1, producto: "CPU INTEL ® CORE ™ ¡5-9400 CPU @ 2.90GHz 2.90GHz RAM 8.00GB", codigo: "/", departamento: "PRIMARIA ELEMENTAL G4", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "FNUD41A000042", departamento: "PRIMARIA ELEMENTAL G4", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QNHM7HA099752", departamento: "PRIMARIA ELEMENTAL G4", responsable: "" },
        { cantidad: 1, producto: "Teclado Microsoft", codigo: "/", departamento:"PRIMARIA ELEMENTAL G4", responsable: "" },
        { cantidad: 1, producto: "Mouse Microsoft", codigo: "/", departamento: "PRIMARIA ELEMENTAL G4", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PRIMARIA ELEMENTAL G4", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PRIMARIA ELEMENTAL G4", responsable: "" },
        { cantidad: 1, producto: "Proyecto OPTAMA", codigo: "/", departamento: "PRIMARIA ELEMENTAL G4", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "PRIMARIA ELEMENTAL G3", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA002321", departamento: "PRIMARIA ELEMENTAL G3", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QNHM7HA029761", departamento: "PRIMARIA ELEMENTAL G3", responsable: "" },
        { cantidad: 1, producto: "Teclado Microsoft", codigo: "/", departamento:"PRIMARIA ELEMENTAL G3", responsable: "" },
        { cantidad: 1, producto: "Mouse Microsoft", codigo: "/", departamento: "PRIMARIA ELEMENTAL G3", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PRIMARIA ELEMENTAL G3", responsable: "" },
        { cantidad: 1, producto: "Proyecto OPTAMA", codigo: "/", departamento: "PRIMARIA ELEMENTAL G3", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ ¡5-10400 CPU @ 2.90GHz 2.90GHz RAM 8.00GB", codigo: "/", departamento: "PRIMARIA ELEMENTAL G2", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "FNUD4000124", departamento: "PRIMARIA ELEMENTAL G2", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QNHM7GA0318", departamento: "PRIMARIA ELEMENTAL G2", responsable: "" },
        { cantidad: 1, producto: "Teclado Microsoft", codigo: "/", departamento: "PRIMARIA ELEMENTAL G2", responsable: "" },
        { cantidad: 1, producto: "Mouse Microsoft", codigo: "/", departamento: "PRIMARIA ELEMENTAL G2", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PRIMARIA ELEMENTAL G2", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PRIMARIA ELEMENTAL G2", responsable: "" },
        { cantidad: 1, producto: "Proyector EPSON", codigo: "/", departamento: "PRIMARIA ELEMENTAL G2", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ ¡5-10400 CPU @ 2.90GHz 2.90GHz RAM 8.00GB", codigo: "/", departamento: "PRIMARIA ELEMENTAL G1", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "FNCDAHA021130", departamento: "PRIMARIA ELEMENTAL G1", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "AVIL6IA007056", departamento: "PRIMARIA ELEMENTAL G1", responsable: "" },
        { cantidad: 1, producto: "Teclado Microsoft", codigo: "/", departamento: "PRIMARIA ELEMENTAL G1", responsable: "" },
        { cantidad: 1, producto: "Mouse Microsoft", codigo: "/", departamento: "PRIMARIA ELEMENTAL G1", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PRIMARIA ELEMENTAL G1", responsable: "" },
        { cantidad: 1, producto: "Proyector EPSON", codigo: "/", departamento: "PRIMARIA ELEMENTAL G1", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PRIMARIA ELEMENTAL G1", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ ¡5-10400 CPU @ 2.90GHz 2.90GHz RAM 8.00GB", codigo: "/", departamento: "PRIMARIA ELEMENTAL H2", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "UNHM7HA029620", departamento: "PRIMARIA ELEMENTAL H2", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "A97C6BA003539", departamento: "PRIMARIA ELEMENTAL H2", responsable: "" },
        { cantidad: 1, producto: "Teclado Microsoft", codigo: "/", departamento: "PRIMARIA ELEMENTAL H2", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PRIMARIA ELEMENTAL H2", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PRIMARIA ELEMENTAL H2", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "PRIMARIA ELEMENTAL H2", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I5-10400CPU @ 2.90GHZ 2.90GHZ RAM 8.00GB", codigo: "/", departamento: "PRIMARIA ELEMENTAL H3", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC010QMSO", departamento: "PRIMARIA ELEMENTAL H3", responsable: "" },
        { cantidad: 1, producto: "Monitor Brocs", codigo: "BR173D", departamento: "PRIMARIA ELEMENTAL H3", responsable: "" },
        { cantidad: 1, producto: "Teclado Microsoft", codigo: "/", departamento: "PRIMARIA ELEMENTAL H3", responsable: "" },
        { cantidad: 1, producto: "Mouse Microsoft", codigo: "/", departamento: "PRIMARIA ELEMENTAL H3", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "PRIMARIA ELEMENTAL H3", responsable: "" },
        { cantidad: 1, producto: "Bocinas Logitech", codigo: "/", departamento: "PRIMARIA ELEMENTAL H3", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "PRIMARIA ELEMENTAL H4", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC93013HG", departamento: "PRIMARIA ELEMENTAL H4", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "A97C6BA0038555", departamento: "PRIMARIA ELEMENTAL H4", responsable: "" },
        { cantidad: 1, producto: "Teclado Microsoft", codigo: "/", departamento: "PRIMARIA ELEMENTAL H4", responsable: "" },
        { cantidad: 1, producto: "Mouse Xtech", codigo: "/", departamento: "PRIMARIA ELEMENTAL H4", responsable: "" },
        { cantidad: 1, producto: "Proyectar OPTAMA", codigo: "/", departamento: "PRIMARIA ELEMENTAL H4", responsable: "" },
    ];

    const section = document.createElement('section');
    section.className = "primaria-elemental-section";
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Primaria Elemental";
    section.appendChild(titulo);
    
    const table = document.createElement('table');
    table.className = "primaria-elemental-table";
    
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
    contVolver.className = "elemental-volver-container";
    section.appendChild(contVolver);
    
    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "elemental-btn-volver";
    contVolver.appendChild(botonVolver);
    
    section.appendChild(contVolver);
    
    botonVolver.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(vista()); 
    });

    return section;
}

export { primaElemen };