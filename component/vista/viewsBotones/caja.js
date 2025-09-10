import { vista } from "../vista.js";

function caja() {
    const datosCompras = [
        { cantidad: 1, producto: "IMPRESORA CANON IR-1643IF", codigo: "35B33939", departamento: "CAJA", responsable: "ESTER NOJ" },
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I7-7700 CPU@3.00GHZ 3.00GHZ RAM 4.00GB", codigo: "/", departamento: "CAJA", responsable: "ESTER NOJ" },
        { cantidad: 1, producto: "Monitor Brocs", codigo: "/", departamento: "CAJA", responsable: "ESTER NOJ" },
        { cantidad: 1, producto: "Teclado Inalambrico Logitech", codigo: "/", departamento: "CAJA", responsable: "ESTER NOJ" },
        { cantidad: 1, producto: "Mouse Inalambrico Logitech", codigo: "/", departamento: "CAJA", responsable: "ESTER NOJ" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "CAJA", responsable: "ESTER NOJ" },
        { cantidad: 1, producto: "IMPRESORA EPSON  MODELO PA71A", codigo: "Q75Y253994", departamento: "CAJA", responsable: "ESTER NOJ" },
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I5-9400F CPU@2.90GHZ 2.90GHZ RAM 4.00GB", codigo: "/", departamento: "CAJA", responsable: "CLAUDIA FLORES " },
        { cantidad: 1, producto: "Monitor Brocs", codigo: "/", departamento: "CAJA", responsable: "CLAUDIA FLORES " },
        { cantidad: 1, producto: "Regleta", codigo: "/", departamento: "CAJA", responsable: "CLAUDIA FLORES " },
        { cantidad: 4, producto: "Teclado ARGOM Inalambrico", codigo: "/", departamento: "CAJA", responsable: "CLAUDIA FLORES " },
        { cantidad: 1, producto: "Mouse ARGOM Inalambrico", codigo: "/", departamento: "CAJA", responsable: "CLAUDIA FLORES " },
        { cantidad: 1, producto: "IMPRESORA CANON IR-1643IF", codigo: "M75251514", departamento: "CAJA", responsable: "CLAUDIA FLORES " },
        { cantidad: 1, producto: "Bocinas Brocs", codigo: "/", departamento: "CAJA", responsable: "CLAUDIA FLORES " },
        { cantidad: 1, producto: "Extensión Telefónica", codigo: "107", departamento: "CAJA", responsable: "CLAUDIA FLORES Y ESTER NOJ" },
    ];

    const section = document.createElement('section');
    section.className = "compras-section";

    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Caja";
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

export { caja };
