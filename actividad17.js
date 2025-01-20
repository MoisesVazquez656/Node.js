rl.question("Ingrese la cantidad de galones: ", (galones) => {
    const litros = parseFloat(galones) * 3.78541;
    console.log(`${galones} galones = ${litros.toFixed(4)} litros`);
    rl.close();
});
