
import { createPage } from '../pages/utils.js';

function createPageSectionVinos(wines) {
    let html;
    html += `<h1 class="text-center mt-2 mb-5">Nuestra selección de vinos ${wines.uva}</h1>`
    html += `<div class="d-flex flex-wrap justify-content-around mt-5">`
    wines.forEach(function(wine){
        html += 
        `<div class="card" style="width: 18rem; height: 18rem;">
            <img src="${wine.img}" class="card-img-top">
            <div class="card-body">
                <h2 class="card-title">${wine.nombre}</h2>
                <a href="/vinos/:idVino" class="btn btn-primary">Ver más</a>
            </div>
        </div>`
    })
    html += '</div>'

    return createPage(wines.nombre, html);
}

export {
    createPageSectionVinos,
    createPage
}