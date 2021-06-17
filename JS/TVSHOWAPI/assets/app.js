const form= document.querySelector("#searchform");
form.addEventListener('submit',async function (e){
e.preventDefault();
const searchinput=form.elements.showsearch.value;
const  res= await axios.get(`http://api.tvmaze.com/search/shows?q=${searchinput}`)
console.log(res.data);
})
