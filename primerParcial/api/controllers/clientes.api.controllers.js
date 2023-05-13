
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

function crearCliente(req, res) {

    const cliente = {
        nombre: req.body.nombre,
        img: req.body.img,
        alt: req.body.alt,
        descripcion: req.body.descripcion,
        proyectos: req.body.proyectos
    }

    service.crearCliente(cliente)
        .then(function (cliente) {
            res.status(201).json(cliente)
        })
}

export { 
    allClientes,
    crearCliente
}