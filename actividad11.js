const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Kilogramos a convertir: ", (kilogramos) => {
    const libras = parseFloat(kilogramos) * 2.2;
    console.log(`${kilogramos} kilogramos es igual a ${libras.toFixed(2)} libras`);
    rl.close(); // Finaliza la interfaz
});
