// Script to create Directory based on passed arguments with html css and js files.

const fs = require('fs');
const folderName= process.argv.slice(2)
try{
folderName.forEach(element => {
    fs.mkdirSync(element);
    fs.writeFileSync(`${element}/index.html`)
    fs.mkdirSync(`${element}/Assets`);
    fs.writeFileSync(`${element}/Assets/app.css`) 
    fs.writeFileSync(`${element}/Assets/app.js`) 
});
}
catch(e){
    console.log("Something is wrong!");
    console.log(e);
}