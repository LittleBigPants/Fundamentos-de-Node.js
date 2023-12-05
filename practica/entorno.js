let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'Sin web';

console.log('hola ' + nombre)
console.log('mi web es ' + web)

// Para ingresar las variables con PowerShell primero hay que definirlas escribiendo:

// $env:NOMBRE="Carlos"
// Una vez definido ejecutan el comando

// node conceptos/entorno.js