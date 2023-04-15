// una funcion asincronica al ser llamada devuelve una promesa
// una promesa es un objeto que representa el resultado de una operacion asincronica
async function A() {
    console.log('A');

    let j;

    j = a +b; //genera un error

    return 5
}	

A() // no siempre trabajamos con los tres, depende de la funcion
    .then(function(data){
        console.log('termino A con exito', data);
    })
    .catch(function(data){
        console.log('termino A con error', data.message);
    })
    .finally(function(){
        console.log('termino A');
    })

console.log('despues de A');

//console.log(A());
//let prom = A();
//prom.then(function(){
//    console.log('termino A con exito');
//})

/*
* then, catch, finally -> son metodos de las promesas
++.then-> que es lo que queremos que haga cuando la funcion termina de forma correcta. ¡La promesa se resuelve!
++.catch-> que es lo que queremos que haga cuando la funcion es interrumpida abruptamente, un error.¡La promesa se rechaza!
++.finally-> cuando la funcion termina de forma correcta o mal. ¡La promesa se resuelve o se rechaza! siempre lo llama cuando termina la funcion
*/