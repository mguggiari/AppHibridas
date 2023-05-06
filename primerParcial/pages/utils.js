function createPage(title, content) {
    let html;

    html = '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    html = '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">'
    html = '<link rel="stylesheet" href="/css/styles.css">'
    html += '<title>' + title + '</title></head><body>'

    html += '<a href="../public/index.html">Inicio</a> | <a href="/products/nuevo">Nuevo Producto</a>'

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

export {
    createPage,
    createProductList
}