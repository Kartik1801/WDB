// Getting Started with Express
const exp = require('express');
const app=exp();
const port=process.argv[2]
if(port)
{
    //Every time a request is made use function is executed    
    app.use((req,res)=>{
        console.log('We got your request');
        res.send({'color': 'green', 'name':'Xmen'});  
    })
    app.listen(port,()=>{
        console.log(`Listening on port ${port}`);
    })
}
else
    console.log('Enter a port no!');