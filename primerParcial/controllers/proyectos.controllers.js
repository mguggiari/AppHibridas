
import * as service from '../services/proyectos.services.js';
import * as view from '../views/proyectos.views.js';

function getAllSections(req, res) {
    service.getAllSections()
        .then(function (wines) {
            console.log(wines)
        })
}

//sections
function getProyectoBySeccion(req, res) {
    let tipoSeccion = req.params.tipoSeccion;

    service.getProyectoBySeccion(tipoSeccion)
        .then(function(proyectos) {
            if (proyectos){
                res.send(view.createPageSections(proyectos))
            }
            else{
                res.send(view.createPage('El proyecto que buscas no se encuentra en nuestra base de datos.'))
            }
        })
}



export {
    getAllSections,
    getProyectoBySeccion
}