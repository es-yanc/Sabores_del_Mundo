// 1. Definimos el gasto total de la cuenta
let totalGasto = 6500;

// Seleccionamos los elementos de html para mostrar el mensaje y el precio final
let elementoMensaje = document.getElementById("mensaje-cuenta");
let elementoPrecio = document.getElementById("precio-final");


// 2. Lógica del descuento: Si el gasto total es mayor o igual a $5000, se aplica un descuento del 10%
if (totalGasto >= 5000) {
    let descuento = totalGasto * 0.10;
    totalGasto = totalGasto - descuento;

// Escribimos en el html el mensaje de descuento aplicado
    elementoMensaje.textContent = "¡Felicidades! Se aplicó un descuento del 10% por superar los $5000.";
} else {
    elementoMensaje.innerText = "Gracas por su visita, esperamos que vuelva pronto.";
}

// Mostramos el precio final en la pantalla

elementoPrecio.textContent = "El total a pagar es: $" + totalGasto;