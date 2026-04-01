import { Creatcarts } from "./cart.js";
import { games } from "./data.js";
import { addItems, GetP } from "./storage.js";

let categories = [... new Set(games.map(it => (it.category)))]
categories.unshift("All")
let btnsS = document.getElementById('btns')
for (let i = 0; i < categories.length; i++) {
  let btn = document.createElement("button")
  btn.className = "bg-white text-black mx-2 px-4 py-2 rounded-full"
  btn.innerText = categories[i]
  btn.addEventListener("click", () => {
    let array = games.filter(it => it.category == categories[i])
    Creatcarts(array, cardP)
    if (categories[i] == "All") {
      Creatcarts(games, cardP)
    }
  })
  btnsS.appendChild(btn)

}
let serachI = document.getElementById("ser")
serachI.addEventListener("input", () => {
  let array = games.filter(it => it.title.includes(document.getElementById("ser").value))
  Creatcarts(array, cardP)

})
let imgs = games.map(it => (it.image))
let imgSP = document.getElementById("imgs")
for (let i = 0; i < imgs.length; i++) {
  let img = document.createElement("img")
  img.src = imgs[i]
  img.width = 100
  img.className = "rounded-[20px]"
  img.addEventListener("click", () => {
    const overlay = document.getElementById("overlay");
    const modalTitle = document.getElementById("modalTitle");
    const modalImg = document.getElementById("modalImg");
    const modalPrice = document.getElementById("modalPrice");
    const icon = document.getElementById("ic")
    icon.addEventListener("click", () => {
      addItems(games[i])
      alert("the product add with success")
    })
    modalTitle.innerText = games[i].title;
    modalImg.src = games[i].image;
    modalPrice.innerText = games[i].price + " $";
    overlay.classList.remove("hidden");
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.add("hidden");
      }
    });
  })
  imgSP.appendChild(img)
}
let page2 = document.getElementById("secondPage")
let res = GetP()
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
  let icon1 = document.createElement("i")
  quantite.innerText = 0
  let price = document.createElement("td")
  price.innerText = res[i].price
  tr.appendChild(name)
  tr.appendChild(imgP)
  tr.appendChild(quantite)
  tr.appendChild(price)
  document.getElementById("bodyT").appendChild(tr)
}

let cardP = document.getElementById("cards")
Creatcarts(games, cardP)
let items = document.querySelectorAll("#menuBottom li i");
let pages = ["firstPage", "secondPage"]
document.getElementById(pages[0]).style.display = ""
document.getElementById(pages[1]).style.display = "none"
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", () => {
    items.forEach(el => el.classList.remove("bg-black", "text-white"));
    items[i].classList.add("bg-black", "text-white");
    for (let j = 0; j < pages.length; j++) {
      document.getElementById(pages[j]).style.display = "none";
    }
    document.getElementById(pages[i]).style.display = "block";
  });
}