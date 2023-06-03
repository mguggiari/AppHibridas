function createPage(title, content) {
    let html;

    html = '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    html += '<link rel="stylesheet" href="/css/styles.css">'
    html += '<title>' + title + '</title></head><body>'

    html += '<a href="/products">Productos</a> | <a href="/products/nuevo">Nuevo Producto</a>'

    html += '<h1>Mi espectacular pagina web!</h1>'



    html += content
    html += '</body> </html>'

    return html
}

function createProductList(products) {
    let content = '<ul>'
    for (let i = 0; i < products.length; i++) {
        content += '<li>' + products[i].name + '</li>'
    }
    content += '</ul>'
    return content
}

/*
module.exports = {
    createPage,
    createProductList
}
*/

export {
    createPage,
    createProductList
}
