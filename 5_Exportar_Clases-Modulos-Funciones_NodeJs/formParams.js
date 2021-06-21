let http = require("http"),
    fs = require("fs"),
    parser = require("./paramParser.js"),
    render = require("./renderView.js");

const paramParserFunction = parser.parse;
const renderViewFunction = render.renderView;

http.createServer(function(require, response) {

    if (require.url.indexOf("favicon.ico") > 0) { return; }

    fs.readFile("./index.html", function(error, html) {

        let params = paramParserFunction(require);
        let variables = renderViewFunction(html, params);

        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(variables);
        response.end();
    });
}).listen(8080);