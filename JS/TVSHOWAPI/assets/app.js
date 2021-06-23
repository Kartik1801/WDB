const form= document.querySelector("#searchform");

form.addEventListener('submit',async function (e){
    e.preventDefault();
    
    const SearchResult=document.querySelector("h2");
    const r=document.querySelectorAll(".res");
    //remove all the result cards if any 
    r.forEach((elem)=>elem.remove());
    //remove any result Text If any
    SearchResult.innerText="";
    //get Search Query
    const searchInput=form.elements.query.value;
    //Get parameters to send to URL
    const param={ params: { q: searchInput } }
    //Send Request to requested APIs
    const  res= await axios.get(`http://api.tvmaze.com/search/shows`,param);
    //Function Call to display result obtained
    showResult(searchInput,res.data);
    //Clears the Text input
    input.value="";
})
const showResult= (searchInput,searchresult)=>{
    // To display Search Result Text
    const SearchResult=document.querySelector("h2");
    if(searchresult===[]){
        SearchResult.innerText=`No Such Show Found <O_O>...`
    }
    else
    {
    const main=document.querySelector(".main");
    SearchResult.innerText=`Search Result for "${searchInput}"`;
    //Function call to Create & Display cards for all results:
    getData(searchresult)
    }
}
const getData= (shows) =>{
    for(let show of shows){
        
     if(show.show.image)
     {
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