import { deleteItem, GetP } from "./storage.js"
export function Pannier() {
    document.getElementById("bodyT").innerHTML = ""
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
            p.className = "Qan"
            p.innerText = res[i].quantity
            div.appendChild(p)
            let icon2 = document.createElement("i")
            icon2.className = "ri-subtract-line cursor-pointer"
            div.appendChild(icon2)
            quantite.appendChild(div)
            let price = document.createElement("td")
            price.className = "pr"
            price.innerText = res[i].price + " $"
            icon1.addEventListener("click", () => {
                res[i].quantity += 1
                localStorage.setItem("productP", JSON.stringify(res))
                Pannier()
            })
            icon2.addEventListener("click", () => {
                if (res[i].quantity > 1) {
                    res[i].quantity -= 1
                } else {
                    res.splice(i, 1)
                }
                localStorage.setItem("productP", JSON.stringify(res))
                Pannier()
            })
            let deleteI = document.createElement("td")
            let icon = document.createElement("i")
            icon.className = "ri-delete-bin-line cursor-pointer"
            icon.addEventListener('click', () => {
                deleteItem(res[i])
            })
            deleteI.appendChild(icon)
            tr.appendChild(name)
            tr.appendChild(imgP)
            tr.appendChild(quantite)
            tr.appendChild(price)
            tr.appendChild(deleteI)
            document.getElementById("bodyT").appendChild(tr)
        }
    }
}