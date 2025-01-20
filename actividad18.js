rl.question("Ingrese la temperatura en grados centígrados: ", (centigrados) => {
    const fahrenheit = (parseFloat(centigrados) * 9/5) + 32;
    console.log(`${centigrados}°C = ${fahrenheit.toFixed(2)}°F`);
    rl.close();
});
