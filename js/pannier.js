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
            p.className = "Qan"  // Changed from id to class
            p.innerText = 1
            div.appendChild(p)
            let icon2 = document.createElement("i")
            icon2.className = "ri-subtract-line cursor-pointer"
            div.appendChild(icon2)
            quantite.appendChild(div)
            let price = document.createElement("td")
            price.className = "pr"
            price.innerText = res[i].price + " $"
            icon1.addEventListener("click", () => {
                let qtyElement = div.querySelector(".Qan")  // Added div.querySelector
                qtyElement.innerText = parseInt(qtyElement.innerText) + 1
                let priceElement = tr.querySelector(".pr")  // Added tr.querySelector
                priceElement.innerText = res[i].price * parseInt(qtyElement.innerText) + " $"
            })
            icon2.addEventListener("click", () => {
                let qtyElement = div.querySelector(".Qan")  // Added div.querySelector
                if (parseInt(qtyElement.innerText) > 1) {
                    qtyElement.innerText = parseInt(qtyElement.innerText) - 1
                    let priceElement = tr.querySelector(".pr")  // Added tr.querySelector
                    priceElement.innerText = res[i].price * parseInt(qtyElement.innerText) + " $"
                }
            })
            tr.appendChild(name)
            tr.appendChild(imgP)
            tr.appendChild(quantite)
            tr.appendChild(price)
            document.getElementById("bodyT").appendChild(tr)
        }
    }
}