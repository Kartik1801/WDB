const express =require('express');
const app =express();
const port = process.argv[2];

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.send("Hi");
})

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
})