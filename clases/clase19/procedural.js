function sumar(array) {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += array[i]
    }
    return suma
}

function sumarPares(array) {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += array[i] % 2 == 0 ? array[i] : 0
    }
    return suma
}

function sumarImpares(array) {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += array[i] % 2 != 0 ? array[i] : 0
    }
    return suma
}

let array = [2, 3, 5, 8, 7]
console.log("La suma de todo es: ", sumar(array))

console.log("La suma de los pares es: ", sumarPares(array))

console.log("La suma de los impares es: ", sumarImpares(array))