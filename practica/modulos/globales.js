// console.log(global);

let i = 0

let interval = setInterval(() => {
    console.log("hola");
    if (i === 3) {
        clearInterval(interval);
    }
    i++
}, 1000);

// console.log(process);

// console.log(__dirname);

// console.log(__filename);

