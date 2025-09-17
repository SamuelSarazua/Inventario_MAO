import { vista } from "../vista.js";

function secundaria1() {
    const datosCompras = [
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 102", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CN922035B", departamento: "SECUNDARIA 102", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC9301409", departamento: "SECUNDARIA 102", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "SECUNDARIA 102", responsable: "" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "SECUNDARIA 102", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 102", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "SECUNDARIA 102", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 103", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC922030W", departamento: "SECUNDARIA 103", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA00442", departamento: "SECUNDARIA 103", responsable: "" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "SECUNDARIA 103", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 103", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "SECUNDARIA 103", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "SECUNDARIA 103", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 105", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC930147X", departamento: "SECUNDARIA 105", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA002242", departamento: "SECUNDARIA 105", responsable: "" },
        { cantidad: 1, producto: "Teclado DELL", codigo: "/", departamento: "SECUNDARIA 105", responsable: "" },
        { cantidad: 1, producto: "Mouse Microsoft", codigo: "/", departamento: "SECUNDARIA 105", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "SECUNDARIA 105", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "SECUNDARIA 105", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "SECUNDARIA 105", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 106", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC93013HG", departamento: "SECUNDARIA 106", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA002247", departamento: "SECUNDARIA 106", responsable: "" },
        { cantidad: 1, producto: "Teclado Manhatan", codigo: "/", departamento: "SECUNDARIA 106", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 106", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "SECUNDARIA 106", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "SECUNDARIA 106", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 107", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC930147W", departamento: "SECUNDARIA 107", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA002277", departamento: "SECUNDARIA 107", responsable: "" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "SECUNDARIA 107", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 107", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "SECUNDARIA 107", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "SECUNDARIA 107", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "SECUNDARIA 107", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I5-10400CPU @ 2.90GHZ 2.90GHZ RAM 8.00GB", codigo: "/", departamento: "SECUNDARIA 108", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "BYOC9JA000446", departamento: "SECUNDARIA 108", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "BLP8HA000550", departamento: "SECUNDARIA 108", responsable: "" },
        { cantidad: 1, producto: "Teclado DELL", codigo: "/", departamento: "SECUNDARIA 108", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 108", responsable: "" },
        { cantidad: 1, producto: "Proyector EPSON", codigo: "/", departamento: "SECUNDARIA 108", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "SECUNDARIA 108", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "SECUNDARIA 108", responsable: "" },
        { cantidad: 1, producto: "iPad", codigo: "/", departamento: "SECUNDARIA 108", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 201", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC930147M", departamento: "SECUNDARIA 201", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA002203", departamento: "SECUNDARIA 201", responsable: "" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "SECUNDARIA 201", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 201", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "SECUNDARIA 201", responsable: "" },
        { cantidad: 1, producto: "Proyector", codigo: "/", departamento: "SECUNDARIA 201", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "SECUNDARIA 201", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I5-3330 @ 3.00GHZ 3.00GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I5-3330 @ 3.00GHZ 3.00GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 3, producto: "Teclado", codigo: "/", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 3, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA002209", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA002234", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 1, producto: "Monitor LG", codigo: "908DPUH2A295", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC93013HB", departamento: "SECUNDARIA 202", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 203", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA000477", departamento: "SECUNDARIA 203", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC92203GW", departamento: "SECUNDARIA 203", responsable: "" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "SECUNDARIA 203", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 203", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "SECUNDARIA 203", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "SECUNDARIA 203", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "SECUNDARIA 203", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 205", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA002281", departamento: "SECUNDARIA 205", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "DYOC9JA002195", departamento: "SECUNDARIA 205", responsable: "" },
        { cantidad: 1, producto: "Teclado Brocs", codigo: "/", departamento: "SECUNDARIA 205", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 205", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "SECUNDARIA 205", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "SECUNDARIA 205", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "SECUNDARIA 205", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 206", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC9301323", departamento: "SECUNDARIA 206", responsable: "" },
        { cantidad: 1, producto: "Monitor Brocs", codigo: "185202212220D560", departamento: "SECUNDARIA 206", responsable: "" },
        { cantidad: 1, producto: "Teclado Logitech", codigo: "/", departamento: "SECUNDARIA 206", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 206", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "SECUNDARIA 206", responsable: "" },
        { cantidad: 1, producto: "Par de Bocinas Logitech", codigo: "/", departamento: "SECUNDARIA 206", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "SECUNDARIA 206", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CELERON ™ G6900  3.40GHZ 3.40GHZ RAM 8.00GB", codigo: "/", departamento: "SECUNDARIA 207", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC9301481", departamento: "SECUNDARIA 207", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "A93C6BA003932", departamento: "SECUNDARIA 207", responsable: "" },
        { cantidad: 1, producto: "Teclado DELL", codigo: "/", departamento: "SECUNDARIA 207", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 207", responsable: "" },
        { cantidad: 1, producto: "Bocina", codigo: "/", departamento: "SECUNDARIA 207", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "SECUNDARIA 207", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "SECUNDARIA 207", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-7700CPU @ 3.60GHZ 3.60GHZ RAM 4.00GB", codigo: "/", departamento: "SECUNDARIA 208", responsable: "" },
        { cantidad: 1, producto: "Monitor HP", codigo: "CNC930141V", departamento: "SECUNDARIA 208", responsable: "" },
        { cantidad: 1, producto: "Monitor AOC", codigo: "FNCD4HA021120", departamento: "SECUNDARIA 208", responsable: "" },
        { cantidad: 1, producto: "Teclado", codigo: "/", departamento: "SECUNDARIA 208", responsable: "" },
        { cantidad: 1, producto: "Mouse", codigo: "/", departamento: "SECUNDARIA 208", responsable: "" },
        { cantidad: 1, producto: "Proyector OPTAMA", codigo: "/", departamento: "SECUNDARIA 208", responsable: "" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "SECUNDARIA 208", responsable: "" },
    ];

    const section = document.createElement('section');
    section.className = "inventario-secundaria-section";
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Secundaria 1";
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

export { secundaria1 };
