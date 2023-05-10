
import * as service from "../../services/proyectos.services.js";

//todos
function getAllProyectos(req, res) {
    //const filtro = req.query

    service.allProyectos()
        .then(function (proyectos) {
            res.status(200).json(proyectos); 
        })
        .catch(function (error) {
            res.status(500).json({ message: "Error al traer los proyectos" });
        });
}

//nuevo
function nuevoProyecto(req, res) {

    const proyecto = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies,
        section: req.body.section,
        //tags: req.body.tags
    }

    service.nuevoProyecto(proyecto)
        .then(function (proyecto) {
            res.status(201).json(proyecto)
        })
        .catch(function (error) {   
            res.status(500).json({ error: { message: `Error al crear el proyectoo ${proyecto.name}` } })
        })
}

//modificar
function modificarProyecto(req, res) {
    const proyectoId = req.params.proyectoId
    const nombre = req.params.name

    const proyecto = {}

    if (req.body.name) {
        proyecto.name = req.body.name
    }
    if (req.body.description) {
        proyecto.description = req.body.description
    }
    if (req.body.link) {
        proyecto.link = req.body.link
    }
    if (req.body.img) {
        proyecto.img = req.body.img
    }
    if (req.body.technologies) {
        proyecto.technologies = req.body.technologies
    }
    if (req.body.section) {
        proyecto.section = req.body.section
    }
    

    // if (req.body.tags) {
    //     proyecto.tags = req.body.tags
    // }


    service.modificarProyecto(proyectoId, proyecto, nombre)
        .then(function (proyecto) {
            if (proyecto) {
                res.status(200).json(proyecto)
            }
            else {
                res.status(404).json({ error: { message: `El proyecto ${nombre} no pudo ser actualizado correctamente, intenta en unos segundos nuevamente.` } })
            }
        })
}

//eliminar
function eliminarProyecto(req, res) {
    const proyectoId = req.params.proyectoId

    service.eliminarProyecto(proyectoId)
        .then(function (proyecto) {
            if (proyecto) {
                res.status(200).json(proyecto)
            }
            else {
                res.status(404).json({ error: { message: `No se encuentra el proyectoo #${proyectoId}` } })
            }
        })
}

export { 
    getAllProyectos,
    nuevoProyecto,
    modificarProyecto,
    eliminarProyecto
};