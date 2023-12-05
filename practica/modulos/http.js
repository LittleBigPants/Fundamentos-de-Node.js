const http = require('http');



function router (req, res)  {
    console.log("nueva peticion");
    console.log(req.url);
    
    switch (req.url) {
        case '/hola':
            res.write("hola,que tal");
            res.end();
            break;
    
        default:
            res.write("ERROR 404");
            res.end();
            break;
    }
    
    // res.writeHead(201, {'content-Type': 'text/plain'});
    
    // // respuesta a usuario
    // res.write("hola ya se usar http de nodeJS")
    
    // res.end();
}

http.createServer(router).listen(3000);
console.log("escuchando http en el puerto 3000");
