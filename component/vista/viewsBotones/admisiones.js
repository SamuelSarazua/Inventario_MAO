import { vista } from "../vista.js";

function admisiones() {
    const datosCompras = [
        { cantidad: 1, producto: "Laptop lenovo 11TH GEN INTEL ® CORE ™ I3-1115 G4@ 3.00GHZ 3.00GHZ RAM 8.00GB", codigo: "PF2RAHLE", departamento: "ADMISIONES", responsable: "ALICIA GARCIA " },
        { cantidad: 1, producto: "Laptop lenovo 11TH GEN INTEL ® CORE ™ I3-1115 G4@ 3.00GHZ 3.00GHZ RAM 8.00GB", codigo: "PF2RAHMH", departamento: "ADMISIONES", responsable: "ALICIA GARCIA " },
        { cantidad: 1, producto: "Laptop lenovo 11TH GEN INTEL ® CORE ™ I3-1115 G4@ 3.00GHZ 3.00GHZ RAM 8.00GB", codigo: "PF2RADMX", departamento: "ADMISIONES", responsable: "ALICIA GARCIA " },
        { cantidad: 1, producto: "Laptop lenovo 11TH GEN INTEL ® CORE ™ I3-1115 G4@ 3.00GHZ 3.00GHZ RAM 8.00GB", codigo: "PF2RAHKB", departamento: "ADMISIONES", responsable: "ALICIA GARCIA " },
        { cantidad: 1, producto: "LAPTOP DELL PROCESADOR 12HT INTEL ® CORE ™ I3-1215 U 1.20GHZ RAM 8.00GB", codigo: "/", departamento: "ADMISIONES", responsable: "ALICIA GARCIA " },
        { cantidad: 1, producto: "Bocinas Brocs", codigo: "/", departamento: "ADMISIONES", responsable: "CANDY CONTRERAS" },
        { cantidad: 1, producto: "Monitor Brocs", codigo: "100865", departamento: "ADMISIONES", responsable: "CANDY CONTRERAS" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "ADMISIONES", responsable: "CANDY CONTRERAS" },
        { cantidad: 1, producto: "Teclado Xtech", codigo: "/", departamento: "ADMISIONES", responsable: "CANDY CONTRERAS" },
        { cantidad: 1, producto: "Mouse Xtech", codigo: "170914316", departamento: "ADMISIONES", responsable: "CANDY CONTRERAS" },
        { cantidad: 1, producto: "Cpu Intel ® CORE ™ I5-7400 CPU@ 3.00GHZ 3.00GHZ RAM 8.00GB ", codigo: "/", departamento: "ADMISIONES", responsable: "CANDY CONTRERAS" },
        
        { cantidad: 1, producto: "Radio", codigo: "/", departamento: "ADMISIONES", responsable: "CANDY CONTRERAS" },
        { cantidad: 1, producto: "Extensión Telefónica", codigo: "1005", departamento: "ADMISIONES", responsable: "CANDY CONTRERAS" },
    ];

    const section = document.createElement('section');
    section.className = "inventario-admisiones-section";
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Admisiones";
    section.appendChild(titulo);
    
    const table = document.createElement('table');
    table.className = "inventario-admisiones-table";
    
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
    contVolver.className = "admisiones-volver-container";
    section.appendChild(contVolver);
    
    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "admisiones-btn-volver";
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

export { admisiones };
