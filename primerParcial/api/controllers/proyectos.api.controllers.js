
import * as service from "../../services/proyectos.services.js";

function getAllProyectos(req, res) {
    //const filtro = req.query

    service.getAllProyectos()
        .then(function (proyectos) {
            res.status(200).json(proyectos); 
        })
        .catch(function (error) {
            res.status(500).json({ message: "Error al traer los proyectos" });
        });
}





export { 
    getAllProyectos
};