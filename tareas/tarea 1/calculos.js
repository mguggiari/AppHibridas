//Crear una función que reciba un Array de N elementos y devuelva el mayor valor de ese array
let num1;
let num2;
let resultado;

function suma(num1, num2) {
    num1 = 5;
    num2 = 10;
    resultado = num1 + num2;
    return resultado;
}
console.log(suma(num1, num2));

function division (num1, num2) {
    num1= 20;
    num2= 0;
    resultado = num1 / num2;
    return resultado;
}
console.log(division(num1,num2));

//let array = [1, 2, 3, 4, 5];
let array =  [2,8,9,7,5,6];
function mayorValor(array) {
    let mayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    return mayor;
}
console.log(mayorValor(array));