// Búsqueda de elementos en un arreglo:
// Crea un arreglo de nombres y dada una cadena con un nombre, 
// verifica si ese nombre está presente en el arreglo y muestra un mensaje apropiado.

const readline = require('readline');

// Interfaz para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const nombres = ["Ana", "Luis", "Pedro", "María", "Juana"];


rl.question('Ingrese un nombre para buscar: ', (nombreABuscar) => {
    
    const nombreABuscarMinusculas = nombreABuscar.toLowerCase();
    const encontrado = nombres.some(nombre => nombre.toLowerCase() === nombreABuscarMinusculas);


    if (encontrado) {
        console.log(`El nombre "${nombreABuscar}" está presente en el arreglo.`);
    } else {
        console.log(`El nombre "${nombreABuscar}" no está presente en el arreglo.`);
    }

    
    // Cierra la interfaz de lectura
    rl.close();
});


