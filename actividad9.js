const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el valor de la base del triángulo: ", (base) => {
    rl.question("Ingrese el valor de la altura del triángulo: ", (altura) => {
        const area = (parseFloat(base) * parseFloat(altura)) / 2;
        console.log(`El área del triángulo es: ${area}`);
        rl.close(); // Finaliza la interfaz
    });
});
