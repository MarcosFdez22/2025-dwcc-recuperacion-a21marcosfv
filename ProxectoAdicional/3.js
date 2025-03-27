function isPalindrome(string) {
    let contador = string.length
    let nuevo = ""
    for (let cont = contador-1 ; cont >= 0 ; cont--) {
        nuevo = nuevo + string.substring(cont, cont+1)
    }
    if (nuevo == string) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome("cerveza"))
console.log(isPalindrome("ana"))
console.log(isPalindrome("ramar"))