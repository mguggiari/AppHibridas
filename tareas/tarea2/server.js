const http = require('node:http'); 
const server = http.createServer (function(request, response){
    //console.log('Hola te estoy escuchando');
    //response.write("Hola mundo");
    console.log('url: ' + request.url);
    if(request.url == "/") {
        response.write("Micaela Guggiari");
    } 
    else if (request.url == "/materia"){
        response.write("App Hibridas");
    }
    else if (request.url == "/profesor"){
        response.write("Brian Campos");
    }
    else if(request.url == "/productos") {
        let productos = [];
        productos = [
            {
                id: 1,
                nombre: 'Cafe expresso',
                precio: 200
            },
            {
                id: 2,
                nombre: 'Cafe americano',
                precio: 250
            },
            {
                id: 3,
                nombre: 'Cafe cortado',
                precio: 200
            },
            {
                id: 4,
                nombre: 'Cafe doble',
                precio: 250
            },
            {
                id: 5,
                nombre: 'Cafe lagrima',
                precio: 200
            }
        ]
        response.write(JSON.stringify(productos));
    }
    else {
        response.write("Error 404 url no encontrada :(");
    }

    response.end();
})
server.listen(2025);