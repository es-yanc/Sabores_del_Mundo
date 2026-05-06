let totalGasto = 6000; 

if (totalGasto >= 5000) {
    let descuento = totalGasto * 0.10;
    totalGasto = totalGasto - descuento;
    console.log("¡Se aplicó un descuento del 10%!");
}

console.log("El total a pagar es: $" + totalGasto);