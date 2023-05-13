
import * as service from "../../services/clientes.proyectos.services.js";

function getProyectos(req, res) {
    const idCliente = req.params.idCliente

    service.getProyectos(idCliente)
        .then(function (proyectos) {
            if (proyectos) {
                res.status(200).json(proyectos)
            }
            else {
                res.status(200).json({ proyectos: [] })
            }
        })
}

function crearProyecto(req, res) {
    const idCliente = req.params.idCliente
    
    const proyecto = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies,
        section: req.body.section,
        idCliente: idCliente
    }
    
    service.crearProyecto(proyecto)
        .then(function (proyecto) {
            res.status(201).json(proyecto)
        })
        .catch(function (error) {   
            res.status(500).json({ error: { message: `Error al crear el proyectoo ${proyecto.name}` } })
        })
}

export { 
    getProyectos,
    crearProyecto
}