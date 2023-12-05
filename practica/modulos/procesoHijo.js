const {exec, spawn} = require('child_process');

// const exec = require('child_process').exec;

// exec('node modulos/consola.js', (error, stdout, stderr) => {
//     if (error) {
//         console.error(error);
//         return false
//     }
    
//     console.log(stdout);

// })

let proceso = spawn('dir');

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.compose('data', function (dato) {
    console.log(dato);
})