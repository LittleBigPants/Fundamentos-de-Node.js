const hola  = (nombre, callback) => {
    setTimeout( () => {
        console.log("estoy tardando")
        console.log("hola " + nombre )
        callback (nombre);
    }, 2000);
}

const adios = (nombre, callback) => {

    setTimeout(() => {
        console.log("adios " + nombre)
        callback()
    }, 2000);

}

const hablar = (callback) => {
    setTimeout(() => {
        console.log("bla.. bla..");
        callback()
    }, 1000);
}
const conversacion = (nombre, veces, callback) => {
    if (veces >= 0){
    hablar(() => {
        conversacion(nombre, --veces, callback);
    })} else {
        adios(nombre, callback);
    }
}


console.log("iniciando proceso...");

hola("juan", (nombre) =>{
    conversacion (nombre, 3, () => {
        console.log("proceso terminado")
    })
})

// hola ("Juan", (nombre) => {
    

//     // hablar(() => {
//     //     adios(nombre, () => {
//     //         console.log("terminando proceso...");
//     //     })
        
//     // })

// });
