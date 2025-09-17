import { vista } from "../vista.js";

function direTecni() {
    const datosCompras = [
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-10210U RAM 8.00GB 250 SSD", codigo: "/", departamento: "DIRECCIÓN TÉCNICA", responsable: "Neli Hernadez" },
        { cantidad: 1, producto: "Monitor HP", codigo: "516992001", departamento: "DIRECCIÓN TÉCNICA", responsable: "Neli Hernadez" },
        { cantidad: 1, producto: "Teclado Microsoft", codigo: "PF4BMMLF", departamento: "DIRECCIÓN TÉCNICA", responsable: "" },
        { cantidad: 1, producto: "Mouse Microsoft", codigo: "/", departamento: "DIRECCIÓN TÉCNICA", responsable: "" },
        { cantidad: 1, producto: "Extensión Vtech", codigo: "/", departamento: "DIRECCIÓN TÉCNICA", responsable: "" },
        { cantidad: 1, producto: "Telefono / Radio", codigo: "A52S / R5CT12KGWCX", departamento: "DIRECCIÓN TÉCNICA", responsable: "" },
        { cantidad: 1, producto: "Regleta", codigo: "/", departamento: "DIRECCIÓN TÉCNICA", responsable: "" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ I7-10210U RAM 8.00GB 250 SSD", codigo: "/", departamento: "DIRECCIÓN TÉCNICA", responsable: "Monica de Estrada" },
        { cantidad: 1, producto: "Teclado DELL", codigo: "/", departamento: "DIRECCIÓN TÉCNICA", responsable: "" },
        { cantidad: 1, producto: "Mouse Microsoft", codigo: "/", departamento: "DIRECCIÓN TÉCNICA", responsable: "" },
        { cantidad: 1, producto: "Extensión Vtech", codigo: "/", departamento: "DIRECCIÓN TÉCNICA", responsable: "" },
        { cantidad: 1, producto: "Radio", codigo: "/", departamento: "DIRECCIÓN TÉCNICA", responsable: "" },
        { cantidad: 1, producto: "Impresora Brother", codigo: "DCP-T720DW", departamento: "DIRECCIÓN TÉCNICA", responsable: "" },
        { cantidad: 1, producto: "Regleta", codigo: "/", departamento: "DIRECCIÓN TÉCNICA", responsable: "" },
    ];

    const section = document.createElement('section');
    section.className = "direccion-tecnica-section";
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Dirección Técnica";
    section.appendChild(titulo);
    
    const table = document.createElement('table');
    table.className = "direccion-tecnica-table";
    
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
    contVolver.className = "direccion-volver-container";
    section.appendChild(contVolver);
    
    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "direccion-btn-volver";
    contVolver.appendChild(botonVolver);
    
    section.appendChild(contVolver);
    
    botonVolver.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(vista()); 
    });

    return section;
}

export { direTecni };
