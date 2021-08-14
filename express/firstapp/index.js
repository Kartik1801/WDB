// Getting Started with Express
const exp = require('express');
const app=exp();
const port=process.argv[2]

    app.use(()=>{
        console.log('Something happened')
    })
    
    app.get("*",(req,res)=>{
        return("Aye Aye, Seniore! ")
    })
    
    app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
    })

