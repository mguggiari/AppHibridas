
import * as service from "../../services/proyectos.services.js";

function getAllVinos(req, res) {
    const filtro = req.query

    service.getAllVinos(filtro)
        .then(function (wines) {
            res.status(200).json(wines); 
        })
        .catch(function (error) {
            res.status(500).json({ message: "Error al traer los vinos" });
        });
}

function modificarDetalleVino(req, res){
    const wines = {}

    if(req.body.nombre){
        wine.nombre = req.body.nombre
    }
    if(req.body.uva){
        wine.uva = req.body.uva
    }
    if(req.body.maridaje){
        wine.maridaje = req.body.maridaje
    }
    if(req.body.descripcion){
        wine.descripcion = req.body.descripcion
    }
    if(req.body.tags){
        wine.tags = req.body.tags
    }

    service.editarVino(req.params.id, wine)
        .then(function (wine) {
            if (wine) {
                res.status(200).json(wine)
            }
            else {
                res.status(404).json({ error: { message: `El vino #${req.params.id} no se encuentra disponible en este momento`} })
            }
        })

}


export { 
    getAllVinos,
    modificarDetalleVino
};