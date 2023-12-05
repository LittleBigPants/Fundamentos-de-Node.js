// const process = require('process');

process.on('beforeExit', () => {
    console.log("ale, el proceso va a terminar");
})
process.on('exit', () => {
    console.log("ale, el proceso termino");
    setTimeout(() => {
        console.log("esto no se ejecutara nunca");
    }, 0);
})

process.on('uncaughtException', (err, origen) => {
    console.error('vaya se nos ha olvidado capturar un error');
    console.error(err);
});

// funciondfsad();

console.log("esto si el error no se recoge no sale");