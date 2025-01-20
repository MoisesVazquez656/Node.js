rl.question("Ingrese la cantidad de pulgadas: ", (pulgadas) => {
    const metros = parseFloat(pulgadas) * 0.0254;
    console.log(`${pulgadas} pulgadas = ${metros.toFixed(4)} metros`);
    rl.close();
});
