import { vista } from "../vista.js";

function contabilidad() {
    const datosCompras = [
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I5-10210U CPU@ 1.60GHZ 2.10GHZ RAM 8.00GB", codigo: "/", departamento: "CONTABILIDAD", responsable: "KATERIN CASTILLO" },
        { cantidad: 1, producto: "Monitor HP", codigo: "/", departamento: "CONTABILIDAD", responsable: "KATERIN CASTILLO" },
        { cantidad: 1, producto: "Teclado HP", codigo: "696737-162", departamento: "CONTABILIDAD", responsable: "KATERIN CASTILLO" },
        { cantidad: 1, producto: "Mouse HP", codigo: "622652-001", departamento: "CONTABILIDAD", responsable: "KATERIN CASTILLO" },
        { cantidad: 1, producto: "IMPRESORA EPSON MODELO PA71A", codigo: "Q75YJ28487", departamento: "CONTABILIDAD", responsable: "KATERIN CASTILLO" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "CONTABILIDAD", responsable: "KATERIN CASTILLO" },
        { cantidad: 1, producto: "Monitor HP", codigo: "/", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Cpu AMD RYZEN 53500 UWITH RADEON VEGA MOBILE GFX 2.10GHZ RAM 8.00GB", codigo: "/", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Mouse HP", codigo: "672662-001", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Teclado HP", codigo: "697737-162", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "IMPRESORA CANON PIXMA", codigo: "KMLT85001", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Escaner CANON", codigo: "KKJD51306", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Cpu AMD E1-6010APU WITH AMD RADEON R2 GRANDFITHS 1.35GHZ RAM 8.00GB ", codigo: "/", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Monitor HP", codigo: "/", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Teclado Brocs", codigo: "/", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Mouse Microsoft", codigo: "X821908-014", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Cpu INTEL ® CORE ™ I5-4460 CPU@ 3.20GHZ 3.20GHZ RAM 8.00GB", codigo: "/", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "/", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 1, producto: "Teclado Brocs", codigo: "/", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
        { cantidad: 2, producto: "Teléfonos", codigo: "Parasonic Extensión 106", departamento: "CONTABILIDAD", responsable: "MARGARITA HERNANDEZ" },
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

export { contabilidad };
