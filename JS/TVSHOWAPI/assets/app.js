const form= document.querySelector("#searchform");

form.addEventListener('submit',async function (e){
    e.preventDefault();
    const input=form.elements.query;
    const searchinput=input.value;
    //const  res= await axios.get(`http://api.tvmaze.com/search/shows?q=${searchinput}`)
    const param={ params: { q: searchinput } }
    const  res= await axios.get(`http://api.tvmaze.com/search/shows`,param);
    const sr=document.createElement("h2");
    const main=document.querySelector(".main");
    sr.innerText=`Search Result for "${searchinput}"`;
    main.appendChild(sr);
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