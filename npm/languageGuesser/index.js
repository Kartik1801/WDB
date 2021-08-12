// Language Guess
const argv=process.argv.slice(2);
const franc=require('franc');
const lang = require('langs')   
element=argv[0]
const code=franc(element);

if(code!='und')
    console.log(lang.where('3',code).name);
else
    console.log('Could not Find a proper match. Try Another Sample');        
