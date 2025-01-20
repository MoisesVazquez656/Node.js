const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Introduzca un número: ", (num1) => {
    rl.question("Introduzca otro número: ", (num2) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        const suma = n1 + n2;
        const resta = n1 - n2;
        const multiplicacion = n1 * n2;
        const division = n2 !== 0 ? n1 / n2 : "No se puede dividir por 0";

        console.log(`Suma: ${suma}`);
        console.log(`Resta: ${resta}`);
        console.log(`Multiplicación: ${multiplicacion}`);
        console.log(`División: ${division}`);

        rl.close(); // Finaliza la interfaz
    });
});
