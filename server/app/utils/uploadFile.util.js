const multer = require("multer");
const path = require("path");
const { directoryGenerator } = require("./directoryGenerator.util");


function uploadFile(directoryName, secondDirectoryName = "/") {
    const storage = multer.diskStorage({
        destination : (req, file, cb) => { 
            cb(null, directoryGenerator(directoryName, secondDirectoryName));
        },
        filename : (req, file, cb) => {
            const fileFormat = path.extname(file.originalname || "");
            cb(null, Date.now() + fileFormat);
        }
    })    
    const uploader = multer({ storage });
    return uploader; 
}

module.exports = {
    uploadFile
}