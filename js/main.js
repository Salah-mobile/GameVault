import { Creatcarts } from "./cart.js";
import { games } from "./data.js";

let categories=[... new Set(games.map(it=>(it.category)))]
categories.unshift("All")
let btnsS=document.getElementById('btns')
for (let i = 0; i < categories.length; i++) {
    let btn=document.createElement("button")
    btn.innerText=categories[i]
    btn.className="btnC"
    btnsS.appendChild(btn)
}
let imgs=games.map(it=>(it.image))
let imgSP=document.getElementById("imgs")
for (let i = 0; i < imgs.length; i++) {
    let img=document.createElement("img")
     img.src=imgs[i]    
     imgSP.appendChild(img)
}
let cardP=document.getElementById("cards")
Creatcarts(games,cardP)
let items = document.querySelectorAll("#menuBottom li i");
let pages=["firstPage","secondPage"]
document.getElementById(pages[0]).style.display=""
document.getElementById(pages[1]).style.display="none"
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", () => {
    for (let j = 0; j < pages.length; j++) {
      document.getElementById(pages[j]).style.display = "none";
    }
    items.forEach(el => el.classList.remove("active"));

    items[i].classList.add("active");
    document.getElementById(pages[i]).style.display = "block";

  });
}