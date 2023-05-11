
import * as service from "../../services/clientes.services.js";

function allClientes(req, res) {
    service.allClientes()
        .then(function (clientes) {
            res.status(200).json(clientes); 
        })
        .catch(function (error) {
            res.status(500).json({ message: "Error al traer los clientes" });
        });
}


export { 
    allClientes
};