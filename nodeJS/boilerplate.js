// Script to create Directory based on passed arguments with html css and js files.

const fs = require('fs');
const path = require('path')
const folderName= process.argv.slice(2);
try{
folderName.forEach(element => {
    fs.mkdirSync(element);
    fs.mkdirSync(`${path.join(element)}/Assets`);
    fs.writeFileSync(`${path.join(element,'index.html')}`,'');
    fs.writeFileSync(`${path.join(element,'/Assets/app.css')}`,''); 
    fs.writeFileSync(`${path.join(element,'/Assets/app.js')}`,''); 
});
}
catch(e){
    console.log("Something is wrong!");
    console.log(e);
}