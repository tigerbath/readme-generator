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
const writeFile = () => {};
// Append file
const appendFile = () => {};
// Export
const exportFile = () => {};
