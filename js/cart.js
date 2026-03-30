export function Creatcarts(games,cardP){
for (let i = 0; i < games.length; i++) {
    let div=document.createElement("div")
    div.className="card"
    let image=document.createElement("img")
    image.src=games[i].image
    image.height=200
    image.width=200
    div.appendChild(image)
    let div1=document.createElement("div")
    let h3=document.createElement("h3")
    h3.innerText=games[i].title
    let div2=document.createElement("div")
    let icon=document.createElement("i")
    icon.className="ri-add-large-fill"
    icon.addEventListener("click",()=>{
        console.log(games[i])
    })
    let p=document.createElement("p")
    p.innerText=games[i].price+" $"
    div2.appendChild(icon)
    div2.appendChild(p)
    div1.appendChild(h3)
    div1.appendChild(div2)
    div.appendChild(div2)
    cardP.appendChild(div)
}
}