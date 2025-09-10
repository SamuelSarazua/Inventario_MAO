import { vista } from "../vista.js";

function compras() {
    const datosCompras = [
        { cantidad: 1, producto: "Monitor HP", codigo: "100170", departamento: "COMPRAS", responsable: "ALBERTO PÉREZ" },
        { cantidad: 1, producto: "Cpu 13TH GEN INTEL ® CORE ™ I3 -13100 3.40 GHZ RAM 8.00GB", codigo: "/", departamento: "COMPRAS", responsable: "ALBERTO PÉREZ" },
        { cantidad: 1, producto: "Radio", codigo: "/", departamento: "COMPRAS", responsable: "ALBERTO PÉREZ" },
        { cantidad: 1, producto: "Mouse Logitech", codigo: "/", departamento: "COMPRAS", responsable: "ALBERTO PÉREZ" },
        { cantidad: 1, producto: "Teclado DELL", codigo: "/", departamento: "COMPRAS", responsable: "ALBERTO PÉREZ" },
        { cantidad: 1, producto: "Radio Genius", codigo: "100965", departamento: "COMPRAS", responsable: "ALBERTO PÉREZ" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "COMPRAS", responsable: "ALBERTO PÉREZ" },
        { cantidad: 1, producto: "Monitor Veiwsonic", codigo: "VSB11383", departamento: "COMPRAS", responsable: "ALBERTO PÉREZ" },
        { cantidad: 1, producto: "Consola Lorex", codigo: "100657", departamento: "COMPRAS", responsable: "ALBERTO PÉREZ" },
        { cantidad: 1, producto: "Mouse Optica", codigo: "/", departamento: "COMPRAS", responsable: "ALBERTO PÉREZ" },
        { cantidad: 4, producto: "Cámaras", codigo: "/", departamento: "COMPRAS", responsable: "ALBERTO PÉREZ" },
        { cantidad: 1, producto: "Bocinas Brocs", codigo: "/", departamento: "COMPRAS", responsable: "REINA GONZALES" },
        { cantidad: 1, producto: "Teclado DELL", codigo: "/", departamento: "COMPRAS", responsable: "REINA GONZALES" },
        { cantidad: 1, producto: "Mouse Microsoft ", codigo: "/", departamento: "COMPRAS", responsable: "REINA GONZALES" },
        { cantidad: 1, producto: "Radio", codigo: "/", departamento: "COMPRAS", responsable: "REINA GONZALES" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "A9766BA003862", departamento: "COMPRAS", responsable: "REINA GONZALES" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "COMPRAS", responsable: "REINA GONZALES" },
        { cantidad: 1, producto: "Impresora Lanier", codigo: "LD118", departamento: "COMPRAS", responsable: "" },
        { cantidad: 1, producto: "Impresora Xerox", codigo: "workecenter7835", departamento: "COMPRAS", responsable: "" },
        { cantidad: 1, producto: "Impresora Canon", codigo: "Image class D1520", departamento: "COMPRAS", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "COMPRAS", responsable: "" },
    ];

    const section = document.createElement('section');
    section.className = "compras-section";

    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Compras";
    section.appendChild(titulo);

    const table = document.createElement('table');
    table.className = "compras-table";

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
    contVolver.className = "cont-volver";
    section.appendChild(contVolver);

    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "boton-volver2";
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

export { compras };
