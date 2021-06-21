let express = require("express");
const app = express();

app.set("view engine", "jade");

let jsonView = {
    hola: "El cabrito"
}

app.get("/", function(require, response) {
    response.render("index", jsonView);
})

app.listen(8080);