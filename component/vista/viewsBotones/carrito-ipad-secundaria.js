import { vista } from "../vista.js";

function carritoSecu() {
    const datosCompras = [
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 1, encargado: "Teacher Chinchilla", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 26, encargado: "", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "IPAD AIR 2", modelo: "MODELO 2014", condicion: "BUENA" },
        { cantidad: 22, encargado: "", departamento: "CARRITO DE IPAD COORDINACIÓN DE SECUNDARIA", producto: "Cargadores", modelo: "", condicion: "" },
    ];

    const section = document.createElement('section');
    section.className = "ipad-secundaria-section";
    
    const titulo = document.createElement('h2');
    titulo.textContent = "Inventario de Carrito de iPad de Secundaria";
    section.appendChild(titulo);
    
    const table = document.createElement('table');
    table.className = "ipad-secundaria-table";
    
    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');
    ["Cantidad", "Producto", "Modelo", "Condición", "Encargado", "Departamento"].forEach(text => {
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
    
        const tdModelo = document.createElement('td');
        tdModelo.textContent = item.modelo;
        tr.appendChild(tdModelo);
    
        const tdCondicion = document.createElement('td');
        tdCondicion.textContent = item.condicion;
        tr.appendChild(tdCondicion);
    
        const tdEncargado = document.createElement('td');
        tdEncargado.textContent = item.encargado;
        tr.appendChild(tdEncargado);
    
        const tdDepartamento = document.createElement('td');
        tdDepartamento.textContent = item.departamento;
        tr.appendChild(tdDepartamento);
    
        tbody.appendChild(tr);
    });
    
    table.appendChild(tbody);
    section.appendChild(table);
    
    let contVolver = document.createElement('div');
    contVolver.className = "ipad-volver-container";
    section.appendChild(contVolver);
    
    let botonVolver = document.createElement('button');
    botonVolver.textContent = "Volver";
    botonVolver.className = "ipad-btn-volver";
    contVolver.appendChild(botonVolver);
    
    botonVolver.addEventListener('click', () => {
        const root = document.getElementById('root');
        root.innerHTML = "";
        root.appendChild(vista());
    });

    return section;
}

export { carritoSecu };
