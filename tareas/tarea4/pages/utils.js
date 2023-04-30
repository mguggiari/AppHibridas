
function createPage(title, content) {
    let html;

    html = '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    html += '<title>' + title + '</title></head><body>'

    html += '<a href="/alumnos">Listado de alumnos</a> | <a href="/alumnos/nuevo">Agregar nuevo alumno</a>'

    html += '<h1>Lista de alumnos</h1>'

    html += content
    html += '</body> </html>'

    return html
}

function createListaAlumnos(alumnos) {
    let content = '<ul>'
    for (let i = 0; i < alumnos.length; i++) {
        content += '<li>' + alumnos[i].name + '</li>'
    }
    content += '</ul>'
    return content
}

export {
    createPage,
    createListaAlumnos
}