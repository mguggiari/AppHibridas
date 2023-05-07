
import * as service from '../services/vinos.services.js';
import * as view from '../views/vinos.views.js';

function getAllVinos(req, res) {
    service.getAllVinos()
        .then(function (vinos) {
            console.log(vinos)
        })
}

//sections
function getVinoByUva(req, res) {
    let tipoUva = req.params.tipoUva;

    service.getVinoByUva(tipoUva)
        .then(function(wines) {
            if (wines){
                res.send(view.createPageSectionVinos(wines))
            }
            else{
                res.send(view.createPage('El vino que buscas no se encuentra en nuestra base de datos.'))
            }
        })
}

export {
    getAllVinos,
    getVinoByUva
}