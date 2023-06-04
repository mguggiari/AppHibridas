function sumar(array, callback) {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += callback(array[i])
    }
    return suma
}

let array = [2, 3, 5, 8, 7]
console.log("La suma de todo es: ", sumar(array, e => e))

console.log("La suma de los pares es: ", sumar(array, e => e % 2 == 0 ? e : 0))

console.log("La suma de los impares es: ", sumar(array, e => e % 2 != 0 ? e : 0))


// una expresion es cualquier cosa que un resultado

// funciones nombradas 
// funcion tradicion - constructoras y tiene contexto
function nombre(param) {
    return 0
}

// function tradiciones anonimas
// Una expresion funcional
let data = function (params) {
    return
}

/// funciones lambda - flechas son anonimas
// no es constructora y no tiene contexto
let f = (a, b) => {
    return a + b
}

let fa = (a, b) => a + b

let fb = b => b * 2

