let suma = 0;

console.time('bucle');
for (let i = 0; i < 1000000; i++) {
    suma += 1;
    
}
console.timeEnd('bucle');


let suma2 = 0;

console.time('bucle2');
for (let J = 0; J < 100000; J++) {
    suma2 += 1;
    
}

function async() {
    return new Promise( (resolve, reject) =>{
        setTimeout(() => {
            console.log('termina async');
            resolve();
        }, 1000);
    })
}

console.timeEnd('bucle2');

console.time('async')
console.log('empieza la funcion');
async()
    .then(() => {
        console.timeEnd('async')
    });

