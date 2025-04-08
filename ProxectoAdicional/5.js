function dividirArray(array, numero) {
    let resultado = [];
    for (let i = 0; i < array.length; i += numero) {
        let trozo = array.slice(i, i + numero);
        resultado.push(trozo);
    }

    return resultado;
}

console.log(dividirArray([1, 2, 3, 4], 2)); 
console.log(dividirArray([1, 2, 3, 4], 3)); 
console.log(dividirArray([1, 2, 3, 4, 5, 6, 7], 5));
