import { addItems } from "./storage.js"

export function Creatcarts(games, cardP) {
    cardP.innerHTML = ""
    for (let i = 0; i < games.length; i++) {
        let div = document.createElement("div")
        div.className = `
            group
            bg-red-700
            rounded-3xl
            m-4
            p-4
            flex
            flex-col
            border
            border-black
        `
        let image = document.createElement("img")
        image.src = games[i].image
        image.className = `
            w-full
            h-[180px]
            object-cover
            rounded-[20px]
        `
        let title = document.createElement("h3")
        title.innerText = games[i].title
        title.className = `
            text-white
            px-4
            mt-4
        `
        let btnBox = document.createElement("div")
        btnBox.className = `
            flex
            justify-between
            items-center
            w-full
            px-4
            pb-5
            pt-2
            mt-auto
        `

        let price = document.createElement("p")
        price.innerText = "$ " + games[i].price
        price.className = `
            text-white
        `
        let icon = document.createElement("i")
        icon.className = `
            ri-add-line 
            text-xl 
            cursor-pointer 
            bg-gray-900 
            text-white 
            p-2 
            rounded-xl 
            hover:bg-green-500 
            transition-colors 
        `

        icon.addEventListener("click", () => {
            addItems(games[i])
            alert("add with success");

        })
        btnBox.appendChild(price)
        btnBox.appendChild(icon)
        div.appendChild(image)
        div.appendChild(title)
        div.appendChild(btnBox)
        cardP.appendChild(div)
    }
}