rl.question("Ingrese la cantidad de pies: ", (pies) => {
    const pulgadas = parseFloat(pies) * 12;
    console.log(`${pies} pies = ${pulgadas.toFixed(2)} pulgadas`);
    rl.close();
});
