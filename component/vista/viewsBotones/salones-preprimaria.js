import { vista } from "../vista.js";

function salonesPrepri() {
    const datosCompras = [
        { cantidad: 1, producto: "Proyector", codigo: "/", departamento: "PREPRIMARIA L1", responsable: "" },
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I7-7700 CPU@3.60GHZ 3.60GHZ RAM4.00GB", codigo: "/", departamento: "PREPRIMARIA L2", responsable: "MISS OLGITA" },
        { cantidad: 1, producto: "Teclado Xtech", codigo: "/", departamento: "PREPRIMARIA L2", responsable: "MISS OLGITA" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "PREPRIMARIA L2", responsable: "MISS OLGITA" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PREPRIMARIA L2", responsable: "MISS OLGITA" },
        { cantidad: 1, producto: "Bocina Steren", codigo: "/", departamento: "PREPRIMARIA L2", responsable: "MISS OLGITA" },
        { cantidad: 1, producto: "Proyector EPSON", codigo: "/", departamento: "PREPRIMARIA L2", responsable: "MISS OLGITA" },
        { cantidad: 1, producto: "iPad", codigo: "/", departamento: "PREPRIMARIA L2", responsable: "MISS OLGITA" },
        { cantidad: 1, producto: "Proyector", codigo: "/", departamento: "PREPRIMARIA L3", responsable: "MISS PAULA" },
        { cantidad: 1, producto: "Par de Bocinas Logitech", codigo: "/", departamento: "PREPRIMARIA L3", responsable: "MISS PAULA" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "/", departamento: "PREPRIMARIA L3", responsable: "MISS PAULA" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "PREPRIMARIA L3", responsable: "MISS PAULA" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "PREPRIMARIA L3", responsable: "MISS PAULA" },
        { cantidad: 1, producto: "Monitor HP", codigo: "/", departamento: "PREPRIMARIA L3", responsable: "MISS PAULA" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PREPRIMARIA L3", responsable: "MISS PAULA" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PREPRIMARIA L3", responsable: "MISS PAULA" },
        { cantidad: 1, producto: "iPad", codigo: "/", departamento: "PREPRIMARIA L3", responsable: "MISS PAULA" },
        { cantidad: 1, producto: "Monitor Brocs", codigo: "BR173D", departamento: "PREPRIMARIA L4", responsable: "" },
        { cantidad: 1, producto: "Mouse Mircrosoft", codigo: "/", departamento: "PREPRIMARIA L4", responsable: "" },
        { cantidad: 1, producto: "Teclado Microsoft", codigo: "/", departamento: "PREPRIMARIA L4", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PREPRIMARIA L4", responsable: "" },
        { cantidad: 1, producto: "Bocinas", codigo: "/", departamento: "PREPRIMARIA L4", responsable: "" },
        { cantidad: 1, producto: "Cámara", codigo: "/", departamento: "PREPRIMARIA L4", responsable: "" },
        { cantidad: 1, producto: "Proyector", codigo: "/", departamento: "PREPRIMARIA M1", responsable: "" },
        { cantidad: 1, producto: "iPad", codigo: "/", departamento: "PREPRIMARIA M1", responsable: "" },
        { cantidad: 1, producto: "Proyector EPSON", codigo: "/", departamento: "PREPRIMARIA M2", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "/", departamento: "PREPRIMARIA M2", responsable: "" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "PREPRIMARIA M2", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "PREPRIMARIA M2", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PREPRIMARIA M2", responsable: "" },
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I5-650CPU @ 3.20GHZ 3.20GHZ RAM 4.00GB", codigo: "/", departamento: "PREPRIMARIA M2", responsable: "" },
        { cantidad: 1, producto: "Proyector EPSON", codigo: "/", departamento: "PREPRIMARIA M3", responsable: "" },
        { cantidad: 1, producto: "iPad", codigo: "/", departamento: "PREPRIMARIA M3", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PREPRIMARIA M3", responsable: "" },
        { cantidad: 1, producto: "Proyector", codigo: "/", departamento: "PREPRIMARIA M4", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "PREPRIMARIA M4", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "/", departamento: "PREPRIMARIA M4", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "/", departamento: "PREPRIMARIA M4", responsable: "" },
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "PREPRIMARIA M4", responsable: "" },
        { cantidad: 1, producto: "Teclado Klip Xtreme", codigo: "/", departamento: "PREPRIMARIA M4", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PREPRIMARIA M4", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PREPRIMARIA M4", responsable: "" },
        { cantidad: 1, producto: "iPad", codigo: "/", departamento: "PREPRIMARIA M4", responsable: "" },
        { cantidad: 1, producto: "Proyector", codigo: "/", departamento: "PREPRIMARIA M5", responsable: "" },
        { cantidad: 1, producto: "Proyector", codigo: "/", departamento: "PREPRIMARIA M6", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "", departamento: "PREPRIMARIA M7", responsable: "MISS PAOLA" },
        { cantidad: 1, producto: "Proyector EPSON", codigo: "/", departamento: "PREPRIMARIA M7", responsable: "MISS PAOLA" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "PREPRIMARIA M7", responsable: "MISS PAOLA" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "PREPRIMARIA M7", responsable: "MISS PAOLA" },
        { cantidad: 1, producto: "Par de Bocinas Logitech", codigo: "/", departamento: "PREPRIMARIA M7", responsable: "MISS PAOLA" },
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "PREPRIMARIA M7", responsable: "MISS PAOLA" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PREPRIMARIA M7", responsable: "MISS PAOLA" },
        { cantidad: 1, producto: "iPad", codigo: "/", departamento: "PREPRIMARIA M7", responsable: "MISS PAOLA" },
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I7-7700 CPU@ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "PREPRIMARIA M8", responsable: "MISS JACKY" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "PREPRIMARIA M8", responsable: "MISS JACKY" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "PREPRIMARIA M8", responsable: "MISS JACKY" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PREPRIMARIA M8", responsable: "MISS JACKY" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "PREPRIMARIA M8", responsable: "MISS JACKY" },
        { cantidad: 1, producto: "Proyector", codigo: "/", departamento: "PREPRIMARIA M8", responsable: "MISS JACKY" },
        { cantidad: 1, producto: "Monitor HP", codigo: "/", departamento: "PREPRIMARIA M8", responsable: "MISS JACKY" },
        { cantidad: 1, producto: "Monitor LG", codigo: "/", departamento: "PREPRIMARIA M9", responsable: "MISS FERNANDA" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "PREPRIMARIA M9", responsable: "MISS FERNANDA" },
        { cantidad: 1, producto: "Proyector EPSON", codigo: "/", departamento: "PREPRIMARIA M9", responsable: "MISS FERNANDA" },
        { cantidad: 1, producto: "iPad", codigo: "/", departamento: "PREPRIMARIA M9", responsable: "MISS FERNANDA" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "PREPRIMARIA M9", responsable: "MISS FERNANDA" },
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I7-700CPU @3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "PREPRIMARIA M9", responsable: "MISS FERNANDA" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PREPRIMARIA M9", responsable: "MISS FERNANDA" },
        { cantidad: 1, producto: "Par de Bocinas", codigo: "/", departamento: "PREPRIMARIA M9", responsable: "MISS FERNANDA" },
        { cantidad: 1, producto: "iPad", codigo: "/", departamento: "PREPRIMARIA M10", responsable: "MISS VERENICE" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "PREPRIMARIA M10", responsable: "MISS VERENICE" },
        { cantidad: 1, producto: "Monitor HP", codigo: "/", departamento: "PREPRIMARIA M10", responsable: "MISS VERENICE" },
        { cantidad: 1, producto: "Mouse AOAS", codigo: "/", departamento: "PREPRIMARIA M10", responsable: "MISS VERENICE" },
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I7-7700 CPU@3.60GHZ 3.60GHZ RAM 4.00GB ", codigo: "/", departamento: "PREPRIMARIA M10", responsable: "MISS VERENICE" },
        { cantidad: 1, producto: "Proyector", codigo: "/", departamento: "PREPRIMARIA M10", responsable: "MISS VERENICE" },
    ];

    const section = document.createElement('section');
    section.className = "inventario-salones-section";

    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Salones de Preprimaria";
    section.appendChild(titulo);

    const table = document.createElement('table');
    table.className = "inventario-salones-table";

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

    const contVolver = document.createElement('div');
    contVolver.className = "salones-volver-container";

    const botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "salones-btn-volver";
    contVolver.appendChild(botonVolver);

    section.appendChild(contVolver);

    botonVolver.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(vista()); 
    });

    return section;
}

export { salonesPrepri };
