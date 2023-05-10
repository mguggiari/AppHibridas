
import { createPage } from '../pages/utils.js';

function createPageSections(proyectos) {
    let html;
    html = `<h1 class="text-center mt-2 mb-5">Nuestra selección de proyectos</h1>`
    html += '<div class="d-flex flex-wrap justify-content-around mt-5">'
    proyectos.forEach(function(proyecto){
        html += 
        `<div class="card mt-2" style="width: 18rem">
            <h2 class="card-header">${proyecto.section}</h2>
            <img src="${proyecto.img}" class="card-img-top">
            <div class="card-body">
                <h3 class="card-title">${proyecto.name}</h3>
                <p class="card-text">${proyecto.description}</p>
                <div>
                    <p>Tecnologías utilizadas en este proyecto:</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${proyecto.technologies}</li>
                    </ul>
                </div>
                <a href="${proyecto.link}" class="btn btn-primary">Ver</a>
            </div>
        </div>`
    })
    html += '</div>'
    
    return createPage(proyectos[0].section, html);
}

export {
    createPage,
    createPageSections
    
}