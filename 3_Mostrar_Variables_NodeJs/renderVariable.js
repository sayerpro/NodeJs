let http = require("http"),
    fs = require("fs");

http.createServer(function(require, response) {
    fs.readFile("./index.html", function(error, html) {

        let stringHtml = html.toString();
        // Expresión regular para devolver un arreglo de todos los elementos que encuentre dentro de las llaves {} en el HTML
        let regularExpression = stringHtml.match(/(?<=\{)(.+)(?=\})/g)
        const name = "El cabro";

        for (let i = regularExpression.length - 1; i >= 0; i--) {
            let value = eval(regularExpression[i]);
            stringHtml = stringHtml.replace("{" + regularExpression[i] + "}", value);
        }

        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(stringHtml);
        response.end();
    });
}).listen(8080);