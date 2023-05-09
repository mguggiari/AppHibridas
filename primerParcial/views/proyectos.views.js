
import { createPage } from '../pages/utils.js';

function createPageSections(proyectos) {
    let html;
    html = `<h1 class="text-center mt-2 mb-5">Nuestra selección de vinos ${proyectos[0].section}</h1>`
    html += '<div class="d-flex flex-wrap justify-content-around mt-5">'
    proyectos.forEach(function(proyecto){
        html += 
        `<div class="card" style="width: 18rem; height: 18rem;">
            <img src="${proyecto.img}" class="card-img-top">
            <div class="card-body">
                <h2 class="card-title">${proyecto.name}</h2>
            </div>
        </div>`
    })
    html += '</div>'
    
    return createPage(proyectos[0].section, html);
}

// function createPageDetalleVino(wine) {
//     let html;
//     html += '<div class="container">'
//     html += `<h1 class="text-center mt-2 mb-5">${wine.nombre}</h1>`
//     html += '</div>'

//     return createPage(wine.nombre, html);
// }

export {
    createPage,
    createPageSections
    
}