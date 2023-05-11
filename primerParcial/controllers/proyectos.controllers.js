
import * as service from '../services/proyectos.services.js';
import * as view from '../views/proyectos.views.js';

//todos
function getAllProyectos(req, res) {
    service.allProyectos()
        .then(function (proyectos) {
            console.log(proyectos)
        })
}

//sections
function getProyectoBySeccion(req, res) {
    let tipoSeccion = req.params.tipoSeccion;

    service.proyectoBySeccion(tipoSeccion)
        .then(function(proyectos) {
            if (proyectos){
                res.send(view.createPageSections(proyectos))
            }
            else{
                res.send(view.createPage('La seccion que buscas no se encuentra en nuestra base de datos.'))
            }
        })
}

export {
    getAllProyectos,
    getProyectoBySeccion
}