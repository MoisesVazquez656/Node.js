const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Hora actual: ", (horaActual) => {
    rl.question("Cantidad de horas: ", (horas) => {
        const actual = parseInt(horaActual);
        const transcurridas = parseInt(horas);
        const horaFinal = (actual + transcurridas) % 12 || 12; // Asegura que 0 se traduzca a 12
        console.log(`En ${transcurridas} horas, el reloj marcará las ${horaFinal}`);
        rl.close(); // Finaliza la interfaz
    });
});
