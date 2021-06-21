let http = require("http"),
    fs = require("fs");

http.createServer(function(require, response) {
    fs.readFile("./index.html", function(error, html) {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify({ name: "hola", age: 23, country: "colombia", email: "sayerpro.op7@gmail.com" }));
        response.end();
    });
}).listen(8080);