// Script to create Directory based on passed arguments with html css and js files.

const fs = require('fs');
const folderName= process.argv.slice(2)
console.log(process .argv)
folderName.forEach(element => {
    fs.mkdirSync(element);
});
