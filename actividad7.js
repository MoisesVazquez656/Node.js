const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el número de años: ", (anios) => {
    const anos = parseInt(anios);

    // Cálculos
    const decadas = Math.floor(anos / 10);
    const lustros = Math.floor(anos / 5);
    const meses = anos * 12;
    const semanas = anos * 52; // Aproximando a 52 semanas por año
    const dias = anos * 365;  // Sin considerar años bisiestos
    const horas = dias * 24;
    const minutos = horas * 60;

    // Mostrar resultados
    console.log(`Décadas: ${decadas}`);
    console.log(`Lustros: ${lustros}`);
    console.log(`Años: ${anos}`);
    console.log(`Meses: ${meses}`);
    console.log(`Semanas: ${semanas}`);
    console.log(`Días: ${dias}`);
    console.log(`Horas: ${horas}`);
    console.log(`Minutos: ${minutos}`);

    rl.close(); // Finaliza la interfaz
});
