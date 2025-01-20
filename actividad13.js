const horasDiarias = 8;
const diasQuincena = 15;
const salarioPorHora = 50;
const porcentajeCompensacion = 0.02;
const porcentajeIMSS = 0.015;
const porcentajeISPT = 0.012;

const salarioBruto = horasDiarias * diasQuincena * salarioPorHora;
const compensacion = salarioBruto * porcentajeCompensacion;
const descuentos = salarioBruto * (porcentajeIMSS + porcentajeISPT);
const salarioNeto = salarioBruto + compensacion - descuentos;

console.log(`Salario bruto: $${salarioBruto.toFixed(2)}`);
console.log(`Compensación: $${compensacion.toFixed(2)}`);
console.log(`Descuentos: $${descuentos.toFixed(2)}`);
console.log(`Salario neto: $${salarioNeto.toFixed(2)}`);
