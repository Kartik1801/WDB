const form= document.querySelector("#searchform");

form.addEventListener('submit',async function (e){
    e.preventDefault();
    const input=form.elements.showsearch;
    const searchinput=input.value;
    //const  res= await axios.get(`http://api.tvmaze.com/search/shows?q=${searchinput}`)
    const param={ params: { q: searchinput } }
    const  res= await axios.get(`http://api.tvmaze.com/search/shows`,param);
    getImg(res.data);
    input.value="";
})

const getImg= (shows) =>{
    for(let result of shows){
    if(result.show.image){
    const img=document.createElement("img");
    img.src=result.show.image.medium;
    document.querySelector("body").append(img);
    }
}
}

//TO DO 
/* 
Dynamically delete Images
Show Cards with full details of Shows 
Dynamic Search ... 
*/