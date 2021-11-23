const fs = require("fs");

// Read file
const readFile = (filePath) => {
    try {
        const content = fs.readFileSync, "utf8";
        return content;
    }   catch (error){
        console.log(error.message);
    }
};
// Write file
const writeFile = (filePath, data) => {
    try {
        fs.writeFileSync(filePath, data);
    } catch (error){
        console.log(error.message);
    }
};
// Append file
const appendFile = (filePath, data) => {
    try {
        fs.appendFileSync(filePath, data);
    } catch (error) {
        console.log(error.message);
    }
};
// Export
module.exports = {
    readFile,
    writeFile,
    appendFile,
};
