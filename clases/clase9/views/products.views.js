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

export {
    createProductListPage,
    createProductPage,
    createPage
}