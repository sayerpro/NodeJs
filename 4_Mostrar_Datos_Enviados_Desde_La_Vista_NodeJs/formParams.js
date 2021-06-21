let http = require("http"),
    fs = require("fs");

http.createServer(function(require, response) {

    if (require.url.indexOf("favicon.ico") > 0) { return; }

    fs.readFile("./index.html", function(error, html) {

        let stringHtml = html.toString();
        let paramArray = [],
            params = {};
        // Expresión regular para devolver un arreglo de todos los elementos que encuentre dentro de las llaves {} en el HTML
        let regularExpression = stringHtml.match(/(?<=\{)(.+)(?=\})/g);

        if (require.url.indexOf("?") > 0) {
            let dataUrl = require.url.split("?");
            paramArray = dataUrl[1].split("&");
        }

        for (let i = paramArray.length - 1; i >= 0; i--) {
            let param = paramArray[i];
            let paramData = param.split("=");
            params[paramData[0]] = paramData[1];
        }

        for (let i = regularExpression.length - 1; i >= 0; i--) {
            let variable = regularExpression[i];
            stringHtml = stringHtml.replace("{" + regularExpression[i] + "}", params[variable]);
        }

        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(stringHtml);
        response.end();
    });
}).listen(8080);