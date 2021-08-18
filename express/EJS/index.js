const express =require('express');
const app =express();
const port = process.argv[2];

// ejs is automatically required by express behind the scenes.
// By default, When we us a view engine, express is going to assume 
// that all our views/templates exist in a directory /views
//                         or 
// We can select a directory using views property of app.set()
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('home');
})

app.listen(port, () =>{
    console.log(`listening on port ${port}`);
})