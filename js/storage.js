import { Pannier } from "./pannier.js"
let productP = []
export function addItems(product) {
    let res = GetP()
    if (Array.isArray(res))
        productP = res
    productP.push(product)
    localStorage.setItem("productP", JSON.stringify(productP))
    Pannier()
}
export function GetP() {
    return JSON.parse(localStorage.getItem("productP"))
}
export function deleteItem(item) {
    let res = GetP()

    let index = res.findIndex(p => p.id === item.id)

    if (index !== -1) {
        res.splice(index, 1)
    }

    localStorage.setItem("productP", JSON.stringify(res))
    Pannier()
}
