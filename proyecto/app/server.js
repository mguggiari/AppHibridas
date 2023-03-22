const http = require('node:http'); 

function createPage (title, content) {
    html = '<!DOCTYPE html><html><head><meta charset="UTF-8">';
    html += '<title>' + title + '</title></head><body>';
    html += '<h1>Mi espectacular pagina web!</h1>';
    htlm += content 
    html += '</body> </html>';

    return html;
}

function createProductList (productos) {

}

const server = http.createServer (function(request, response){
    
    if(request.url === "/") {
        response.write(createPage('Home', '<p>Micaela Guggiari</p>'));
    } 
    else if (request.url === "/materia"){
        response.write(createPage('Materia','<p>App Hibridas</p>'));
    }
    else if (request.url === "/profesor"){
        response.write(createPage('Profesor','<p>Brian Campos</p>'));
    }
    else if(request.url === "/productos") {
        let content = '<ul>';
        
        response.write('<ul>')
        for (let i = 0; i < productos.length; i++) {
            content += '<li>' + productos[i].nombre + ' - $' + productos[i].precio + '</li>';
        }
        content += '</ul>';
    }
    else {
        response.write('Pagina no encontrada', '<p>Error 404 url no encontrada :(</p>');
    }

    response.end();
})
server.listen(2022);