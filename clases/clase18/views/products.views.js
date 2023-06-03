import { createPage } from '../pages/utils.js'

function createProductListPage(products) {
    let html = '<h1>Lista de Productos</h1>'
    html += '<ul>'

    for (let i = 0; i < products.length; i++) {
        html += `<li>${products[i].name} <a href="/products/${products[i]._id}">Ver</a> <a href="/products/${products[i]._id}/edit">Modificar</a> <a href="/products/${products[i]._id}/delete">Eliminar</a></li>`
    }

    html += '</ul>'

    return createPage('Productos', html)
}

function createProductPage(product, reviews) {
    let html = `<h1>${product.name}</h1>`
    html += `<p>Precio: $${product.price}</p>`
    html += `<p>${product.description}</p>`

    html += `<h2>Comentarios</h2>`
    html += `<ul>`
    for (let i = 0; i < reviews.length; i++) {
        html += `<li>
            Autor: ${reviews[i].author}<br/>
            Valoracion: ${reviews[i].score}<br/>
            Comentario: ${reviews[i].comment}<br/>
        </li>`
    }
    html += `</ul>`




    return createPage(product.name, html)
}

function createProductFormPage() {
    let html = '<h1>Crear Producto</h1>'
    html += '<form action="/products/nuevo" method="POST">'
    html += '<input type="text" name="name" placeholder="Nombre">'
    html += '<input type="text" name="price" placeholder="Precio">'
    html += '<input type="text" name="description" placeholder="Descripción">'
    html += '<button type="submit">Crear</button>'
    html += '</form>'

    return createPage('Crear Producto', html)
}


function createEditProductFormPage(product) {
    let html = '<h1>Modificar Producto</h1>'
    html += `
    <form action="/products/${product._id}/edit" method="POST">
        <input type="text" name="name" placeholder="Nombre" value="${product.name}">
        <input type="text" name="price" placeholder="Precio" value="${product.price}">
        <input type="text" name="description" placeholder="Descripción" value="${product.description}">
        <button type="submit">Modificar</button>
    </form>`

    return createPage('Modificar Producto', html)
}

function createDeleteProductFormPage(product) {
    let html = `<h1>${product.name}</h1>`
    html += `<p>Precio: $${product.price}</p>`
    html += `<p>${product.description}</p>`

    html += `<form action="/products/${product._id}/delete" method="POST">
    <p>Esta segudo de que quiere eliminarlo?</p>
        <button type="submit">Elimnar</button>
    </form>`

    return createPage(product.name, html)
}


export {
    createProductListPage,
    createProductPage,
    createPage,
    createProductFormPage,
    createEditProductFormPage,
    createDeleteProductFormPage
}