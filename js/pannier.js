import { GetP } from "./storage.js"
export function Pannier() {
    let res = GetP()
    if (res != null) {
        document.getElementById("bodyT").innerHTML = ""
        for (let i = 0; i < res.length; i++) {
            let tr = document.createElement("tr")
            let name = document.createElement("td")
            name.innerText = res[i].title
            let imgP = document.createElement("td")
            let img = document.createElement("img")
            img.src = res[i].image
            img.width = 100
            imgP.appendChild(img)
            let quantite = document.createElement("td")
            let div = document.createElement("div")
            div.className = "flex flex-row gap-[20px]"
            let icon1 = document.createElement("i")
            icon1.className = "ri-add-large-line cursor-pointer"
            div.appendChild(icon1)
            let p = document.createElement("p")
            p.id = "Qan"
            p.innerText = 1
            div.appendChild(p)
            let icon2 = document.createElement("i")
            icon2.className = "ri-subtract-line cursor-pointer"
            div.appendChild(icon2)
            quantite.appendChild(div)
            let price = document.createElement("td")
            price.id = "pr"
            price.innerText = res[i].price + " $"
            tr.appendChild(name)
            tr.appendChild(imgP)
            tr.appendChild(quantite)
            tr.appendChild(price)
            icon1.addEventListener("click", () => {
                document.getElementById("Qan").innerText = parseInt(document.getElementById("Qan").innerText) + 1
                document.getElementById("pr").innerText = res[i].price * parseInt(document.getElementById("Qan").innerText) + " $"

            })
            icon2.addEventListener("click", () => {
                if (parseInt(document.getElementById("Qan").innerText) > 1) {
                    document.getElementById("Qan").innerText = parseInt(document.getElementById("Qan").innerText) - 1
                    document.getElementById("pr").innerText = res[i].price * parseInt(document.getElementById("Qan").innerText) + " $"
                }
            })
            document.getElementById("bodyT").appendChild(tr)
        }
    }
}