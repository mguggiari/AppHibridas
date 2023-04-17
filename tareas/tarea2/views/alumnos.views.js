//importamos create page porque no es propio del producto, crea una pagina en general
import { createPage } from '../pages/utils.js';

function createProductListPage(products) {
    //arma la pagina - genera el html y lista los productos
    let html = '<h1>Productos</h1>';
    html += '<ul>';
    for(let i = 0; i < products.length; i++){
        html += `<li>${products[i].name} <a href="/products/${products[i].id}">Ver detalle</a></li>`;
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

export {
    createProductListPage,
    createProductPage,
    createPage,
    createProductFormPage
}