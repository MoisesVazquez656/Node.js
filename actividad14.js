const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de pies: ", (pies) => {
    const metros = parseFloat(pies) * 0.3048;
    console.log(`${pies} pies = ${metros.toFixed(4)} metros`);
    rl.close();
});
