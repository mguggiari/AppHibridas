
import * as service from '../services/proyectos.services.js';
import * as view from '../views/proyectos.views.js';

function getAllVinos(req, res) {
    service.getAllVinos()
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

// function getVinoById(req, res) {
//     let idVino = req.params.idVino;

//     service.getVinoById(idVino)
//         .then(function(wine) {
//             if(wine){
//                 res.send(view.createPageDetalleVino(wine))
//             }
//             else {
//                 res.send(view.createPage('<p>El vino que buscas no se encuentra disponible actualmente</p>'))
//             }
//         })
// }   

export {
    getAllVinos,
    getProyectoBySeccion
}