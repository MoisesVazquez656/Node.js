const numeros = [19, 17, 21, 9, 12, 7]; // Lista de números

const suma = numeros.reduce((acumulador, num) => acumulador + num, 0);
const promedio = suma / numeros.length;

console.log(`El promedio es: ${promedio}`);
