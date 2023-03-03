const fs = require("fs");
const path = require("path");


function directoryGenerator(directoryName, secondDirectoryName = "/" ) {
    const directoryPath = path.join(__dirname, "..", "..", "public", "uploads", directoryName, secondDirectoryName);
    fs.mkdirSync(directoryPath, { recursive: true });
    return directoryPath;
}

module.exports = {
    directoryGenerator
}