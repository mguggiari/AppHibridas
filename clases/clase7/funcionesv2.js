
async function A() {
    console.log('A');
    return 5
}	

async function B() {
    console.log('B');

    k.a;

    //el manejo de A es responsabilidad de B
    return A()
    //forman parte de la resolucion de la promesa de A, then y catch
    .then(function (data) {
        return data * 2
    })
    //"normalizamos" la salida de A 
    .catch(function () {
        return 0
    })
}	

B()
//SECUENCIALIDAD DE LAS PROMESAS

    //data recibo siempre el valor que retorna la funcion A
    //resolver la promesa completa, y como nosotros devolvemos una promesa, va a tratar de resolver esa promesa
    .then (function(data){
        console.log('termino B con exito', data);
        return data * 2
    })
    // se pueden agregar mas then. 
    // si ocurre un error y lo agaramos en el catch estamos atendiendo el error y ejecuta el siguiente then. que haya un error no significa que muera el error, depende de la funcionalidad que quiera tener
    .catch(function (data) {
        console.log("Termino B con error", data.message)
        return 1000
    })
    .then (function(data){
        console.log('termino B con exito', data);
        return data * 2
    })