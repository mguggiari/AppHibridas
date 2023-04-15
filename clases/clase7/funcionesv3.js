
async function A() {
    console.log('A');
    return 5
}	

async function B() {
    console.log('B');
    return 6
}	

async function C() {
    console.log('C');
    return 7
}

async function D() {
    console.log('D');
    return 8
}   

//"forzando el sincronismo" - ejecucion secuencial de las funciones
async function Suma() {
    let suma = 0;
    return A()
    .then(function (data) {
        suma+=data;
        return B()
    })
    .then(function (data) {
        suma+=data;
        return C()
    })
    .then(function (data) {
        suma+=data;
        return D()
    })
    .then(function (data) { 
        suma+=data;
        return suma
    })
}

//AWAIT: es un operador, que espera a que termine la promesa. te devuelve el valor de la promesa. solo dentro de una funcion asincronica. Si queres mantener el sincronismo
async function Suma2() {    
    let suma = 0;
    suma+= await A();
    suma+= await B();
    suma+= await C();
    suma+= await D();
    return suma
}