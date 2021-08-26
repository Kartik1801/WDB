// Basic Reddit Demo 

const express = require('express');
const app=express();
const path = require('path');

const redditData=require('./data.json');
console.log(redditData);
let port= process.argv[2];
 if(!port){port=3000;}

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));



app.get("*",(req,res) => {
    res.render('404')
})

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
})