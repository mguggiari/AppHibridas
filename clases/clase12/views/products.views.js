//importamos create page porque no es propio del producto, crea una pagina en general
import { createPage } from '../pages/utils.js';

function createProductListPage(products) {
    //arma la pagina - genera el html y lista los productos
    let html = '<h1>Productos</h1>';
    html += '<ul>';
    for(let i = 0; i < products.length; i++){
        html += `<li>${products[i].name} <a href="/products/${products[i].id}">Ver detalle</a><a href="/products/${products[i].id}/edit">Editar</a><a href="/products/${products[i].id}/delete">Eliminar</a></li>`;
    }
    html += '</ul>';

    return createPage('Productos', html);
}

function createProductPage(product) {
    //genera el detalle del producto
    let html = `<h1>${product.name}</h1>`;
    html += `<p>${product.description}</p>`;
    html += `<p>Precio: $${product.price}</p>`;

    return createPage(product.name, html);
}

function createProductFormPage() {
    let html = '<h1>Crear producto</h1>';
    html += '<form action="/products/nuevo" method="POST">';
    html += '<label for="name">Nombre</label>';
    html += '<input type="text" name="name" id="name">';
    html += '<label for="description">Descripcion</label>';
    html += '<input type="text" name="description" id="description">';
    html += '<label for="price">Precio</label>';
    html += '<input type="text" name="price" id="price">';
    html += '<button type="submit">Crear</button>';
    html += '</form>';

    return createPage('Crear producto', html);
}

function createProductEditFormPage(product) {
    let html = '<h1>Modificar producto</h1>';
    html += 
        `<form action="/products/${product.id}/edit" method="POST"> //aca le estas devolviendo el id del producto que se esta editando
            <label for="name">Nombre</label>
            <input type="text" name="name" id="name" value="${product.name}">
            <label for="description">Descripcion</label>
            <input type="text" name="description" id="description" value="${product.description}">
            <label for="price">Precio</label>
            <input type="text" name="price" id="price" value="${product.price}">
            <button type="submit">Modificar</button>
        </form>`

    return createPage('Modificar producto', html);
}

function createDeleteProductFormPage(product) {
    let html = '<h1>Confirma la eliminacion del producto</h1>';
    html += `<p>${product.name}</p>`;
    html += `<p>${product.description}</p>`;
    html += `<p>${product.price}</p>`;
    html += 
    `<form action="/products/${product.id}/delete" method="POST"> 
        <button type="submit">Elimianr</button>
    </form>`

    return createPage(product.name, html);
}

export {
    createProductListPage,
    createProductPage,
    createPage,
    createProductFormPage,
    createProductEditFormPage,
    createDeleteProductFormPage
}