let http = require("http");

let manejador = function(solicitud, respuesta) {
    console.log("Hemos recibido una solicitud")
    respuesta.end("Hello World!");
}

let servidor = http.createServer(manejador);

servidor.listen(8080);