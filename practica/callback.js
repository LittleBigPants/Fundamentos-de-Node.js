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

console.log("iniciando proceso...");

hola ("Juan", (nombre) => {
    adios(nombre, () => {
        console.log("terminando proceso...");
    })
    
});


