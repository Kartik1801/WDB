const argv=process.argv.slice(2);
const franc=require('franc');
const lang = require('langs')   
argv.forEach(element => {
console.log(lang.where('3',franc(element)).name);    
});