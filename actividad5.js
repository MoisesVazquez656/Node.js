const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese cateto a: ", (catetoA) => {
    rl.question("Ingrese cateto b: ", (catetoB) => {
        const a = parseFloat(catetoA);
        const b = parseFloat(catetoB);
        const hipotenusa = Math.sqrt(a ** 2 + b ** 2); // Fórmula para la hipotenusa
        console.log(`La hipotenusa es: ${hipotenusa}`);
        rl.close(); // Finaliza la interfaz
    });
});
