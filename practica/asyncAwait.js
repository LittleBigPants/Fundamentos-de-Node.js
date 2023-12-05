async function  hola (nombre){
    return new Promise((resolve, reject) => {
       setTimeout( () => {
            console.log("hola " + nombre )
            resolve (nombre);
        }, 2000);
    })
}

async function adios (nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("adios ", nombre)
            resolve()
        }, 2000);
        
    });

}

async function hablar (nombre)  {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            console.log("bla.. bla..");
            resolve(nombre)
            // reject("hay error")
        }, 1000);
    });
}


async function main() {
    let nombre = await hola("juan");
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log("termina el proceso...");
}
console.log("empezamos el proceso..");

main();
