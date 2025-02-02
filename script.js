// const btn=document.querySelector(".btn")
// const code=document.querySelector(".code");
// function generate(){

//     let value= Math.floor ( Math.random()*0xFFFFFF).toString(16);
//     console.log(value);
//     document.body.style.backgroundColor="#" + value;


// }
// btn.addEventListener("click", generate)

const btn=document.querySelector(".btn")
const code=document.querySelector(".code");


function linearGradient(){
let col1= Math.floor( Math.random()*255);
let col2= Math.floor( Math.random()*255);
let col3= Math.floor( Math.random()*255);
let col4= Math.floor( Math.random()*255);
let col5= Math.floor( Math.random()*255);
let col6= Math.floor( Math.random()*255);
let col7= Math.floor( Math.random()*255);
let col8= Math.floor( Math.random()*255);
let col9= Math.floor( Math.random()*255);
let col10= Math.floor( Math.random()*255);
let col11= Math.floor( Math.random()*255);
let col12= Math.floor( Math.random()*255);

let angle=Math.floor(Math.random()*360);


document.body.style.background=`linear-gradient( ${angle}deg, rgb(${col1}, ${col2}, ${col3}), rgb(${col4}, ${col5}, ${col6}))`

code.textContent=`linear-gradient( ${angle}deg, rgb(${col1}, ${col2}, ${col3}), rgb(${col4}, ${col5}, ${col6}),  rgb(${col7}, ${col8}, ${col8}),  rgb(${col10}, ${col11}, ${col12}))`;

}
btn.addEventListener("click", linearGradient )
