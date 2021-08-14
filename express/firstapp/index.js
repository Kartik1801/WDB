// Getting Startede with Express
const exp = require('express');
const app=exp();

app.use(()=>{
    console.log('Something happened')
})

app.get("GOT YOUR REQUEST !",(req,res)=>{
    console.log("Aye Aye, Seniore! ")
})

app.listen(3000,()=>{
console.log('Listening on port 3000')
})