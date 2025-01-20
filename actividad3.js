const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let total = 0;
let contador = 1;

function solicitarCalificacion() {
    if (contador <= 4) {
        rl.question(`Ingresa la calificación ${contador}: `, (calificacion) => {
            // Convertir la entrada a número
            calificacion = parseFloat(calificacion);

            // Validar que sea un número válido
            if (isNaN(calificacion)) {
                console.log("Por favor, ingresa un número válido.");
                solicitarCalificacion(); // Reintentar
                return;
            }

            // Sumar al total y aumentar el contador
            total += calificacion;
            contador++;
            solicitarCalificacion(); // Llamar a la siguiente iteración
        });
    } else {
        // Calcular y mostrar el promedio
        const promedio = total / 4;
        console.log(`El promedio es: ${promedio.toFixed(2)}`);
        rl.close(); // Finalizar la interfaz
    }
}

// Iniciar el programa
solicitarCalificacion();

