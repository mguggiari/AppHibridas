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

    html += `<a href="/alumnos/${alumno.legajo}/editar">Modificar</a> | <a href="/alumnos/${alumno.legajo}/borrar">Eliminar</a>`

    return createPage(alumno.legajo, html)
}

function createAlumnoNuevo(){
    let html = '<h1>Crear Alumno</h1>'
    html += '<form action="/alumnos/nuevo" method="POST">'
    html += '<input type="text" name="nombre" placeholder="Nombre">'
    html += '<input type="text" name="apellido" placeholder="Apellido">'
    html += '<input type="number" name="año" placeholder="Año">'
    html += '<input type="number" name="legajo" placeholder="Legajo">'
    html += '<button type="submit">Crear</button>'
    html += '</form>'

    return createPage('Crear Alumno', html)
}

function editarAlumnoPage(alumno){
    let html = '<h1>Modificar Alumno</h1>'
    html += 
    `<form action="/alumnos/${alumno.legajo}/editar" method="POST">'
    <input type="text" name="nombre" placeholder="Nombre" value="${alumno.nombre}">
    <input type="text" name="apellido" placeholder="Apellido" value="${alumno.apellido}">
    <input type="number" name="año" placeholder="Año" value="${alumno.año}">
    <input type="number" name="legajo" placeholder="Legajo" value="${alumno.legajo}">
    <button type="submit">Modificar</button>'
    </form>`

    return createPage('Modificar Alumno', html)
}

function borrarAlumnoPage(alumno) {
    let html = `<h1>${alumno.nombre}${alumno.apellido}</h1>`
    html += `<p>${alumno.año}</p>`
    html += `<p>${alumno.legajo}</p>`

    html += `<form action="/alumnos/${alumno.legajo}/borrar" method="POST">
    <p>Esta segudo de que quiere eliminarlo?</p>
        <button type="submit">Elimnar</button>
    </form>`

    return createPage(alumno.nombre, html)
}

export {
    createAlumnosListPage,
    createAlumnoPage,
    createPage,
    createAlumnoNuevo,
    editarAlumnoPage,
    borrarAlumnoPage
}