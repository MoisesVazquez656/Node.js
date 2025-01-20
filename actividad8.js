const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el valor de un lado: ", (lado) => {
    const valorLado = parseFloat(lado);

    // Cálculos
    const area = valorLado ** 2;
    const perimetro = 4 * valorLado;

    // Mostrar resultados
    console.log(`El área del cuadrado es: ${area}`);
    console.log(`El perímetro del cuadrado es: ${perimetro}`);

    rl.close(); // Finaliza la interfaz
});
