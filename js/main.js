import { Creatcarts } from "./cart.js";
import { games } from "./data.js";
import { Pannier } from "./pannier.js";
import { addItems, GetP } from "./storage.js";
Pannier()
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
    let allBtns = btnsS.querySelectorAll("button")
    allBtns.forEach(b => {
      b.classList.remove("bg-black", "text-white", "border-2", "border-solid", "border-red-700")
      b.classList.add("bg-white", "text-black")
    })
    btn.classList.remove("bg-white", "text-black")
    btn.classList.add("bg-black", "text-white", "border-2", "border-red-700")
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
let imgs = games
  .sort((a, b) => a.price - b.price)
  .map(it => it.image)
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

let btn = document.getElementById('btn')
btn.addEventListener("click", () => {
  let prices = document.querySelectorAll(".pr")
  let somme = 0
  prices.forEach(it => somme += parseInt(it.innerText))
  alert(`your commande is confirmed : the total price ${somme}`)
  localStorage.clear()
  console.log("commander");

  Pannier()
})
