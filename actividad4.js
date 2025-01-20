const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese cantidad en centímetros: ", (cm) => {
    const pulgadas = cm / 2.54; // Conversión de cm a pulgadas
    console.log(`${cm} cm = ${pulgadas.toFixed(4)} pulgadas`);
    rl.close(); // Finaliza la interfaz
});
