
import { createPage } from '../pages/utils.js';

function createPageSectionVinos(vinos) {
    let html = '<h1>Nuestra selección de vinos</h1>';
    //html += '<div class="card" style="width: 18rem;">'
    // for(let i = 0; i < vinos.length; i++){    
    //     html += `
    //     <img src="..." class="card-img-top" alt="..."></img>
    //     <div class="card-body">'
    //         <h2 class="card-title">${vinos[i].tipoVino}</h2>
    //         <p class="card-text">${vinos[i].descripcion}</p>
    //         <a href="#" class="btn btn-primary">Ver más</a> 
    //     </div>`
    //  }    
    return createPage(vinos.uva, html);
}

export {
    createPageSectionVinos,
    createPage
}