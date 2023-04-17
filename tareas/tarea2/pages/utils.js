
function createPage(title, content) {
    let html;

    html = '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    html += '<title>' + title + '</title></head><body>'

    html += '<a href="/alumnos">Productos</a> | <a href="/alumnos/nuevo">Nuevo Producto</a>'

    html += '<h1>Mi espectacular pagina web!</h1>'



    html += content
    html += '</body> </html>'

    return html
}

export {
    createPage,
}