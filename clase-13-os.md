RESUMEN:

El modulo de Node para OS me permite acceder a elementos de muy bajo nivel, y es útil en diferentes contextos.


const os = require('os');

console.log(os.hostname());//  Voy a saber el hostname de la máquina
console.log(os.networkInterfaces());// Puedo acceder a mi interfaz de red activas en mi máquina, puedo saber  IPVX
console.log(os.tmpdir())//--&gt;Me muestra los directorios temporales, temproales una imagen que voy a procesar
console.log(os.homedir()) // Me permite saber cual es el directorio raíz
console.log(os.arch()); //----&gt; Me devuelve la arquitecura de mi OS
console.log(os.platform());//---&gt; Me dice en qué plataforma estoy
console.log(os.cpus());//---&gt;podemos acceder a la información de las cpus de mi pc.
console.log(os.constants);//---&gt;  Me muestran todos los errores de sistema.


//Acceder a espacios de memoria es muy útil para saber si tengo a memoria suficiente para realizar esta operación.
console.log(os.freemem());// ---&gt; Me dice en bytes la memoria libre que tenemos
// console.log(kb(os.freemem()));
// console.log(mb(os.freemem()));
// console.log(gb(os.freemem()));
console.log(gb(os.totalmem())); // ---&gt; Me muestra la memoria disponible del pc.

const SIZE = 1024;
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }
