import { games } from "./data.js";

let categories=[... new Set(games.map(it=>(it.category)))]
categories.unshift("All")
let btnsS=document.getElementById('btns')
for (let i = 0; i < categories.length; i++) {
    console.log(categories[i]);
    
    let btn=document.createElement("button")
    btn.innerText=categories[i]
    btnsS.appendChild(btn)
}
let imgs=games.map(it=>(it.image))
let imgSP=document.getElementById("imgs")
for (let i = 0; i < imgs.length; i++) {
    let img=document.createElement("img")
     img.src=imgs[i]    
     imgSP.appendChild(img)
}