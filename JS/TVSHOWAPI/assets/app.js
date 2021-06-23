const form= document.querySelector("#searchform");

form.addEventListener('submit',async function (e){
    e.preventDefault();
    const searchResult=document.querySelector("h2");
    const r=document.querySelectorAll(".res");
//remove all the result cards if any 
    r.forEach((elem)=>elem.remove());
//remove any result Text If any
    searchResult.innerText="";
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
            searchResult.innerText=`Search Result for '${searchInput}'`   
               showResult(searchInput,res.data);
           }
        else    
            searchResult.innerText=`No Such Show Found <O_O>...`    
    }   
    //Clears the Text input
    input.value="";
})
const showResult= (sr,searchresult)=>{
    const main=document.querySelector(".main");
    const searchResult=document.querySelector("h2");
    main.appendChild(searchResult)
    searchresult
    for(let shows of searchresult){
        const r=document.createElement("div");
        r.setAttribute("class","res");
        console.log(shows);
        const img=document.createElement("img");
        img.src=shows.show.image.medium;
        const name=document.createElement("h3");
        console.log(shows.show.name);
        name.innerText=`${shows.show.name}`;
        r.appendChild(img);
        r.appendChild(name);
        main.appendChild(r);       
    }    
}

