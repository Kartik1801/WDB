const exp = require('express');
const app=exp();

app.use(()=>{
    console.log('Something happened')
})

app.listen(3000,()=>{
console.log('Listening on port 3000')
})