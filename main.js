fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((json) => console.log(json));

const productos = [
    { id: 1, nombre: 'Hojas Cuadriculadas x100', imagen: '../Entrega final/assets/hojas/hojascuadriculadas.png', categoria: 'hojas', cantidad: 0, precio: 4500 },
    { id: 2, nombre: 'Hojas Rayadas x100', imagen: '../Entrega final/assets/hojas/hojasrayadas.png', categoria: 'hojas', cantidad: 0, precio: 4500 },
    { id: 3, nombre: 'Carpetas', imagen: '../Entrega final/assets/carpetas/carpetas.png', categoria: 'carpetas', cantidad: 0, precio: 5000 },
    { id: 4, nombre: 'Carpetas Azules', imagen: '../Entrega final/assets/carpetas/carpeta_azul.png', categoria: 'carpetas', cantidad: 0, precio: 6000 },
    { id: 5, nombre: 'Carpetas Rojas', imagen: '../Entrega final/assets/carpetas/carpeta_roja.png', categoria: 'carpetas', cantidad: 0, precio: 6000 },
    { id: 6, nombre: 'Carpetas Violetas', imagen: '../Entrega final/assets/carpetas/carpetas_violeta.png', categoria: 'carpetas', cantidad: 0, precio: 6000 },
    { id: 7, nombre: 'Carpetas Naranjas', imagen: '../Entrega final/assets/carpetas/carpeta_naranja.png', categoria: 'carpetas', cantidad: 0, precio: 6000 },
    { id: 8, nombre: 'Lápices', imagen: '../Entrega final/assets/lapices/lapices.png', categoria: 'lapices', cantidad: 0, precio: 8000 },
    { id: 9, nombre: 'Cuadernos', imagen: '../Entrega final/assets/cuadernos/cuadernos.png', categoria: 'cuadernos', cantidad: 0, precio: 3500 },
    { id: 10, nombre: 'Lapiceras', imagen: '../Entrega final/assets/lapiceras/lapiceras.png', categoria: 'lapiceras', cantidad: 0, precio: 2000 }
];

function calcularTotal() {
    const subtotal = productos.reduce((total, producto) => {
        return total + producto.cantidad * producto.precio;
    }, 0);

    const descuento = subtotal > 10000 ? subtotal * 0.10 : 0;
    const totalCompra = subtotal - descuento;

    mostrarResultado(subtotal, descuento, totalCompra);
}

function mostrarResultado(subtotal, descuento, total) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>Descuento: $${descuento.toFixed(2)}</p>
        <p>Total de la compra: $${total.toFixed(2)}</p>
    `;
}

function comprar() {
    alert('Compra realizada. Gracias por su compra!');
}

document.getElementById("calcular-total").addEventListener("click", calcularTotal);
document.getElementById("comprar").addEventListener("click", comprar);

function generarProductos() {
    const productosContainer = document.getElementById('productos-container');

    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');
        productoDiv.dataset.id = producto.id;
        productoDiv.dataset.categoria = producto.categoria;

        productoDiv.innerHTML = `
            <label for="cantidad_${producto.id}">${producto.nombre}:</label>
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <input type="number" id="cantidad_${producto.id}" name="cantidad_${producto.id}" value="${producto.cantidad}" min="0">
        `;

        productosContainer.appendChild(productoDiv);

        document.getElementById(`cantidad_${producto.id}`).addEventListener('change', (event) => {
            const cantidad = parseInt(event.target.value);
            productos.find(p => p.id === producto.id).cantidad = isNaN(cantidad) ? 0 : cantidad;
        });
    });
}

window.onload = function() {
    generarProductos();
};


