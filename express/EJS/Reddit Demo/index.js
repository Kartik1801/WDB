// Basic Reddit Demo 

const express = require('express');
const app=express();
const path = require('path');
let port= process.argv[2];
 if(!port){port=3000;}

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));
 