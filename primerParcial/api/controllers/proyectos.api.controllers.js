
import * as service from "../../services/proyectos.services.js";

function getAllSections(req, res) {
    const filtro = req.query

    service.getAllSections(filtro)
        .then(function (proyectos) {
            res.status(200).json(proyectos); 
        })
        .catch(function (error) {
            res.status(500).json({ message: "Error al traer los proyectos" });
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
    getAllSections,
    modificarDetalleVino
};