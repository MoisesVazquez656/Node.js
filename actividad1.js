var nom;
process.stdout.write("¿Cuál es tu nombre? \n ");
process.stdin.on('data', function(data){
    nom = data.toString().trim();
    process.stdout.write("Hola " + nom + ", bienbenido a node.js \n ");
    process.exit();
})