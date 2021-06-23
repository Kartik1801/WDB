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
    const input=form.elements.query
    const searchInput=input.value;

    if(searchInput)
    {
    //Get parameters to send to URL
        const param={ params: { q: searchInput } }
    //Send Request to requested APIs
        const  res= await axios.get(`http://api.tvmaze.com/search/shows`,param);
    //Function Call to display result obtained
        if(res.data)
           { 
               showResult(res.data);
           }
        else    
            SearchResult.innerText=`No Such Show Found <O_O>...`    
    }   
    //Clears the Text input
    input.value="";
})
const showResult= (searchresult)=>{
    const main=document.querySelector(".main");
    for(let shows of searchresult){
        const r=document.createElement("div");
        r.setAttribute("class","res");
        console.log(shows);
        const img=document.createElement("img");
        img.src=shows.show.image.medium;
        const name=document.createElement("h3");
        name.innerText=`${shows.show.name}`;
        r.appendChild(img);
        r.appendChild(name);
        main.appendChild(r);       
    }    
}

