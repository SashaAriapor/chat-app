function codeGenerator() {
    const code = Math.floor((Math.random() * 900000) + 100000).toString();
    return code;
}

module.exports = {
    codeGenerator
}