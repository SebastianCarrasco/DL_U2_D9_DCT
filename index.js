// scripts.js

// Seleccionamos los elementos necesarios
const precioInicialElement = document.querySelector('.precio-inicial'); // Selecciona el elemento que contiene el precio inicial
const cantidadElement = document.querySelector('.cantidad'); // Selecciona el elemento que muestra la cantidad
const valorTotalElement = document.querySelector('.valor-total'); // Selecciona el elemento que muestra el valor total a pagar
const btnIncrementar = document.querySelector('.btn-incrementar'); // Selecciona el botón para incrementar la cantidad
const btnDecrementar = document.querySelector('.btn-decrementar'); // Selecciona el botón para decrementar la cantidad

// Convertimos el precio inicial de texto a número
const precioInicial = parseFloat(precioInicialElement.innerHTML); // Convierte el contenido de texto del elemento de precio inicial a un número flotante

// Inicializamos la cantidad
let cantidad = 0; // Establece la cantidad inicial a 0

// Función para actualizar el total a pagar
function actualizarTotal() {
    const total = precioInicial * cantidad; // Calcula el total multiplicando el precio inicial por la cantidad
    valorTotalElement.innerHTML = total.toFixed(2); // Actualiza el elemento del valor total con el total calculado, formateado a 2 decimales
}

// Event listener para incrementar la cantidad
btnIncrementar.addEventListener('click', () => {
    cantidad++; // Incrementa la cantidad en 1
    cantidadElement.innerHTML = cantidad; // Actualiza el elemento de la cantidad con la nueva cantidad
    actualizarTotal(); // Llama a la función para actualizar el total a pagar
});

// Event listener para decrementar la cantidad
btnDecrementar.addEventListener('click', () => {
    if (cantidad > 0) { // Solo decrementar si la cantidad es mayor que 0
        cantidad--; // Decrementa la cantidad en 1
        cantidadElement.innerHTML = cantidad; // Actualiza el elemento de la cantidad con la nueva cantidad
        actualizarTotal(); // Llama a la función para actualizar el total a pagar
    }
});

