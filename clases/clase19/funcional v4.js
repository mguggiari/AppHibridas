let array = [2, 8, 5, 8, 7]
console.log("La suma de todo es: ", array.reduce((prev, e) => prev + e, 0))
console.log("La suma de los pares es: ", array.reduce((prev, e) => prev + (e % 2 == 0 ? e : 0), 0))
console.log("La suma de los impares es: ", array.reduce((prev, e) => prev + (e % 2 != 0 ? e : 0), 0))

console.log("El primer impar: ", array.find(e => e % 2 != 0))
console.log("Todos los pares: ", array.filter(e => e % 2 == 0))
console.log("Transformador: ", array.map(e => `<span>Numero: ${e}</span>`))
console.log("Todos los impares duplicados: ", array.filter(e => e % 2 != 0).map(e => e * 2))