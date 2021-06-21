function parse(require) {
    let paramArray = [],
        params = {};

    if (require.url.indexOf("?") > 0) {
        let dataUrl = require.url.split("?");
        paramArray = dataUrl[1].split("&");
    }

    for (let i = paramArray.length - 1; i >= 0; i--) {
        let param = paramArray[i];
        let paramData = param.split("=");
        params[paramData[0]] = paramData[1];
    }

    return params;
}

module.exports.parse = parse;