const figlet=require('figlet')
figlet('Hello!',(e,data)=>{
    if(e){
        console.log('Something went wrong');
        console.dir(e);
        return;
    }
    else
        console.log(data);

})