const form= document.querySelector("#searchform");
form.addEventListener('submit',async function (e){
e.preventDefault();
const searchinput=form.elements.showsearch.value;
const  res= await axios.get(`http://api.tvmaze.com/search/shows?q=${searchinput}`)
getImg(res.data);
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