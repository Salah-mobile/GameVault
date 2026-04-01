const productP = []
export function addItems(product) {
    productP.push(product)
    localStorage.setItem("productP", JSON.stringify(productP))
}
export function GetP() {
    return JSON.parse(localStorage.getItem("productP"))
}