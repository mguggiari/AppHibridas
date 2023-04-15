function createPage(title, content) {
    let html;

    html = '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    html += '<title>' + title + '</title></head><body>'
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