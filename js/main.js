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