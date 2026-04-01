import { addItems } from "./storage.js"

export function Creatcarts(games, cardP) {
    cardP.innerHTML = ""
    for (let i = 0; i < games.length; i++) {
        let div = document.createElement("div")
        div.className = "bg-red-700 flex flex-col items-center rounded-[20px] "
        let p2 = document.createElement("h3")
        p2.className = "p-4 text-[40px]"
        p2.innerText = games[i].title
        div.appendChild(p2)
        let image = document.createElement("img")
        image.src = games[i].image
        image.height = 200
        image.width = 200
        image.className = "rounded-[30px]"
        div.appendChild(image)
        let div1 = document.createElement("div")
        let h3 = document.createElement("h3")
        h3.innerText = games[i].title
        let div2 = document.createElement("div")
        div2.className = "flex justify-between w-[140px] py-3 px-3 bg-black my-5 rounded-[30px]"
        let icon = document.createElement("i")
        icon.className = "ri-add-large-fill cursor-pointer"
        icon.addEventListener("click", () => {
            addItems(games[i])
        })
        let p = document.createElement("p")
        p.innerText = games[i].price + " $"
        div2.appendChild(icon)
        div2.appendChild(p)
        div1.appendChild(h3)
        div1.appendChild(div2)
        div.appendChild(div2)
        cardP.appendChild(div)
    }
}