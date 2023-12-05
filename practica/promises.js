const hola  = (nombre) => {
    return new Promise((resolve, reject) => {
       setTimeout( () => {
            console.log("hola " + nombre )
            resolve (nombre);
        }, 2000);
    })
}

const adios = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("adios ", nombre)
            resolve()
        }, 2000);
        
    });

}

const hablar = (nombre) => {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            console.log("bla.. bla..");
            resolve(nombre)
            // reject("hay error")
        }, 1000);
    });
}
const conversacion = (nombre, veces, callback) => {
    if (veces >= 0){
    hablar(() => {
        conversacion(nombre, --veces, callback);
    })} else {
        adios(nombre, callback);
    }
}


// console.log("iniciando proceso...");

// hola("juan", (nombre) =>{
//     conversacion (nombre, 3, () => {
//         console.log("proceso terminado")
//     })
// })

// hola ("Juan", (nombre) => {
    

//     // hablar(() => {
//     //     adios(nombre, () => {
//     //         console.log("terminando proceso...");
//     //     })
        
//     // })

// });

console.log("iniciando el proceso");
hola("juan")
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(() => {
        console.log("terminado el proceso");
    })
    .catch(error => {
        console.error("ha habido un error");
        console.error(error);
    })