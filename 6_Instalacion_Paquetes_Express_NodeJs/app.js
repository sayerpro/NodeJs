let express = require("express");
const app = express();

app.get("/", function(require, response) {
    response.send("Hola Mundo!");
})

app.listen(8080);