const body=document.querySelector("body");
const randomColor=()=>{return Math.floor(Math.random() *255+1)}
const btn=document.querySelector("button");
const h=document.querySelector("h2");
btn.addEventListener("click",(e)=>{
    const r=randomColor();
    const g=randomColor();
    const b=randomColor();
    const ir=255-r;
    const ig=255-g;
    const ib=255-b;
    h.innerText=`rgb(${r},${g},${b})  `
    body.style.backgroundColor=`rgb(${r},${g},${b})`;
    h.style.color=`rgb(${ir},${ig},${ib})`;
    this.style.color=`rgb(${ir},${ig},${ib})`;
    this.style.borderColor=`rgb(${ir},${ig},${ib})`;
    this.style.boxShadow=`0 0.5em 0.5em -0.4em rgb(${ir},${ig},${ib})`;
    
})