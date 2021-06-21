function renderView(html, params) {
    let stringHtml = html.toString();
    // Expresión regular para devolver un arreglo de todos los elementos que encuentre dentro de las llaves {} en el HTML
    let variables = stringHtml.match(/(?<=\{)(.+)(?=\})/g);

    for (let i = variables.length - 1; i >= 0; i--) {
        let variable = variables[i];
        stringHtml = stringHtml.replace("{" + variables[i] + "}", params[variable]);
    }

    return stringHtml;
}

module.exports.renderView = renderView;