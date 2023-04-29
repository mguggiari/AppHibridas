//importamos create page porque no es propio del producto, crea una pagina en general
import { createPage } from '../pages/utils.js';

function createAlumnosListPage(alumnos) {
    //arma la pagina - genera el html y lista los productos
    let html = '<h1>Listado de alumnos</h1>';
    html += '<ul>';

    for(let i = 0; i < alumnos.length; i++){
        html += `<li>${alumnos[i].nombre} <a href="/alumnos/${alumnos[i].legajo}">Ver detalle del alumno</a></li>`;
    }
    
    html += '</ul>';

    return createPage('Alumnos', html);
}

function createAlumnoPage(alumno) {
    let html = `<h1>${alumno.nombre} ${alumno.apellido} - ${alumno.año}</h1>`
    html += `<p>Legajo:${alumno.legajo}</p>`

    return createPage(alumno.legajo, html)
}

export {
    createAlumnosListPage,
    createAlumnoPage,
    createPage
}