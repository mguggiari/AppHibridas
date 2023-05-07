
import * as service from '../services/vinos.services.js';
import * as view from '../views/vinos.views.js';

// function getAllVinos(req, res) {
//     service.getAllVinos()
//         .then(function (vinos) {
//             res.send(view.createProductListPage(vinos))
//         })
// }

//sections
function getVinoByUva(req, res) {
    
    res.set('title', req.params.uva);

    let uva = req.params.uva;
    service.getVinoByUva(uva)
        .then(function(vinos) {
            if (vinos){
                res.send(view.createPageSectionVinos(vinos))
            }
            else{
                res.send(view.createPage('El vino que buscas no se encuentra en nuestra base de datos.'))
            }
        })
}

export {
    getVinoByUva,
}