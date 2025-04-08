function reverseString(string) {
    let contador = string.length
    let nuevo = ""
    for (let cont = contador-1 ; cont >= 0 ; cont--) {
        nuevo = nuevo + string.substring(cont, cont+1)
    }
    return nuevo
}

console.log(reverseString("hola"))
console.log(reverseString("hueso"))
console.log(reverseString("empanada"))