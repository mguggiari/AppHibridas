const http = require('node:http'); 
const server = http.createServer (function(request, response){
    //console.log('Hola te estoy escuchando');
    //response.write("Hola mundo");
    response.write('<h1>Mi espectacular pagina web!</h1>');
    response.write ('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>App Hibridas</title></head><body>');
    console.log('url: ' + request.url);
    if(request.url == "/") {
        response.write('<p>Micaela Guggiari</p>');
    } 
    else if (request.url == "/materia"){
        response.write('<p>App Hibridas</p>');
    }
    else if (request.url == "/profesor"){
        response.write('<p>Brian Campos</p>');
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
        response.write('<ul>')
        for (let i = 0; i < productos.length; i++) {
            response.write('<li>' + productos[i].nombre + ' - $' + productos[i].precio + '</li>')
        }
        response.write('</ul>')
    }
    else {
        response.write('<p>Error 404 url no encontrada :(</p>');
    }

    response.end();
})
server.listen(2022);