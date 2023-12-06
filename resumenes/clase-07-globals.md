RESUMEN:

Los modulos globales son módulos del core. Una de las funciones muy usadas en Node es setInterval, clearInterval, para evaluar en n tiempo si el servidor está caído o no.

TIP: Si no tengo que usar variables globales no usarlas, pues son un foco de problemas


console.log(global) 
/*Object [global] {
    global: [Circular], ---&gt; Dependencias ciruculares.
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Function]
    },
    queueMicrotask: [Function: queueMicrotask],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Function]
    }
  }
*/


require(); // nos va a permitir acceder a caulqueir módulo.

let i =0; //  Inicializo contador en cero
let intervalo = setInterval(() =&gt; {  // Asigno el setInterval a una variable intervalo para poder operarla luego.
    console.log(&quot; Alejandro &quot;); // Imprimo mi nombre
    if (i === 3){ // Con i ===3 imprima mi nombre hasat que de cero llega a 3 y luego haga clearInterval.
        clearInterval(intervalo); 
    }
    i ++;
}, 1000);


setImmediate(()=&gt;{
    console.log(&quot;Ya mismo&quot;)
})