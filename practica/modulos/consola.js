console.log("algo");
console.info("info")
console.error("error");
console.warn("advertencia");
let tabla = [
    {
        a:1,
        b:"b"
    },
    {
        a:2,
        b:"c"
    }
]
console.log(tabla);
console.table(tabla);

console.group("conversasion");
console.log("hola");
console.log("blablabal");
console.log("chao");
console.groupEnd("conversasion");

console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");
