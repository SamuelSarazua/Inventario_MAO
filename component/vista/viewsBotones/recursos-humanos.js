import { vista } from "../vista.js";

function recursosHumanos() {
    const datosCompras = [
        { cantidad: 1, producto: "Monitor Brocs", codigo: "brocs195h18080214", departamento: "RECURSOS HUMANOS ", responsable: "MERCEDES GRAMAJO" },
        { cantidad: 1, producto: "Laptop HP 11TH GEN INTEL ® CORE (TN) 13-1125 G4 @2.00GHZ 2.00GHZ RAM 16.00GB", codigo: "5CP1417D4M", departamento: "RECURSOS HUMANOS ", responsable: "MERCEDES GRAMAJO" },
        { cantidad: 1, producto: "Teclado Logitech ", codigo: "/", departamento: "RECURSOS HUMANOS ", responsable: "MERCEDES GRAMAJO" },
        { cantidad: 1, producto: "Impresora Canon ", codigo: "100282", departamento: "RECURSOS HUMANOS ", responsable: "MERCEDES GRAMAJO" },
        { cantidad: 1, producto: "Bocinas Brocs", codigo: "/", departamento: "RECURSOS HUMANOS ", responsable: "MERCEDES GRAMAJO" },
        { cantidad: 1, producto: "Radio", codigo: "x/", departamento: "RECURSOS HUMANOS ", responsable: "MERCEDES GRAMAJO" },
        { cantidad: 1, producto: "Mouse Klip Extreme ", codigo: "/", departamento: "RECURSOS HUMANOS ", responsable: "MERCEDES GRAMAJO" },
        { cantidad: 1, producto: "Ipad", codigo: "MNV62CL/A", departamento: "RECURSOS HUMANOS ", responsable: "MERCEDES GRAMAJO" },
        { cantidad: 1, producto: "CPU INTEL ® CORE ™ 2 DUO CPU E8400@3.00GHZ 3.00GHZ  RAM 4.00GB", codigo: "/", departamento: "RECURSOS HUMANOS ", responsable: "JANETT CARDONA" },
        { cantidad: 1, producto: "Monitor HP", codigo: "100016", departamento: "RECURSOS HUMANOS ", responsable: "JANETT CARDONA" },
        { cantidad: 1, producto: "Teclado DELL", codigo: "/", departamento: "RECURSOS HUMANOS ", responsable: "JANETT CARDONA" },
        { cantidad: 1, producto: "Mouse Optica", codigo: "/", departamento: "RECURSOS HUMANOS ", responsable: "JANETT CARDONA" },
        { cantidad: 1, producto: "UPS", codigo: "/", departamento: "RECURSOS HUMANOS ", responsable: "JANETT CARDONA" },
        { cantidad: 1, producto: "Monitor LG", codigo: "/", departamento: "RECURSOS HUMANOS ", responsable: "BEVERLY LOPEZ" },
        { cantidad: 1, producto: "Cpu inetl core i7 7th", codigo: "/", departamento: "RECURSOS HUMANOS", responsable: "BEVERLY LOPEZ" },
        { cantidad: 1, producto: "Teclado Klip Extreme", codigo: "/", departamento: "RECURSOS HUMANOS", responsable: "BEVERLY LOPEZ" },
        { cantidad: 1, producto: "Television Daevoo", codigo: "/", departamento: "RECURSOS HUMANOS", responsable: "" },
        { cantidad: 1, producto: "Impresora Xerox", codigo: "FX1A_Fax", departamento: "RECURSOS HUMANOS", responsable: "" },
        { cantidad: 1, producto: "Emplasticadora TaHSIN", codigo: "TCC-330", departamento: "RECURSOS HUMANOS ", responsable: "" },
        { cantidad: 1, producto: "Extención Telefónica", codigo: "1033", departamento: "RECURSOS HUMANOS ", responsable: "MERCEDES GRAMAJO -- JANETT CARDONA  BEVERLY LOPEZ" },
    ];

     const section = document.createElement('section');
    section.className = "inventario-section";

    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Recursos Humanos";
    section.appendChild(titulo);

    const table = document.createElement('table');
    table.className = "inventario-table";

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
    contVolver.className = "volver-container";
    section.appendChild(contVolver);

    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "btn-volver";
    contVolver.appendChild(botonVolver);

    // Evento del botón volver
    botonVolver.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = ""; 
        root.appendChild(vista()); 
    });

    return section;
}

export { recursosHumanos };
