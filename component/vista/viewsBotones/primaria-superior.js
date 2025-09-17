import { vista } from "../vista.js";

function PrimaSupe() {
    const datosCompras = [
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ ¡7-7700 CPU @ 3.60GHz 3.60GHz RAM 4.00GB", codigo: "/", departamento: "PRIMARIA SUPERIOR F1", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC9301440", departamento: "PRIMARIA SUPERIOR F1", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC9220359", departamento: "PRIMARIA SUPERIOR F1", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PRIMARIA SUPERIOR F1", responsable: "" },
        { cantidad: 1, producto: "Proyector EPSON", codigo: "/", departamento: "PRIMARIA SUPERIOR F1", responsable: "" },
        { cantidad: 1, producto: "Teclado Xtech", codigo: "/", departamento: "PRIMARIA SUPERIOR F1", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "PRIMARIA SUPERIOR F1", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PRIMARIA SUPERIOR F1", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ ¡7-7700 CPU @ 3.60GHz 3.60GHz RAM 4.00GB", codigo: "/", departamento: "PRIMARIA SUPERIOR F2", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC93013H5", departamento: "PRIMARIA SUPERIOR F2", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "A97C6BA003374", departamento: "PRIMARIA SUPERIOR F2", responsable: "" },
        { cantidad: 1, producto: "Teclado eTouch", codigo: "/", departamento: "PRIMARIA SUPERIOR F2", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "PRIMARIA SUPERIOR F2", responsable: "" },
        { cantidad: 1, producto: "Proyector EPSON", codigo: "/", departamento: "PRIMARIA SUPERIOR F2", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ ¡7-7700 CPU @ 3.60GHz 3.60GHz RAM 4.00GB", codigo: "/", departamento: "PRIMARIA SUPERIOR F3", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "A97C6BA003474", departamento: "PRIMARIA SUPERIOR F3", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA000442", departamento: "PRIMARIA SUPERIOR F3", responsable: "" },
        { cantidad: 1, producto: "Teclado Brocs", codigo: "/", departamento: "PRIMARIA SUPERIOR F3", responsable: "" },
        { cantidad: 1, producto: "Mouse Brocs", codigo: "/", departamento: "PRIMARIA SUPERIOR F3", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PRIMARIA SUPERIOR F3", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PRIMARIA SUPERIOR F3", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "PRIMARIA SUPERIOR F3", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ ¡5-9400 CPU @ 2.90GHz 2.90GHz RAM 8.00GB", codigo: "/", departamento: "PRIMARIA SUPERIOR F5", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC93013HF", departamento: "PRIMARIA SUPERIOR F5", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "AVIL61A006887", departamento: "PRIMARIA SUPERIOR F5", responsable: "" },
        { cantidad: 1, producto: "Teclado Microsoft", codigo: "/", departamento: "PRIMARIA SUPERIOR F5", responsable: "" },
        { cantidad: 1, producto: "Mouse Microsoft", codigo: "/", departamento: "PRIMARIA SUPERIOR F5", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PRIMARIA SUPERIOR F5", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "PRIMARIA SUPERIOR F5", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ ¡5-7400 CPU @ 3.00GHz 3.00GHz RAM 4.00GB", codigo: "/", departamento: "PRIMARIA SUPERIOR F6", responsable: "MISS ALISON" },
        { cantidad: 1, producto: "Cámara GO PRO", codigo: "/", departamento: "PRIMARIA SUPERIOR F6", responsable: "MISS ALISON" },
        { cantidad: 1, producto: "Radio", codigo: "/", departamento: "PRIMARIA SUPERIOR F6", responsable: "MISS ALISON" },
        { cantidad: 1, producto: "Bocina Klip Xtreme", codigo: "/", departamento: "PRIMARIA SUPERIOR F6", responsable: "MISS ALISON" },
        { cantidad: 1, producto: "Audífonos Logitech", codigo: "/", departamento: "PRIMARIA SUPERIOR F6", responsable: "MISS ALISON" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "PRIMARIA SUPERIOR F6", responsable: "MISS ALISON" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "PRIMARIA SUPERIOR F6", responsable: "MISS ALISON" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PRIMARIA SUPERIOR F6", responsable: "MISS ALISON" },
        { cantidad: 1, producto: "Monitor HP", codigo: "6CM2270MPP", departamento: "PRIMARIA SUPERIOR F6", responsable: "MAESTRO" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ ¡5-10400 CPU @ 2.90GHz 2.90GHz RAM 8.00GB", codigo: "/", departamento: "PRIMARIA SUPERIOR F6", responsable: "MAESTRO" },
        { cantidad: 1, producto: "Mouse Brocs", codigo: "/", departamento: "PRIMARIA SUPERIOR F6", responsable: "MAESTRO" },
        { cantidad: 1, producto: "Teclado Microsoft", codigo: "/", departamento: "PRIMARIA SUPERIOR F6", responsable: "MAESTRO" },
        { cantidad: 1, producto: "Herset HP", codigo: "/", departamento: "PRIMARIA SUPERIOR F6", responsable: "MAESTRO" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA068964", departamento: "PRIMARIA SUPERIOR F6", responsable: "MAESTRO" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QVFN4HA069055", departamento: "PRIMARIA SUPERIOR F6", responsable: "MAESTRO" },
        { cantidad: 1, producto: "Teclado Microsoft", codigo: "/", departamento: "PRIMARIA SUPERIOR F6", responsable: "MAESTRO" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "PRIMARIA SUPERIOR F6", responsable: "MAESTRO" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ ¡5-10400 CPU @ 2.90GHz 2.90GHz RAM 8.00GB", codigo: "/", departamento: "PRIMARIA SUPERIOR F6", responsable: "MAESTRO" },
        { cantidad: 1, producto: "Herset HP", codigo: "/", departamento: "PRIMARIA SUPERIOR F6", responsable: "MAESTRO" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ ¡5-9400 CPU @ 2.90GHz 2.90GHz RAM 8.00GB", codigo: "/", departamento: "PRIMARIA SUPERIOR F7", responsable: "" },
        { cantidad: 1, producto: "Monitor Brocs", codigo: "BR173B", departamento: "PRIMARIA SUPERIOR F7", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "FNCB4H019187", departamento: "PRIMARIA SUPERIOR F7", responsable: "" },
        { cantidad: 1, producto: "Teclado Microsoft", codigo: "/", departamento: "PRIMARIA SUPERIOR F7", responsable: "" },
        { cantidad: 1, producto: "Mouse Microsoft", codigo: "/", departamento: "PRIMARIA SUPERIOR F7", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PRIMARIA SUPERIOR F7", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "PRIMARIA SUPERIOR F7", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PRIMARIA SUPERIOR F7", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ ¡5-9400 CPU @ 2.90GHz 2.90GHz RAM 8.00GB", codigo: "/", departamento: "PRIMARIA SUPERIOR G8", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "A97C6BA003468", departamento: "PRIMARIA SUPERIOR G8", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "AUIL69A006967", departamento: "PRIMARIA SUPERIOR G8", responsable: "" },
        { cantidad: 1, producto: "Teclado Microsoft", codigo: "/", departamento: "PRIMARIA SUPERIOR G8", responsable: "" },
        { cantidad: 1, producto: "Mouse Compac", codigo: "/", departamento: "PRIMARIA SUPERIOR G8", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PRIMARIA SUPERIOR G8", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PRIMARIA SUPERIOR G8", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "PRIMARIA SUPERIOR G8", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ ¡5-9400 CPU @ 2.90GHz 2.90GHz RAM 8.00GB", codigo: "/", departamento: "PRIMARIA SUPERIOR G7", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA002198", departamento: "PRIMARIA SUPERIOR G7", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "0FNU415A00114", departamento: "PRIMARIA SUPERIOR G7", responsable: "" },
        { cantidad: 1, producto: "Teclado Microsoft", codigo: "/", departamento: "PRIMARIA SUPERIOR G7", responsable: "" },
        { cantidad: 1, producto: "Mouse Microsoft", codigo: "/", departamento: "PRIMARIA SUPERIOR G7", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PRIMARIA SUPERIOR G7", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PRIMARIA SUPERIOR G7", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "PRIMARIA SUPERIOR G7", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ ¡5-9400 CPU @ 2.90GHz 2.90GHz RAM 8.00GB", codigo: "/", departamento: "PRIMARIA SUPERIOR G6", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "FNUD41A00103 ", departamento: "PRIMARIA SUPERIOR G6", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "AUIL61G006994", departamento: "PRIMARIA SUPERIOR G6", responsable: "" },
        { cantidad: 1, producto: "Teclado Microsoft", codigo: "/", departamento: "PRIMARIA SUPERIOR G6", responsable: "" },
        { cantidad: 1, producto: "Mouse Microsoft", codigo: "/", departamento: "PRIMARIA SUPERIOR G6", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PRIMARIA SUPERIOR G6", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PRIMARIA SUPERIOR G6", responsable: "" },
        { cantidad: 1, producto: "Proyector EPSON", codigo: "/", departamento: "PRIMARIA SUPERIOR G6", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ ¡5-10400 CPU @ 2.90GHz 2.90GHz RAM 8.00GB", codigo: "/", departamento: "PRIMARIA SUPERIOR G5", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DXUC83A009593", departamento: "PRIMARIA SUPERIOR G5", responsable: "" },
        { cantidad: 1, producto: "Monitor Brocs", codigo: "BR1730", departamento: "PRIMARIA SUPERIOR G5", responsable: "" },
        { cantidad: 1, producto: "Teclado Klip Xtreme", codigo: "/", departamento: "PRIMARIA SUPERIOR G5", responsable: "" },
        { cantidad: 1, producto: "Mouse Klip Xtreme", codigo: "/", departamento: "PRIMARIA SUPERIOR G5", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PRIMARIA SUPERIOR G5", responsable: "" },
        { cantidad: 1, producto: "Proyector EPSON", codigo: "/", departamento: "PRIMARIA SUPERIOR G5", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ ¡5-7400 CPU @ 3.00GHz 3.00GHz RAM 8.00GB", codigo: "/", departamento: "PRIMARIA SUPERIOR H5", responsable: "" },
        { cantidad: 1, producto: "Monitor Brocs", codigo: "BR173D", departamento: "PRIMARIA SUPERIOR H5", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC9220358", departamento: "PRIMARIA SUPERIOR H5", responsable: "" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "PRIMARIA SUPERIOR H5", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "PRIMARIA SUPERIOR H5", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PRIMARIA SUPERIOR H5", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "PRIMARIA SUPERIOR H5", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I5-10400CPU @ 2.90GHZ 2.90GHZ RAM 8.00GB", codigo: "/", departamento: "PRIMARIA SUPERIOR H6", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QNHM7HA002976", departamento: "PRIMARIA SUPERIOR H6", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA002262", departamento: "PRIMARIA SUPERIOR H6", responsable: "" },
        { cantidad: 1, producto: "Teclado Microsoft", codigo: "/", departamento: "PRIMARIA SUPERIOR H6", responsable: "" },
        { cantidad: 1, producto: "Mouse Microsoft", codigo: "/", departamento: "PRIMARIA SUPERIOR H6", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PRIMARIA SUPERIOR H6", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PRIMARIA SUPERIOR H6", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "PRIMARIA SUPERIOR H6", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I5-10400CPU @ 2.90GHZ 2.90GHZ RAM 8.00GB", codigo: "/", departamento: "PRIMARIA SUPERIOR H7", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "CDKB6HA006636", departamento: "PRIMARIA SUPERIOR H7", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA000448", departamento: "PRIMARIA SUPERIOR H7", responsable: "" },
        { cantidad: 1, producto: "Teclado Microsoft", codigo: "/", departamento: "PRIMARIA SUPERIOR H7", responsable: "" },
        { cantidad: 1, producto: "Mouse Microsoft", codigo: "/", departamento: "PRIMARIA SUPERIOR H7", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PRIMARIA SUPERIOR H7", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "PRIMARIA SUPERIOR H7", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I5-10400CPU @ 2.90GHZ 2.90GHZ RAM 8.00GB", codigo: "/", departamento: "PRIMARIA SUPERIOR H8", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "QNHM7HA029979", departamento: "PRIMARIA SUPERIOR H8", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA002178", departamento: "PRIMARIA SUPERIOR H8", responsable: "" },
        { cantidad: 1, producto: "Teclaso", codigo: "/", departamento: "PRIMARIA SUPERIOR H8", responsable: "" },
        { cantidad: 1, producto: "Mouse Microsoft", codigo: "/", departamento: "PRIMARIA SUPERIOR H8", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PRIMARIA SUPERIOR H8", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "PRIMARIA SUPERIOR H8", responsable: "" },
    ];

    const section = document.createElement('section');
    section.className = "primaria-superior-section";
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Primaria Superior";
    section.appendChild(titulo);
    
    const table = document.createElement('table');
    table.className = "primaria-superior-table";
    
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
    contVolver.className = "primaria-volver-container";
    section.appendChild(contVolver);
    
    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "primaria-btn-volver";
    contVolver.appendChild(botonVolver);
    
    section.appendChild(contVolver);
    
    botonVolver.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(vista()); 
    });

    return section;
}

export { PrimaSupe };
